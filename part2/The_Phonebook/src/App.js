import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './PersonForm'
import Search from './Search'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState([]);

  const hook = () => {
    axios.get("http://localhost:3001/persons")
      .then(response => setPersons(response.data));
  }

  useEffect(hook, []);

  const addInfo = (event) => {
    event.preventDefault();
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return
    }
    setPersons(persons.concat({
      name: newName,
      number: newNumber
    }));
  }

  const searchInfo = ({ target: { value } }) => {
    setSearchQuery(persons.filter(person => person.name.toLocaleLowerCase().startsWith(`${value.toLowerCase()}`)));
  }

  const render = () => {
    if (searchQuery.length) {
      return searchQuery.map(query =>
        <li key={query.name} >{query.name} {query.number}</li>
      )
    }
    return persons.map(person =>
      <li key={person.name} >{person.name} {person.number}</li>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo} >
        <Search searchInfo={searchInfo} />
        <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      </form>
      <h2>Numbers</h2>
      <Persons render={render} />
    </div>
  )
}

export default App