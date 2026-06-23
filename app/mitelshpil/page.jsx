'use client'

import styles from "@/app/mitelshpil/mitelshpil.module.css"
import { useEffect, useState } from 'react';

export default function Mitelshpil(){
    
     function openChessWindow(){
        window.open('/chess', '_blank', 'noopener,noreferrer,width=1000,height=800');
    }

    const [mitelshpils, setMitelshpils] = useState([]);

    useEffect(() => {
    fetch('/mitelshpils.json')
        .then((res) => res.json())
        .then((data) => setMitelshpils(data))
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
                <h2>Мительшпили </h2>
                <p>Миттельшпиль — это центральная и самая сложная стадия шахматной партии, которая следует сразу за дебютом и предшествует эндшпилю.</p>
            </div>  

            <div className={styles.dline}>
            {mitelshpils.map((item) => (
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