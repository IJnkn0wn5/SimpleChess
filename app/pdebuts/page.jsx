'use client'

import * as React from 'react';
import styles from "@/app/pdebuts/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const samplePgn = `
[Event "Атака Гроба"]
[Date "2026.05.20"]
[Round "?"]
[Result "*"]

1. g4 d5 
(1... e5 2. Bg2 {Черные берут под контроль поле g5.})
2. Bg2 Bxg4 
3. c4 c6 
4. cxd5 cxd5 
5. Qb3 Nf6? 
6. Qxb7 Nbd7 
7. Bxd5 *
`;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Дебют "Атака Гроба"</h1>
                    <p>Генри Гроб – швейцарский шахматист, который получил широкую известность не только в своей стране, но и во всем мире!<br/>
                    Многие его стратегии пользуются широкой популярностью и по сегодняшний день! Например, знаменитое начало партии g2-g4 называется «атака Гроба», ведь именно он придумал этот ход.<br/>
                    И действительно, такой выпад пешки заставляет соперника задуматься, и часто застает врасплох уже с первого хода.</p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={samplePgn} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}