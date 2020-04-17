import React, { useState, useEffect } from 'react'
import Search from './Search'
import CountryList from './CountryList'
import axios from 'axios'

const App = () => {
  const [matchedCountries, setMatchedCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [countryView, setCountryView] = useState({
    showDetails: false,
    country: null
  });

  const getCountriesData = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(({ data }) => {
        setCountries(data);
        console.log(data);
      });
  }

  useEffect(getCountriesData, []);

  return (
    <>
      <Search setMatchedCountries={setMatchedCountries} countries={countries} setCountryView={setCountryView} />
      <CountryList matchedCountries={matchedCountries} countryView={countryView} setCountryView={setCountryView} />
    </>
  )
}

export default App