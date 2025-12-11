import styles from "@/app/styles/header.module.css"
import { Holtwood_One_SC } from 'next/font/google'
import Home from "@/app/page"

const holtwood = Holtwood_One_SC({
  weight: '400',
  style: ['normal']
})

export default function Header(){
    return (
        <header className={` ${styles.header} ${holtwood.className} `}>
            <a href="./" className={styles.header}>
                <h1>SIMPLE CHESS</h1>
                <img src="./sc_logo.png" alt="" />
            </a>
            
        </header>
    )
}