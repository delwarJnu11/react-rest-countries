import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setCountries(data));
    },[])
    return (
        <div>
            <h2>All Country Information.</h2>
            <div className="container">
                {
                    countries.map(country => <Country key={country.capital} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;