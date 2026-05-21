"use client";

import React, { useEffect, useState } from "react";
import { pgnRead } from "kokopu";
import { Chessboard, Movetext } from "kokopu-react";


interface PgnReplayerProps {
  pgnString: string;
}

export default function PgnReplayer({ pgnString }: PgnReplayerProps) {
  const [game, setGame] = useState<any>(null);
  const [currentPosition, setCurrentPosition] = useState<any>(null);
  const [selectedMoveId, setSelectedMoveId] = useState<string>("start");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const parsedGame = pgnRead(pgnString, 0);

      setGame(parsedGame);
      setCurrentPosition(parsedGame.mainVariation().initialPosition());
      setSelectedMoveId("start");
      setError(null);
    } catch (err) {
      console.error("Ошибка парсинга PGN:", err);
      setGame(null);
      setCurrentPosition(null);
      setSelectedMoveId("start");
      setError("Не удалось прочитать PGN");
    }
  }, [pgnString]);

  const handleMoveSelect = (nodeId?: string) => {
    if (!game || !nodeId) return;

    const node = game.findById(nodeId);
    if (!node) return;

    setSelectedMoveId(nodeId);
    setCurrentPosition(node.positionBefore());
  };

  const goToStart = () => {
    if (!game) return;

    setSelectedMoveId("start");
    setCurrentPosition(game.mainVariation().initialPosition());
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div style={{ width: "450px" }}>
        <Chessboard position={currentPosition ?? undefined} />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <button
            onClick={goToStart}
            disabled={!game}
            style={{ padding: "8px 16px", cursor: "pointer" }}
          >
            В начало
          </button>
        </div>

        {error && (
          <div style={{ marginTop: 12, color: "crimson", fontSize: 14 }}>
            {error}
          </div>
        )}
      </div>

      <div
        style={{
          flex: 1,
          color: "white",
          border: "1px solid #ddd",
          borderRadius: "4px",
          padding: "15px",
          maxHeight: "450px",
          overflowY: "auto",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Запись партии:</h3>

        {game ? (
          <Movetext
            game={pgnString}
            selection={selectedMoveId}
            interactionMode="selectMove"
            onMoveSelected={handleMoveSelect}
            pieceSymbols="figurines"
            diagramVisible={false}
          />
        ) : (
          <div>PGN не загружен.</div>
        )}
      </div>
    </div>
  );
}