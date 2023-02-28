import React from 'react';
import UserInputs from './UserInputs';
import styles from './styles.module.css';

function Content(){

    return(
        <main className={styles.container}>
            <UserInputs/>
        </main>
        )
}

export default Content;
