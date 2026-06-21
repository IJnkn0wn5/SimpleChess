'use client'

import * as React from 'react';
import styles from "@/app/pdebuts/Grob/pdebuts.module.css"
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
                    <p className={styles.prehistory}>Генри Гроб – швейцарский шахматист, который получил широкую известность не только в своей стране, но и во всем мире!<br/>
                    Многие его стратегии пользуются широкой популярностью и по сегодняшний день! Например, знаменитое начало партии g2-g4 называется «атака Гроба», ведь именно он придумал этот ход.<br/>
                    И действительно, такой выпад пешки заставляет соперника задуматься, и часто застает врасплох уже с первого хода.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                        Ходом 1.g4 белые захватывают пространство на королевском фланге и <br />
                        готовятся разместить белопольного слона на освободившемся поле g2, <br />
                        тем самым создавая давление по большой диагонали. Подвергается нападению черная пешка b7, <br />
                        пешка g4, как правило, стремится к продвижению. При этом белые радикально ослабляют комплекс <br />
                        черных полей f4-h4-f2, позицию для короткой рокировки и положение короля в целом.<br />
                        Реагировать на дебют коневой пешки можно различными способами: в распоряжении черных <br />
                        имеется целый ряд продолжений, важнейшее место среди которых занимают варианты 1…d5 и 1…e5.<br />
                    </p>

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