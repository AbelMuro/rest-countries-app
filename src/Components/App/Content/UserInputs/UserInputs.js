import React from 'react';
import Filter from './Filter';
import styles from './styles.module.css';

function UserInputs() {
    return(
        <section className={styles.container}>
            <img className={styles.icon}/>
            <input type='text' className={styles.search}/>
            <Filter/>
        </section>
    )
}

export default UserInputs;