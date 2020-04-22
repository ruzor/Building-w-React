import React from 'react'

const CountryView = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <div>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
            </div>
            <div>
                <h3>languages</h3>
                <ul>
                    {country.languages.map((language, i) => <li key={i}>{language.name}</li>)}
                </ul>
            </div>
            <img src={country.flag} alt={country.name} />
        </div>
    )
}

export default CountryView