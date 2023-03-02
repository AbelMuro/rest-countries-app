import React, {useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function CountryData(){
    const [data, setData] = useState([]);
    const {search} = useSelector(state => state.search);
    const {filter} = useSelector(state => state.filter);
    const navigate = useNavigate();

    const handleClick = (e) => {      
        const name = e.target.getAttribute('data-name');
        if(name)
            navigate(`/${name}`, {state: name});
    }

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${search ? `name/${search}`: 'all'}`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                console.log(results);
                setData(results);
            }) 
            .catch((error) => {
                console.log('error', error);
            })
    }, [search])


    useEffect(() => {
        if(!filter) return;

        fetch(`https://restcountries.com/v3.1/region/${filter.toLowerCase()}`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                console.log(results);
                setData(results);
            })
            .catch((error) => {
                console.error(error);
            })
      
    }, [filter])



    return data ? (
        <section className={styles.grid}>
            {data.map((country) => {
                return(
                    <div className={styles.countryContainer} key={country.name.official} onClick={handleClick} data-name={country.name.official}>
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