import React from 'react'
import styles from './Header.module.css'
import logo from '../assets/LWTM_logo.jpeg'
function Header() {
     return (
          <header className={styles.header}>
               <nav className={styles.nav}>
                    <img src={logo} alt = 'Logo' />
               </nav>
          </header>
     )
}

export default Header