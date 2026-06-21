'use client'

import * as React from 'react';
import styles from "@/app/pdebuts/evans/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const evansGambitPgn = `
[Event "Гамбит Эванса"]
[Round "?"]
[Result "*"]

1. e4 e5
2. Nf3 Nc6
3. Bc4 Bc5
4. b4 Bxb4
(4... Bb6 {Черные отклоняют гамбит, отступая слоном.})
5. c3 Ba5
6. d4 *
`;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Дебют "Гамбит Эванса"</h1>
                    <p className={styles.prehistory}>Гамбит Эванса относится к открытым началам и возникает в Итальянской партии (1.e4 e5 2.Кf3 Кc6 3.Сc4 Сc5) <br />
                        после хода 4.b4. Был изобретен и введен в практику в 20-годах XIX века английским  шахматистом и мореплавателем Уильямом Дейвисом Эвансом, <br />
                        быстро получив признание у мастеров той эпохи как долгожданная 
                        альтернатива Королевскому гамбиту.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                        Белые жертвуют фланговую пешку, дабы на 4…Сxb4 путем 5.c3 выиграть важный темп для проведения d2-d4, что обеспечивает перевес в центре, <br />
                        усиливает инициативу и потенциал атаки. Наращивая давление на королевский фланг черных, ферзя часто переводят на b3, <br />
                        чернопольного слона – на a3. В противовес этим идеям Эмануил Ласкер разработал стройную защиту 5…Сa5 6.0-0 d6 7.d4 Сb6, <br />
                        в которой после 8.dxe5 dxe5 9.Фxd8+ Кxd8 10.Кxe5 черные возвращают материал и добиваются хорошего эндшпиля. <br />
                        Чтобы избежать упрощения игры, белые играют 6.d4 сразу. Этот ход является основным при любом отступлении слона: 5…Сa5, 5…Сe7, 5…Сc5, 5…Сd3. <br />
                        Помимо перечисленных вариантов, среди которых сильнейшими считаются 5…Сa5 и 5…Сe7, имеется возможность отказаться от <br />
                        жертвы пешки с помощью 4…Сb6. Контргамбит 4…d5 не несет выгоды для черных. После 5.exd5 Кxb4 6.0-0 Кf6 7.Кxe5 Кbxd5 8.d4 Сe7 9.Сb3 0-0 10.с4 <br />
                        белые стоят заметно лучше.
                    </p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={evansGambitPgn} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}