import React from 'react';
import {Skeleton, Stack} from '@mui/material';
import styles from './styles.module.css';

function LoadingScreen() {
    return(
        <section className={styles.grid}>
            <Skeleton variant='rounded' width='136px' height='40px' className={styles.loadingGoBack}/>
            <Skeleton variant='rounded' height='323px' className={styles.loadingFlag}/>
            <Stack spacing={2} className={styles.loadingDetails}>
                <Skeleton variant='rounded' width='100%' height='20px' />
                <Skeleton variant='rounded' width='100%' height='20px'/>
                <Skeleton variant='rounded' width='100%' height='20px'/>
                <Skeleton variant='rounded' width='100%' height='20px'/>
                <Skeleton variant='rounded' width='100%' height='20px'/>
                <Skeleton variant='rounded' width='100%' height='20px'/>
                <Skeleton variant='rounded' width='100%' height='20px'/>
                <Skeleton variant='rounded' width='100%' height='20px'/>
            </Stack>
        </section>
    )
}

export default LoadingScreen;