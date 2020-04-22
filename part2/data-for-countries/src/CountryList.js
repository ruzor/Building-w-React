import React from 'react'
import CountryView from './CountryView'
import Country from './Country'

const CountryList = ({ matchedCountries, countryView, setCountryView, setSearchQuery }) => {
    if (countryView.showDetails) {
        return (
            <div>
                <CountryView country={countryView.country} />
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
                <CountryView country={matchedCountries[0]} setSearchQuery={setSearchQuery} />
            </div>
        )
    } else if (matchedCountries.length !== 0 && matchedCountries.length < 10) {
        console.log('fam')
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
        console.log('boy')
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    } 
}

export default CountryList