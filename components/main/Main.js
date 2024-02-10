import React from 'react'
import styles from "./main.module.css";
import Image from 'next/image';

export const Main = () => {
  return (
    <div className={styles.container}>

        <div className={styles.textcontainer}>
            <div>Hero 

                {/* <div className={styles.imagecontainer}>
                    <p className={styles.text}>8</p>
                    <Image src="/camera.png" fill></Image>
                </div> */}
                Black
            </div>

        </div>
    </div>
  )
}
