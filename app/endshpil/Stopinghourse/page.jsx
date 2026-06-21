'use client'

import * as React from 'react';
import styles from "@/app/endshpil/Stopinghourse/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const knightLimitationEndgame = `
[Event "Эндшпиль: Ограничение коня"]
[Date "2026.06.21"]
[Round "?"]
[Result "*"]
[SetUp "1"]
[FEN "7K/6P1/8/8/4N3/1k4b1/ppp5/8 b - - 0 1"]

1... Bd6! {Черные жертвуют слона, перекрывая линию защиты.}
2. Nxd6 c1=Q {Конь забирает слона, а черные беспрепятственно проводят ферзя.} *
`;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Эндшпиль "Мощный слон"</h1>
                    <p className={styles.prehistory}>В этом шаблоне один слон контролирует отдалённую проходную пешку и одновременно влияет на события в другом секторе доски.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                       В следующем примере белый слон не только не даёт пешке a3 продвигаться, <br />
                       но и ограничивает короля соперника в приближении к пешечной группе на королевском фланге.
                    </p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={knightLimitationEndgame} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}