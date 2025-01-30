import React from 'react'
import styles from "./Hero.module.css"
import heroImage from '../../../public/assets/hero/Rishi_Raj_Portfolio.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
        <img src={heroImage} alt='hero image' className={styles.heroImg}/>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Rishi Raj</h1>
            <p className={styles.description}>
                Enthusiastic web developer with hands-on experience in HTML, CSS, JavaScript, and React. Passionate about building user-friendly, responsive web applications and eager to contribute to innovative teams.
            </p>
            <a href='mailto:rishiraj100709@gmail.com' className={styles.contactBtn}>Contact Me</a>
            
        </div>
        
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
