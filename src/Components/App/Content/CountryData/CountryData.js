import React, {useState, useEffect} from "react";
import styles from './styles.module.css';

function CountryData(){
    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                setData(results);
            }) 
            .catch((error) => {
                console.log('error', error);
            })
    }, [])

    return data ? (
        <section className={styles.grid}>
            {data.map((country) => {
                return(
                    <div className={styles.countryContainer} key={country.name.official}>
                        <img className={styles.countryFlag} src={country.flags.png} alt={country.flags.alt}/>
                        <div className={styles.countryDataContainer}>
                            <h2 className={styles.countryName}>
                                {country.name.official}
                            </h2>
                            <div className={styles.countryData}>
                                <div className={styles.flex}>
                                    <h3 className={styles.title}>
                                        Population:&nbsp;
                                    </h3>
                                    <p className={styles.data}>
                                        {country.population.toLocaleString()}
                                    </p>
                                </div>
                                <div className={styles.flex}>
                                    <h3 className={styles.title}>
                                        Region:&nbsp;
                                    </h3>
                                    <p className={styles.data}>
                                        {country.region}
                                    </p>
                                </div>
                                <div className={styles.flex}>
                                    <h3 className={styles.title}>
                                        Capital:&nbsp;
                                    </h3>
                                    <p className={styles.data}>
                                        {country.capital}
                                    </p>
                                </div>                                
                            </div>

                        </div>                            
                        </div>
                       
                )
            })}
        </section>) : <>loading</>
}

export default CountryData;