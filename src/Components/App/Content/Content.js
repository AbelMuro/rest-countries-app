import React from 'react';
import UserInputs from './UserInputs';
import CountryData from './CountryData';
import styles from './styles.module.css';

function Content(){

    return(
        <main className={styles.container}>
            <UserInputs/>
            <CountryData/>
        </main>
        )
}

export default Content;
