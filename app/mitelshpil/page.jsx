'use client'

import styles from "@/app/mitelshpil/mitelshpil.module.css"


export default function Mitelshpil(){
    
     function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    return (
        <div className={styles.debuts}>

            <a href="./" className={styles.backButton}>
                <img src="./backbutton.png" alt="" />
                <p>На главную</p>
            </a>


            <div className={styles.btncontainer}>
                <button onClick={openChessWindow} className={styles.openChessButton}> Открыть шахматы в новом окне </button>
            </div>

            <div className={styles.description}>
                <h2>Мительшпили </h2>
                <p>Миттельшпиль — это центральная и самая сложная стадия шахматной партии, которая следует сразу за дебютом и предшествует эндшпилю.</p>
            </div>  

            <div className={styles.dline}>
                <div className={styles.ditems}>
                    <a href="/mitelshpil/PawnAssault" className={styles.dcards}>
                        <img src="./PawnAssault.png" alt="" />
                        <p>Пешечный штурм</p>
                    </a>
                </div>
                
                <div className={styles.ditems}>
                    <a href="/mitelshpil/StoneWall" className={styles.dcards}>
                        <img src="./StoneWall.png" alt="" />
                        <p>Каменная стена</p>
                    </a>
                </div>

                <div className={styles.ditems}>
                    <a href="/mitelshpil/Ifp" className={styles.dcards}>
                        <img src="./ifp.png" alt="" />
                        <p>ИФП</p>
                    </a>
                </div>
            </div>

             
        </div>
    )
    
}