'use client'

import styles from "@/app/endshpil/endshpil.module.css"


export default function Endshpil(){
    
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
                <h2>Эндшпили </h2>
                <p>Эндшпиль — это финальная стадия шахматной или шашечной партии, которая наступает <br />
                после размена большинства фигур. На этом этапе главной задачей становится проведение пешек в ферзи и активная борьба королей.</p>
            </div>  

            <div className={styles.dline}>
                <div className={styles.ditems}>
                    <a href="/endshpil/SaveDistation" className={styles.dcards}>
                        <img src="./saved.png" alt="" />
                        <p>Сохранение дистанции</p>
                    </a>
                </div>
                
                <div className={styles.ditems}>
                    <a href="/endshpil/Stopinghourse" className={styles.dcards}>
                        <img src="./stopinghourse.png" alt="" />
                        <p>Ограничение Коня</p>
                    </a>
                </div>

                <div className={styles.ditems}>
                    <a href="/endshpil/StrongE" className={styles.dcards}>
                        <img src="./stronge.png" alt="" />
                        <p>Сильный Слон</p>
                    </a>
                </div>
            </div>

             
        </div>
    )
    
}