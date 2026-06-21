'use client'

import * as React from 'react';
import styles from "@/app/endshpil/StrongE/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const multipurposeBishopFixedPgn = `
[Event "Эндшпиль: Multipurpose Bishop"]
[Date "2026.06.21"]
[Round "?"]
[Result "1-0"]
[SetUp "1"]
[FEN "8/6p1/4B2p/8/6P1/p3k1K1/6P1/8 w - - 0 1"]

1. g5 hxg5
(1... Ke2 2. Ba2 Ke3 3. Be6 Kd4 4. Kf4 h5 5. Kf5 Kd3 6. g3 Kd4 7. Bf7 h4 8. gxh4 Kc3 9. Kg6 {Это проигрыш для чёрных})
2. Kg4 Kf2 3. g3 Kg2 4. Bg8 Kf2 5. Bd5 Ke3 6. Kxg5 Kd4 7. Bf7 Ke4 8. Kh4 g6 9. Bxg6+ Kd5 10. g4 Ke5 11. Bb1 Kd4 12. Ba2 Kd3 13. Kg5 Kd2 14. Be6 Kd1 15. Kf5 a2 16. Bxa2 Kc2 {Белые выигрывают} *
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
                        <PgnReplayer pgnString={multipurposeBishopFixedPgn} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}