'use client'

import * as React from 'react';
import styles from "@/app/mitelshpil/PawnAssault/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const wheatStormMiddlegame = `
[Event "Пешечный штурм"]
[Round "?"]
[Result "*"]
[SetUp "1"]
[FEN "r1bqkb1r/3n1ppp/p1p1pn2/1p6/2BP4/3BPN2/PP3PPP/RNBQK2R w KQkq - 0 9"]

9. g4 
9... a5 
10. h4 
10... b4 
11. g5 *
`;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Миттельшпиль "Пешечный штурм"</h1>
                    <p className={styles.prehistory}>Пешечный штурм — типичный план в позициях с разносторонними рокировками.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                        Белые могут начать атаку ходом g4, а затем поддержать её ходом h4. Поскольку у чёрных будет <br />
                        свой штурм на ферзевом фланге (например, a5 и b4), важно действовать энергично, чтобы опередить соперника. <br />
                        В итоге белые могут добиться вскрытия линий и атаки на короля.
                    </p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={wheatStormMiddlegame} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}