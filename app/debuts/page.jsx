'use client'

import { useEffect, useState } from 'react';
import styles from "@/app/debuts/debuts.module.css"


export default function Debuts(){

    // Внутри функции компонента (например, export default function Debuts() { ... })
const [debuts, setDebuts] = useState([]);

useEffect(() => {
  fetch('/debuts.json')
    .then((res) => res.json())
    .then((data) => setDebuts(data))
    .catch((err) => console.error("Ошибка загрузки:", err));
}, []);

// Функция для кнопки (убедитесь, что она у вас объявлена)
const openChessWindow = () => {
  // ваша логика открытия окна
};

return (
  <div className={styles.debuts}>
    
    <a href="./" className={styles.backButton}>
      <img src="./backbutton.png" alt="" />
      <p>На главную</p>
    </a>

    <div className={styles.btncontainer}>
      <button onClick={openChessWindow} className={styles.openChessButton}>
        Открыть шахматы в новом окне
      </button>
    </div>

    {/* Динамический блок дебютов */}
    <div className={styles.dline}>
      {debuts.map((debut) => (
        <div key={debut.id} className={styles.ditems}>
          <a href={debut.href} className={styles.dcards}>
            <img src={debut.src} alt="" />
            <p>{debut.title}</p>
          </a>
        </div>
      ))}
    </div>

  </div>
);

    
}