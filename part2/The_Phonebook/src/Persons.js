import React from 'react'
import Person from './Person'

const Persons = ({ setPersons, persons, searchQuery, setNotificationMessage, setNotificationClass }) => {
    return (
        <ul>
            {
                searchQuery.length ?
                    searchQuery.map(query =>
                        <Person key={query.id} person={query} persons={persons} setPersons={setPersons} setNotificationMessage={setNotificationMessage} setNotificationClass={setNotificationClass} />
                    )
                    :
                    persons.map(person =>
                        <Person key={person.id} person={person} persons={persons} setPersons={setPersons} setNotificationMessage={setNotificationMessage} setNotificationClass={setNotificationClass} />
                    )
            }
        </ul>
    )
}

export default Persons