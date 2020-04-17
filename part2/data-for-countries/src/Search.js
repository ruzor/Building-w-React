import React from 'react'

const Search = ({ setMatchedCountries, countries, setCountryView }) => {
    const handleSearchChange = ({ target: { value } }) => {
        setCountryView({
            showDetails: false,
            country: null
        });
        setMatchedCountries(countries.filter(country => country.name.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <div>
            find countries <input onChange={handleSearchChange} />
        </div>
    )
}

export default Search