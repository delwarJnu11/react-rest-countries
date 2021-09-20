import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,capital,region,area,flag,population} = props.country;
    return (
        <div className="country">
            <img src={flag} alt="flag" />
            <h3>Country Name: {name}</h3>
            <h5>Capital: {capital}</h5>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
            <p>Area: {area} Square KM.</p>
        </div>
    );
};

export default Country;