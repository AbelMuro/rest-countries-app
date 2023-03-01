import React, {useState} from 'react';
import styles from './styles.module.css';

function SearchBar() {
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const keyboardHandler = (e) => {
        if(e.key == 'Enter'){
            console.log('enter');
        }
    }

   const handleFocus = (e) =>{
        e.target.style.boxShadow = '0px 2px 9px rgba(0, 0, 0, 0.532439)'
        document.addEventListener('keydown', keyboardHandler)
   }

   const handleBlur = (e) => {
    e.target.style.boxShadow = ''
        document.removeEventListener('keydown', keyboardHandler)
   }

    return(
        <div className={styles.searchBarContainer}>
            <img className={styles.icon}/>
            <input type='search' className={styles.search} onFocus={handleFocus} onBlur={handleBlur} value={search} onChange={handleChange} placeholder='Search for a country...'/>
        </div>
    )
}

export default SearchBar;