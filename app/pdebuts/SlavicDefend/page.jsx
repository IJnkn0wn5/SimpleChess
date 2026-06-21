'use client'

import * as React from 'react';
import styles from "@/app/pdebuts/SlavicDefend/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const slavDefensePgn = `
[Event "Славянская защита"]
[Round "?"]
[Result "*"]

1. d4 d5
2. c4 c6
3. Nf3 Nf6
4. Nc3 e6
5. e3 Nbd7
6. Bd3 dxc4
7. Bxc4 b5 *
`;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Дебют "Славянская защита"</h1>
                    <p className={styles.prehistory}>Славянская защита относится к закрытым началам и возникает на доске после ходов 1.d4 d5 2.c4 c6. <br />
                    Находит применение за черных в ответ на Ферзевый гамбит, среди всех построений которого является самым часто встречающимся. Стоит на прочном <br />
                    позиционном, но не лишенном тактического потенциала, фундаменте и входит в дебютный репертуар преобладающего большинства современных шахматистов <br />
                    высшего класса.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                        Укрепляя пешку d5 ходом 2…c6, черные включаются в борьбу за центр и не перекрывают диагональ c8-h3, как в Отказанном ферзевом гамбите (2…e6), <br />
                        что оставляет возможность развития белопольного слона на f5 или g4. Кроме того, создаются предпосылки для пешечного наступления на ферзевом фланге. <br />
                        Что касается белых, то их планы в основном связаны с игрой в центре.
                    </p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={slavDefensePgn} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}