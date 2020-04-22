import React from 'react'

const Search = ({ setSearchQuery, persons }) => {
    const searchInfo = ({ target: { value } }) => {
        setSearchQuery(persons.filter(person => person.name.toLocaleLowerCase().startsWith(`${value.toLowerCase()}`)));
    }

    return (
        <div>
            filter shown with: <input onChange={searchInfo} />
        </div>
    )
}

export default Search