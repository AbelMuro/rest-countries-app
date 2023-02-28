import React, {useState} from 'react';
import styles from './styles.module.css';

function SearchBar() {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return(
    <>
        <input type='search' className={styles.search} value={search} onChange={handleChange} placeholder='Search for a country...'/>
    </>
        
    )
}

export default SearchBar;