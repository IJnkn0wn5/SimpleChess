'use client'

import * as React from 'react';
import styles from "@/app/mitelshpil/StoneWall/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const stonewallMiddlegame = `
[Event "Каменная стена"]
[Round "?"]
[Result "*"]
[SetUp "1"]
[FEN "3rbkr1/pp2q1pp/2p1p3/3nNp2/2RP4/P3Q1P1/1P2PPBP/5RK1 w - - 0 1"]

1. Bxd5! {Белые убирают еще одну легкую фигуру черных, приближая стратегический эндшпиль.}
1... exd5 {Черные вынуждены брать пешкой 'e', так как взятие пешкой 'c' отдает линию 'c'.}
2. Rc3 {Ладья уходит из-под боя с сохранением контроля над важными полями.} *
`
;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Миттельшпиль "Каменная Стена"</h1>
                    <p className={styles.prehistory}>Ключевая идея в пешечной структуре «Каменная стена» (d5, e6, f5 у чёрных) — разменять все лёгкие фигуры, кроме «плохого» белопольного слона чёрных. После этого белые могут закрепить коня на сильном поле e5 и усиливать давление.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                        В этой позиции белые уже разменяли чернопольного слона. Теперь они могут <br />
                        продолжить план ходом Bxd5!, убирая ещё одну легкую фигуру. У чёрных останется <br />
                        белопольный слон, чья активность будет серьёзно ограничена собственными пешками.
                    </p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={stonewallMiddlegame} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}