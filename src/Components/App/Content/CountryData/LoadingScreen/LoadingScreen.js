import React from 'react';
import {Skeleton} from '@mui/material';
import styles from './styles.module.css';

function LoadingScreen() {
    return(
        <section className={styles.grid}>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
            <Skeleton variant='rectangular' width='264px' height='336px' sx={{borderRadius: '8px'}}/>
        </section>
    )
}

export default LoadingScreen;