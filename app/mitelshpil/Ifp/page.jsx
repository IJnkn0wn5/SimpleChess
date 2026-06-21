'use client'

import * as React from 'react';
import styles from "@/app/mitelshpil/Ifp/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const iqpStrategyMiddlegame = `
[Event "Игра против ИФП"]
[Round "?"]
[Result "*"]
[SetUp "1"]
[FEN "3r2k1/pp1r1pp1/2n1b2p/q2p4/8/1P2PN1P/PQ1RBPP1/3R2K1 w - - 0 1"]

1. Ne5! {Белые форсируют размен последней пары коней для упрощения игры.}
1... Nxe5 {Черные принимают размен, так как конь белых слишком активен.}
2. Qxe5 {Белые забирают ферзем, фиксируя контроль над ослабленными черными полями и плацдармом d4.} *
`;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Игра против Изолированной Ферзевой Пешки (ИФП)</h1>
                    <p className={styles.prehistory}>В позициях с ИФП стороне, играющей против неё, выгодно упрощать игру, разменивая лёгкие фигуры. Частый план — разменять коня, который защищает поле перед изолированной пешкой.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                        Здесь белые могут сыграть Ne5!, чтобы форсировать размен последней пары коней. <br />
                        Этот размен ослабляет чёрные поля в центре (особенно d4), превращая его в удобный <br />
                        плацдарм для вторжения. Кроме того, освобождается поле f3 для слона, который усилит давление на пешку d5.
                    </p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={iqpStrategyMiddlegame} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}