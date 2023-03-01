import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import styles from './styles.module.css';

function UserInputs() {
    return(
        <section className={styles.container}>
            <SearchBar/>
            <Filter/>
        </section>
    )
}

export default UserInputs;