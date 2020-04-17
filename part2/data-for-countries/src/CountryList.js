import React from 'react'
import CountryView from './CountryView'
import Country from './Country'

const CountryList = ({ matchedCountries, countryView, setCountryView }) => {
    if (countryView.showDetails) {
        return (
            <div>
                <Country country={countryView.country} countryView={countryView} setCountryView={setCountryView} />
            </div>
        )
    } else if (matchedCountries.length === 0) {
        return (
            <div>
                No matches
            </div>
        )
    } else if (matchedCountries.length === 1) {
        return (
            <div>
                <CountryView country={matchedCountries[0]} />
            </div>
        )
    } else if (matchedCountries.length !== 0 && matchedCountries.length < 10) {
        return (
            <div>
                <ul>
                    {
                        matchedCountries.map((country, id) =>
                            <Country key={id} id={id} country={country} countryView={countryView} setCountryView={setCountryView} />
                        )
                    }
                </ul>
            </div>
        )
    } else if (matchedCountries.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } 
}

export default CountryList