import React from 'react'
import styles from './Header.module.css'
function Header() {
     return (
          <header className={styles.header}>
               <nav className={styles.nav}>
                    <img src='/Images/LWTM_logo.jpeg' alt = 'Logo' />
               </nav>
          </header>
     )
}

export default Header