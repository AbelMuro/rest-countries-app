import React, {useRef, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styles from './styles.module.css';

function Filter(){
    const [option, setOption] = useState('Filter by Region');
    const dispatch = useDispatch();
    const filterBox = useRef();
    const filterOption = useRef();
    const displayPopup = useRef();
    const arrow = useRef();

    const handleClick = () => {
        const isDisplayed = displayPopup.current.style.display;

        if(isDisplayed == 'flex'){
            displayPopup.current.style.display = '';
            filterBox.current.style.boxShadow = '';
            arrow.current.style.transform = '';
        }

        else if(isDisplayed == ''){
            displayPopup.current.style.display = 'flex';
            filterBox.current.style.boxShadow = '0px 2px 9px rgba(0, 0, 0, 0.5324398)';
            arrow.current.style.transform = 'rotate(180deg)'
        }
    }

    const handleOption = (e) => {
        const optionChoosen = e.target.getAttribute('data-value');
        setOption(optionChoosen);
    }

    /* if the user clicks on anything that isn't the filter box, then the filter popup will automatically close*/
    useEffect(() => {
        const clickHandler = (e) => {
            if(e.target && !e.target.matches('.' + styles.filter)){
                displayPopup.current.style.display = '';
                filterBox.current.style.boxShadow = '';
                arrow.current.style.transform = '';
            }       
        }
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        }
    }, [])

    /* i will need to dispatch an action to the reducer everytime there is a change in option state*/
    useEffect(() => {
        if(option != 'Filter by Region')
            dispatch({type: 'filter', filter: option})
    }, [option])


    return(
        <div className={styles.filter} onClick={handleClick} ref={filterBox}>
            <p className={styles.filterOption} ref={filterOption}>{option}</p>
            <img className={styles.arrow} ref={arrow}/>
            <div className={styles.options} ref={displayPopup}>
                <p className={styles.option} data-value='Africa' onClick={handleOption}>
                    Africa
                </p>
                <p className={styles.option} data-value='America' onClick={handleOption}>
                    America
                </p>
                <p className={styles.option} data-value='Asia' onClick={handleOption}>
                    Asia
                </p>
                <p className={styles.option} data-value='Europe' onClick={handleOption}>
                    Europe
                </p>
                <p className={styles.option} data-value='Oceania' onClick={handleOption}>
                    Oceania
                </p>
            </div>
        </div>
    )
}

export default Filter;