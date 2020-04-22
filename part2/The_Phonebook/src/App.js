import React, { useState, useEffect } from 'react'
import services from './services'
import PersonForm from './PersonForm'
import Search from './Search'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    services.getAllPersons()
      .then(data => setPersons(data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.slice(-1)[0].id + 1
    }

    const matchedPerson = persons.find(person => person.name === newName);

    if (matchedPerson) {
      const message = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (window.confirm(message)) {
        services.updatePerson({ ...matchedPerson, number: newNumber })
          .then(() => services.getAllPersons()
            .then(data => setPersons(data)));
        return;
      }
      return;
    }

    services.createPerson(newPerson)
      .then(data => setPersons(persons.concat(data)));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson} >
        <Search setSearchQuery={setSearchQuery} persons={persons} />
        <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      </form>
      <h2>Numbers</h2>
      <Persons setPersons={setPersons} persons={persons} searchQuery={searchQuery} />
    </div>
  )
}

export default App