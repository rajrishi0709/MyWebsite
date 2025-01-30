// import React from 'react'
// import styles from "./Skills.module.css"
// import react from "../../assets/skills/react.png"
// import html from "../../assets/skills/html.png"
// import css from "../../assets/skills/css.png"
// import figma from '../../assets/skills/figma.png'
// import mysql from '../../assets/skills/mysql.png'
// import node from '../../assets/skills/node.png'

// export const Skills = () => {
//   return (
//         <section className={styles.container}>
//             <dev className={styles.title}>
//                 SKILLS
//             </dev>
//             <dev className={styles.content}>
//                 <dev className={styles.itemResize}>
//                     <dev className={styles.contentItems}>
//                         <img src={html}></img>
//                         <h3>HTML</h3>
//                     </dev>
//                     <dev className={styles.contentItems}>
//                         <img src={css}></img>
//                         <h3>CSS</h3>
//                     </dev>
//                     <dev className={styles.contentItems}>
//                         <img src={figma}></img>
//                         <h3>Figma</h3>
//                     </dev>
//                 </dev>

//                 <dev className={styles.itemResize}>
//                     <dev className={styles.contentItems}>
//                         <img src={mysql} className={styles.image}></img>
//                         <h3>MySQL</h3>
//                     </dev>
//                     <dev className={styles.contentItems}>
//                         <img src={react} ></img>
//                         <h3>React</h3>
//                     </dev>
//                     <dev className={styles.contentItems}>
//                         <img src={node}></img>
//                         <h3>Node</h3>
//                     </dev>
//                 </dev>
//             </dev>
//         </section>
// )
// }



import React from "react";
import styles from './Skills.module.css'
import skills from '../Data/skills.json'
import { getImageUrl } from "../../utils";
// import image from '../../assets/skills'

export const Skills = () => {

    // console.log("Hii");
    // console.log(skills.imageSrc);
    console.log(getImageUrl);
    return (
        <section className={styles.container}>
            <div className={styles.title}>SKILLS</div>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}> 
                                    
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}