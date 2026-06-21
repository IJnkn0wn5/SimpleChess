'use client'

import * as React from 'react';
import styles from "@/app/endshpil/SaveDistation/pdebuts.module.css"
import PgnReplayer from "@/app/components/PgnReplayer"

const oppositionEndgame = `
[Event "Сохранение дистанции"]
[Round "?"]
[Result "*"]
[SetUp "1"]
[FEN "8/8/8/2k1p1K1/4P3/8/8/8 w - - 0 1"]

1. Kf5? {Очевидная ошибка. Белый король слишком рано идет на контакт с пешкой и теряет оппозицию.}
1... Kd4 {Черный король одновременно защищает свою пешку e5 и атакует белую пешку e4. У белых нет способов её спасти.} *
`;

export default function Pdebuts(){

    function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return(
            <div className={styles.body}>

                <div className={styles.pd}>
                    <h1>Эндшпиль "Сохранение дистанции"</h1>
                    <p className={styles.prehistory}>Когда два короля встают в оппозицию, тот, кто ходит первым, обычно её теряет. Этот приём встречается в бесчисленных пешечных окончаниях и часто определяет, будет ли позиция выиграна, сведена к ничьей или проиграна.</p>

                    <h2 className={styles.otheory}>Общая теория</h2>

                    <p className={styles.theory}>
                       Здесь оба короля должны сохранять дистанцию от пешек. Например, если белые сыграют 1. Kf5, <br />
                       чтобы атаковать пешку e5, последует 1...Kd4, и чёрный король одновременно защитит свою пешку и атакует белую на e4. <br />
                       У белых не останется способов её спасти.
                    </p>

                    <div className={styles.rpl}> 
                        <PgnReplayer pgnString={oppositionEndgame} />
                    </div>

                    <div className={styles.btncontainer}>
                        <button onClick={openChessWindow} className={styles.openChessButton}> Открыть доску </button>
                    </div>
                </div>
                
            </div>
    )

}