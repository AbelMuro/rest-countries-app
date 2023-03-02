import React, {useState, useEffect} from 'react';
import SwitchTheme from './SwitchTheme';
import styles from './styles.module.css';
import LightMoonIcon from './Icons/LightMoonIcon.svg';
import DarkMoonIcon from './Icons/DarkMoonIcon.svg';

function HeaderBar(){
    const [turnSwitch, setTurnSwitch] = useState(false);
    
    const handleSwitch = () => {
        setTurnSwitch(!turnSwitch);
    }

    useEffect(() =>{
        SwitchTheme(turnSwitch);
    }, [turnSwitch])


    return(
        <header className={styles.header}>
            <section className={styles.flexbox}>
                <h1 className={styles.logo}>
                    Where in the world?
                </h1>
                <div className={styles.themeSwitcher} onClick={handleSwitch}>
                    <img src={turnSwitch ? DarkMoonIcon : LightMoonIcon} className={styles.icon}/> 
                    <a className={styles.themeTitle}>
                        Dark Mode
                    </a>
                </div>                
            </section>
        </header>
    )
}

export default HeaderBar