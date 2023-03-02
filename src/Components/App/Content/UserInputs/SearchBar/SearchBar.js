import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './styles.module.css';

function SearchBar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleFocus = (e) =>{
        e.target.style.boxShadow = '0px 2px 9px rgba(0, 0, 0, 0.532439)';
    }

   const handleBlur = (e) => {
        e.target.style.boxShadow = '';
   }

   useEffect(() => {
        const keyboardHandler = (e) => {
            if(e.key == 'Enter')
                dispatch({type: 'set', search: search});
            
        }
        document.addEventListener('keydown', keyboardHandler);

        return () => {
            document.removeEventListener('keydown', keyboardHandler)
        }

   })

    return(
        <div className={styles.searchBarContainer}>
            <img className={styles.icon}/>
            <input type='search' className={styles.search} onFocus={handleFocus} onBlur={handleBlur} value={search} onChange={handleChange} placeholder='Search for a country...'/>
        </div>
    )
}

export default SearchBar;