import styles from "@/app/styles/body.module.css"
import F from "@/app/figures/page"

export default function Body(){
    return(
        <body className={styles.body}>
            <div className={styles.cards}>
                <a href="/figures"  className={styles.card1}>
                    <img src="./card1.png" alt="" />
                </a>
                 <a href="#"  className={styles.card2}>
                    <img src="./card2.png" alt="" />
                </a>
                 <a href="#"  className={styles.card3}>
                    <img src="./card3.png" alt="" />
                </a>
                 <a href="#"  className={styles.card4}>
                    <img src="./card4.png" alt="" />
                </a>

            </div>
        </body>
    )
}