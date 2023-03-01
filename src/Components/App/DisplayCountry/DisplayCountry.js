import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import styles from './styles.module.css';

function DisplayCountry() {
    const [data, setData] = useState(null);
    const countryName = useSelector(state => state.searchResults)

    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${countryName}`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                console.log(results);
                setData(results);
            })
    },[])


    return data ? (
        <main className={styles.container}>
            <img src={data[0].flags.png}/>
            <div className={styles.grid}>

                <h1 className={styles.countryName}>
                    {data[0].name}
                </h1>
                <div className={styles.sectionOne}>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Native Name:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].nativeName}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Population:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].population}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Region:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].region}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Sub Region:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].subregion}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Capital:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].capital}
                        </p>
                    </div>
                </div>
                <div className={styles.sectionTwo}>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Top Level Domain:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].topLevelDomain}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Currencies:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].currencies.map((currency) => {
                                return currency.name + ", ";
                            })}
                        </p>
                    </div>
                    <div className={styles.flex}>
                        <h2 className={styles.title}>
                            Languages:
                        </h2>
                        <p className={styles.desc}>
                            {data[0].languages.map((language) => {
                                return language.name + ' ';
                            })}
                        </p>
                    </div>
                </div>
                <div className={styles.borderCountries}>
                        <h2 className={styles.title}>
                            Border COuntries: 
                        </h2>
                        <div className={styles.borderFlex}>
                            {data[0].borders.map((border) => {
                                return (
                                <div className={styles.borderContainer}> 
                                        {border}
                                </div>
                                )
                            })}                            
                        </div>

                </div>

            </div>
        </main>
    ) : <>loading</>
}

export default DisplayCountry;