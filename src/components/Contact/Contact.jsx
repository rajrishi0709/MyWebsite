import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import email from '../../../public/assets/contact/emailIcon.png';
import linkedin from '../../../public/assets/contact/linkedinIcon.png';
import github from '../../../public/assets/contact/githubIcon.png';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text} id="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={email} alt="Email icon" />
          <a href="mailto:rishiraj100709@gmail.com">rishiraj100709@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rishiraj0709/">linkedin.com/rishiraj0709</a>
        </li>
        <li className={styles.link}>
          <img src={github} alt="Github icon" />
          <a href="https://github.com/rajrishi0709">github.com/rajrishi0709</a>
        </li>
      </ul>
    </footer>
  );
};
