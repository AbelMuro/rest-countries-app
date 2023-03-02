import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function DisplayCountry() {
    const [data, setData] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${state}?fullText=true`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                setData(results);              
            })
            .catch((error) => {
                console.log('error', error);
            })
    },[])


    return data ? (
        <main className={styles.flexContainer}>
        <a className={styles.goBack} onClick={handleGoBack}>         
            <img className={styles.icon}/>
            <span className={styles.back}>  
                Back
            </span>
        </a>
        <section className={styles.container}>
            <img src={data[0].flags.png} className={styles.countryFlag}/>
            <div className={styles.grid}>
                <h1 className={styles.countryName}>
                    {data[0].name}
                </h1>
                <div className={styles.sectionOne}>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Native Name:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].nativeName}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Population:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].population.toLocaleString()}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Region:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].region}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Sub Region:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].subregion}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Capital:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].capital}
                        </p>
                    </div>
                </div>
                <div className={styles.sectionTwo}>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Top Level Domain:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].topLevelDomain}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Currencies:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].currencies.map((currency, i) => {
                                if(i > 1)
                                    return ", " + currency.name;
                                else
                                    return currency.name;
                            })} 
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Languages:&nbsp;
                        </h2>
                        <p className={styles.desc}>
                            {data[0].languages.map((language, i) => {
                                if(i > 1)
                                    return ", " + language.name;
                                else 
                                    return language.name;
                            })}
                        </p>
                    </div>
                </div>
                <div className={styles.borderCountries}>
                        <h2 className={styles.title}>
                            Border Countries:&nbsp;&nbsp;
                        </h2>
                        {data[0].borders ? 
                        <div className={styles.borderGrid}>
                            {data[0].borders.map((border) => {
                                return (
                                    <div className={styles.borderContainer} key={border}> 
                                        {border}
                                    </div>
                                )
                            })}                            
                        </div> : 
                        <div className={styles.message}>
                            No borders
                        </div>}
                </div>
            </div>
        </section>        
        </main>
   
    ) : <>loading</>
}

export default DisplayCountry;