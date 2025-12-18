import { WHITE } from 'chess.js';
import React, { useState, useEffect } from 'react';
import styles from "@/app/components/board.module.css"

// Simple chess component for Next.js
// Click a piece to select, then click destination to move.
// Implements basic legal moves, check detection, castling, en-passant, promotion (to queen).

const initialFEN = `rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1`;

// Helper: convert FEN to board array
function fenToBoard(fen) {
  const [piecePlacement, activeColor, castling, enPassant] = fen.split(' ');
  const rows = piecePlacement.split('/');
  const board = Array(8).fill(null).map(() => Array(8).fill(null));
  for (let r = 0; r < 8; r++) {
    const row = rows[r];
    let file = 0;
    for (const ch of row) {
      if (ch >= '1' && ch <= '8') {
        file += parseInt(ch, 10);
      } else {
        const color = ch === ch.toUpperCase() ? 'w' : 'b';
        const type = ch.toLowerCase();
        board[r][file] = { type, color };
        file++;
      }
    }
  }
  return board;
}

function cloneBoard(board) {
  return board.map(row => row.map(cell => cell ? { ...cell } : null));
}

function inBounds(r, f) {
  return r >= 0 && r < 8 && f >= 0 && f < 8;
}

function findKing(board, color) {
  for (let r = 0; r < 8; r++) for (let f = 0; f < 8; f++) {
    const p = board[r][f];
    if (p && p.type === 'k' && p.color === color) return [r, f];
  }
  return null;
}

function squareToAlgebraic([r, f]) {
  return String.fromCharCode('a'.charCodeAt(0) + f) + (8 - r);
}

function algebraicToSquare(s) {
  const f = s.charCodeAt(0) - 'a'.charCodeAt(0);
  const r = 8 - parseInt(s[1], 10);
  return [r, f];
}

// Returns true if square [r,f] is attacked by opponentColor
function isSquareAttacked(board, r, f, opponentColor, enPassantTarget = null) {
  // pawn attacks
  const pawnDir = opponentColor === 'w' ? -1 : 1; // pawns move up for white
  for (const df of [-1, 1]) {
    const rr = r + pawnDir;
    const ff = f + df;
    if (inBounds(rr, ff)) {
      const p = board[rr][ff];
      if (p && p.color === opponentColor && p.type === 'p') return true;
    }
  }
  // knights
  const knightMoves = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
  for (const [dr, df] of knightMoves) {
    const rr = r+dr, ff=f+df;
    if (inBounds(rr, ff)) {
      const p = board[rr][ff];
      if (p && p.color === opponentColor && p.type === 'n') return true;
    }
  }
  // sliding pieces: bishops/queens (diagonals)
  const diagDirs = [[-1,-1],[-1,1],[1,-1],[1,1]];
  for (const [dr, df] of diagDirs) {
    let rr=r+dr, ff=f+df;
    while (inBounds(rr,ff)) {
      const p = board[rr][ff];
      if (p) {
        if (p.color === opponentColor && (p.type === 'b' || p.type === 'q')) return true;
        break;
      }
      rr+=dr; ff+=df;
    }
  }
  // sliding pieces: rooks/queens (orthogonal)
  const orthoDirs = [[-1,0],[1,0],[0,-1],[0,1]];
  for (const [dr, df] of orthoDirs) {
    let rr=r+dr, ff=f+df;
    while (inBounds(rr,ff)) {
      const p = board[rr][ff];
      if (p) {
        if (p.color === opponentColor && (p.type === 'r' || p.type === 'q')) return true;
        break;
      }
      rr+=dr; ff+=df;
    }
  }
  // king nearby
  for (let dr=-1; dr<=1; dr++) for (let df=-1; df<=1; df++) if (!(dr===0 && df===0)) {
    const rr=r+dr, ff=f+df;
    if (inBounds(rr,ff)) {
      const p = board[rr][ff];
      if (p && p.color === opponentColor && p.type === 'k') return true;
    }
  }
  return false;
}

// Generate pseudo-legal moves for a piece at [r,f]
function generatePseudoLegal(board, r, f, state) {
  const p = board[r][f];
  if (!p) return [];
  const moves = [];
  const color = p.color;
  const dir = color === 'w' ? -1 : 1;
  if (p.type === 'p') {
    const startRow = color === 'w' ? 6 : 1;
    // forward one
    const r1 = r + dir;
    if (inBounds(r1, f) && !board[r1][f]) {
      moves.push([r1,f]);
      // forward two
      const r2 = r + dir*2;
      if (r === startRow && !board[r2][f]) moves.push([r2,f]);
    }
    // captures
    for (const df of [-1,1]) {
      const rr = r+dir, ff = f+df;
      if (inBounds(rr,ff)) {
        const target = board[rr][ff];
        if (target && target.color !== color) moves.push([rr,ff]);
      }
    }
    // en passant
    if (state.enPassant) {
      const [er, ef] = state.enPassant; // target square where pawn would land if en-passant capture
      if (Math.abs(ef - f) === 1 && er === r + dir) {
        // ensure there is opponent pawn on the same rank as source
        const oppPawnRow = r;
        const oppPawnCol = ef;
        const opp = board[oppPawnRow][oppPawnCol];
        if (opp && opp.type === 'p' && opp.color !== color) moves.push([er, ef]);
      }
    }
  } else if (p.type === 'n') {
    const del = [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    for (const [dr,df] of del) {
      const rr=r+dr, ff=f+df;
      if (!inBounds(rr,ff)) continue;
      const t = board[rr][ff];
      if (!t || t.color !== color) moves.push([rr,ff]);
    }
  } else if (p.type === 'b' || p.type === 'r' || p.type === 'q') {
    const dirs = p.type === 'b' ? [[-1,-1],[-1,1],[1,-1],[1,1]] : p.type === 'r' ? [[-1,0],[1,0],[0,-1],[0,1]] : [[-1,-1],[-1,1],[1,-1],[1,1],[-1,0],[1,0],[0,-1],[0,1]];
    for (const [dr,df] of dirs) {
      let rr=r+dr, ff=f+df;
      while (inBounds(rr,ff)) {
        const t = board[rr][ff];
        if (!t) moves.push([rr,ff]);
        else { if (t.color !== color) moves.push([rr,ff]); break; }
        rr+=dr; ff+=df;
      }
    }
  } else if (p.type === 'k') {
    for (let dr=-1; dr<=1; dr++) for (let df=-1; df<=1; df++) if (!(dr===0 && df===0)) {
      const rr=r+dr, ff=f+df;
      if (!inBounds(rr,ff)) continue;
      const t = board[rr][ff];
      if (!t || t.color !== color) moves.push([rr,ff]);
    }
    // castling
    if (color === 'w' && r === 7 && f === 4) {
      if (state.castling.K && !board[7][5] && !board[7][6]) moves.push([7,6]);
      if (state.castling.Q && !board[7][3] && !board[7][2] && !board[7][1]) moves.push([7,2]);
    }
    if (color === 'b' && r === 0 && f === 4) {
      if (state.castling.k && !board[0][5] && !board[0][6]) moves.push([0,6]);
      if (state.castling.q && !board[0][3] && !board[0][2] && !board[0][1]) moves.push([0,2]);
    }
  }
  return moves;
}

function moveLeavesKingInCheck(board, from, to, color, state) {
  const b2 = cloneBoard(board);
  const [fr, ff] = from; const [tr, tf] = to;
  const moving = b2[fr][ff];
  // handle en-passant capture
  if (moving.type === 'p' && state.enPassant && tr === state.enPassant[0] && tf === state.enPassant[1] && ff !== tf && !b2[tr][tf]) {
    // capture pawn behind target
    const capRow = fr;
    b2[capRow][tf] = null;
  }
  // castling move adjusts rook
  if (moving.type === 'k' && Math.abs(tf - ff) === 2) {
    // king-side or queen-side
    if (tf === 6) {
      // rook from h to f
      b2[tr][5] = b2[tr][7]; b2[tr][7] = null;
    } else if (tf === 2) {
      b2[tr][3] = b2[tr][0]; b2[tr][0] = null;
    }
  }
  b2[tr][tf] = moving;
  b2[fr][ff] = null;
  const kingPos = findKing(b2, color);
  if (!kingPos) return true; // should not happen
  return isSquareAttacked(b2, kingPos[0], kingPos[1], color === 'w' ? 'b' : 'w', null);
}

export default function SimpleChess() {
  const [board, setBoard] = useState(() => fenToBoard(initialFEN));
  const [turn, setTurn] = useState('w');
  const [selected, setSelected] = useState(null);
  const [legalDestinations, setLegalDestinations] = useState([]);
  const [stateExtras, setStateExtras] = useState({ castling: { K:true, Q:true, k:true, q:true }, enPassant: null });
  const [message, setMessage] = useState('Ход белых');

  useEffect(() => {
    setMessage(turn === 'w' ? 'Ход белых' : 'Ход черных');
  }, [turn]);

  function reset() {
    setBoard(fenToBoard(initialFEN));
    setTurn('w');
    setSelected(null);
    setLegalDestinations([]);
    setStateExtras({ castling: { K:true, Q:true, k:true, q:true }, enPassant: null });
  }

  function onSquareClick(r,f) {
    const p = board[r][f];
    if (selected) {
      // if clicking same square, unselect
      if (selected[0] === r && selected[1] === f) { setSelected(null); setLegalDestinations([]); return; }
      // if destination is legal, attempt move
      const legal = legalDestinations.some(([rr,ff])=>rr===r&&ff===f);
      if (legal) {
        doMove(selected, [r,f]);
        setSelected(null); setLegalDestinations([]);
        return;
      }
      // else if clicked own piece, select it
      if (p && p.color === turn) {
        selectSquare(r,f);
        return;
      }
      // else clear
      setSelected(null); setLegalDestinations([]);
    } else {
      if (p && p.color === turn) selectSquare(r,f);
    }
  }

  function selectSquare(r,f) {
    const pseudo = generatePseudoLegal(board, r, f, stateExtras);
    // filter out moves that leave king in check
    const legal = pseudo.filter(to => !moveLeavesKingInCheck(board, [r,f], to, turn, stateExtras));
    setSelected([r,f]);
    setLegalDestinations(legal);
  }

  function doMove(from, to) {
    const [fr, ff] = from; const [tr, tf] = to;
    const moving = board[fr][ff];
    const newBoard = cloneBoard(board);
    // en-passant capture
    if (moving.type === 'p' && stateExtras.enPassant && tr === stateExtras.enPassant[0] && tf === stateExtras.enPassant[1] && ff !== tf && !newBoard[tr][tf]) {
      // remove the pawn that was passed
      newBoard[fr][tf] = null;
    }
    // castling rook move if king moves two files
    if (moving.type === 'k' && Math.abs(tf - ff) === 2) {
      if (tf === 6) { // king side
        newBoard[tr][5] = newBoard[tr][7]; newBoard[tr][7] = null;
      } else if (tf === 2) { // queen side
        newBoard[tr][3] = newBoard[tr][0]; newBoard[tr][0] = null;
      }
    }
    // move piece
    newBoard[tr][tf] = moving;
    newBoard[fr][ff] = null;
    // promotion: pawn reaches last rank
    if (moving.type === 'p' && (tr === 0 || tr === 7)) {
      newBoard[tr][tf] = { type: 'q', color: moving.color };
    }
    // update castling rights
    const newCast = { ...stateExtras.castling };
    if (moving.type === 'k') {
      if (moving.color === 'w') { newCast.K = false; newCast.Q = false; }
      else { newCast.k = false; newCast.q = false; }
    }
    if (moving.type === 'r') {
      if (fr === 7 && ff === 0) newCast.Q = false;
      if (fr === 7 && ff === 7) newCast.K = false;
      if (fr === 0 && ff === 0) newCast.q = false;
      if (fr === 0 && ff === 7) newCast.k = false;
    }
    // set en-passant target
    let newEnPassant = null;
    if (moving.type === 'p' && Math.abs(tr - fr) === 2) {
      newEnPassant = [(fr + tr) / 2, ff];
    }
    // if pawn double-step occurred and opponent could capture en-passant, store target
    // but we store as [r,f] landing square

    const nextTurn = turn === 'w' ? 'b' : 'w';
    // check if opponent in checkmate/stalemate not implemented; we at least update state
    setBoard(newBoard);
    setTurn(nextTurn);
    setStateExtras({ castling: newCast, enPassant: newEnPassant });
  }

  function renderPiece(p) {
    if (!p) return '';
    const map = {
      'p': { w:'♙', b:'♟' },
      'r': { w:'♖', b:'♜' },
      'n': { w:'♘', b:'♞' },
      'b': { w:'♗', b:'♝' },
      'q': { w:'♕', b:'♛' },
      'k': { w:'♔', b:'♚' }
    };
    return map[p.type][p.color];
  }

  return (
    <div className={styles.board}>

      <div style={{userSelect:'none'}}>
            <div className={styles.hod}>{message}</div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(8,48px)', border:'2px solid #333'}}>
                {board.map((row, r) => row.map((cell, f) => {
                  const isLight = (r+f) % 2 === 0;
                  const bg = isLight ? '#eee' : '#769656';
                  const selectedClass = selected && selected[0]===r && selected[1]===f;
                  const isLegal = legalDestinations.some(([rr,ff])=>rr===r&&ff===f);
                  return (
                    <div key={`${r}-${f}`} onClick={()=>onSquareClick(r,f)}
                      style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',fontSize:24,cursor:'pointer',background:bg,position:'relative'}}>
                      {cell ? <span style={{fontSize:26}}>{renderPiece(cell)}</span> : null}
                      {selectedClass ? <div style={{position:'absolute',inset:2,boxShadow:'inset 0 0 0 3px rgba(255,255,0,0.6)'}} /> : null}
                      {isLegal ? <div style={{position:'absolute',width:12,height:12,borderRadius:6,background:'rgba(0,0,0,0.3)',left:'calc(50% - 6px)',top:'calc(50% - 6px)'}} /> : null}
                    </div>
                  );
                }))}
              </div>
              <div className={styles.resbutton}>
                <button onClick={reset} style={{padding:'6px 10px',marginRight:8}}>Сбросить</button>
              </div>
          </div>

    </div>
    
  );
}

