import React from 'react'
import styles from './About.module.css'
import cursor from '../../../public/assets/about/cursorIcon.png'
import server from '../../../public/assets/about/serverIcon.png'
import ui from '../../../public/assets/about/uiIcon.png'

export const About = () => {
  return (
    <section className={styles.container}>
        <div className={styles.title}>ABOUT</div>
        <div className={styles.content}>
            
            <div className={styles.items}>
                <div>
                    <img src={cursor} />
                </div>
                <div>
                    <h2>Frontend Developer</h2>
                    <p>
                        I'm a front-end developer with experience in building responsive and optimized sites
                    </p>
                </div>
            </div>

            <div className={styles.items}>
                <div>
                    <img src={server} />
                </div>
                <div>
                    <h2>Backend Developer</h2>
                    <p>
                        I have develoed fast and optimised back-end systems and APIs
                    </p>
                </div>
            </div>

            <div className={styles.items}>
                <div>
                    <img src={ui} />
                </div>
                <div>
                    <h2>UI Designer</h2>
                    <p>
                        I have designed multiple landing pages and have created design systems as well
                    </p>
                </div>
            </div>
        </div>
    </section>

)
}
