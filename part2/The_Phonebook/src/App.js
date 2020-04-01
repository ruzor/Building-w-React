import React, { useState } from 'react'
import PersonForm from './PersonForm'
import Search from './Search'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState([]);

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