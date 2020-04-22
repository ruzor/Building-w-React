import React from 'react'
import Person from './Person'

const Persons = ({ setPersons, persons, searchQuery }) => {
    return (
        <ul>
            {
                searchQuery.length ?
                    searchQuery.map(query =>
                        <Person key={query.id} person={query} setPersons={setPersons} />
                    )
                    :
                    persons.map(person =>
                        <Person key={person.id} person={person} setPersons={setPersons} />
                    )
            }
        </ul>
    )
}

export default Persons