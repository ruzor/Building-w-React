import React from 'react'
import DeletePersonButton from './DeletePersonButton'

const Person = ({ setPersons, person }) => <li key={person.id} >{person.name} {person.number} <DeletePersonButton setPersons={setPersons} person={person} /></li>

export default Person