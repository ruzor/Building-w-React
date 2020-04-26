import React from 'react'
import DeletePersonButton from './DeletePersonButton'

const Person = ({ setPersons, persons, person, setNotificationMessage, setNotificationClass }) => <li key={person.id} >{person.name} {person.number} <DeletePersonButton setPersons={setPersons} persons={persons} person={person} setNotificationMessage={setNotificationMessage} setNotificationClass={setNotificationClass} /></li>

export default Person