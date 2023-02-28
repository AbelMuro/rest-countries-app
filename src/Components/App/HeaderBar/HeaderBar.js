import React from 'react';
import styles from './styles.module.css';

function HeaderBar(){
    return(
        <header className={styles.header}>
            <section className={styles.flexbox}>
                <h1 className={styles.logo}>
                    Where in the world?
                </h1>
                <div className={styles.themeSwitcher}>
                    <img className={styles.icon}/> 
                    <a className={styles.themeTitle}>
                        Dark Mode
                    </a>
                </div>                
            </section>
        </header>
    )
}

export default HeaderBar