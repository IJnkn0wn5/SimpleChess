'use client'

import styles from "@/app/endshpil/endshpil.module.css"
import { useEffect, useState } from 'react';


export default function Endshpil(){
    
     function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    const [endshpils, setEndshpils] = useState([]);

    useEffect(() => {
    fetch('/endshpils.json')
        .then((res) => res.json())
        .then((data) => setEndshpils(data))
        .catch((err) => console.error("Ошибка загрузки:", err));
    }, []);

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
                {endshpils.map((item) => (
                    <div key={item.id} className={styles.ditems}>
                        <a href={item.href} className={styles.dcards}>
                            <img src={item.src} alt="" />
                            <p>{item.title}</p>
                        </a>
                    </div>
                ))}
            </div>

             
        </div>
    )
    
}