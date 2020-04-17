import React from 'react'
import CountryView from './CountryView'
import ViewCountryButton from './ViewCountryButton'

const Country = ({ country, countryView, setCountryView }) =>
    countryView.showDetails ?
        <CountryView country={country} />
        :
        <li>
            {country.name} <ViewCountryButton setCountryView={setCountryView} country={country} />
        </li>

export default Country