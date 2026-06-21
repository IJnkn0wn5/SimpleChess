'use client'

import styles from "@/app/debuts/debuts.module.css"


export default function Debuts(){
    
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

            <div className={styles.dline}>
                <div className={styles.ditems}>
                    <a href="/pdebuts/Grob" className={styles.dcards}>
                        <img src="./debjutgroba.png" alt="" />
                        <p>Дебют Гроба</p>
                    </a>
                </div>
                
                <div className={styles.ditems}>
                    <a href="/pdebuts/evans" className={styles.dcards}>
                        <img src="./evans.png" alt="" />
                        <p>Гамбит Эванса</p>
                    </a>
                </div>

                <div className={styles.ditems}>
                    <a href="/pdebuts/SlavicDefend" className={styles.dcards}>
                        <img src="./sd.png" alt="" />
                        <p>Славянская защита</p>
                    </a>
                </div>
            </div>

             
        </div>
    )
    
}