import React from 'react'

const ViewCountryButton = ({ setCountryView, country }) => {
    function handleViewCountry () {
        setCountryView({
            showDetails: true,
            country: country
        });
    }

    return (
        <input type="button" value="view" onClick={handleViewCountry} />
    )
}

export default ViewCountryButton