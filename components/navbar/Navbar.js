import React from 'react'
import styles from "./Navbar.module.css";
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <h1 className={styles.title}>GoPro</h1>
            <div className={styles.logocolor}>
                <div className={`${styles.coloritems} ${styles.color1}`}>
                    

                </div>
                <div className={`${styles.coloritems} ${styles.color2}`}>
                    

                </div>
                <div className={`${styles.coloritems} ${styles.color3}`}>
                

                </div>
                <div className={`${styles.coloritems} ${styles.color4}`}>

                </div>
            </div>
        </div>
        <ul className={styles.navbar}>
            
            <li className={styles.items}>
                overview

            </li>
            <li className={styles.items}>
                techspecs

            </li>
            <li className={styles.items}>
                reviews

            </li>
        </ul>


    </div>
  )
}
