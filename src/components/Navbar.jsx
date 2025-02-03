import React, {useState} from 'react'
import styles from "./Navbar.module.css"
// import { getImageUrl } from '../utils'
import menuIcon from '../../public/assets/nav/menuIcon.png'
import closeMenu from '../../public/assets/nav/closeIcon.png'

export const Navbar = () => {

    const [menuOpen , setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>  
        <a className={styles.title} href='/'>RISHI RAJ</a>

        <div className={styles.menu}>
            <img className={styles.imageBtn} src={ menuOpen ? closeMenu : menuIcon} alt='menu button'
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
   