import React, { useState, useEffect } from 'react'
import services from './services'
import PersonForm from './PersonForm'
import Search from './Search'
import Persons from './Persons'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationClass, setNotificationClass] = useState(null);

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
          .then(data => {
            setPersons(persons.map(person => person.id !== data.id ? person : data));
            setNotificationMessage(`Added ${data.name}`);
            setNotificationClass('notification')
            setTimeout(() => {
              setNotificationMessage(null)
              setNotificationClass(null)
            }, 5000);
          })
          .catch(() => {
            setNotificationMessage(
              `Information of '${matchedPerson.name}' has already been removed from server`
            )
            setNotificationClass('error')
            setTimeout(() => {
              setNotificationMessage(null)
              setNotificationClass(null)
            }, 5000)
            setPersons(persons.filter(person => person.id !== matchedPerson.id));
          })
        return;
      }
      return;
    }

    services.createPerson(newPerson)
      .then(data => {
        setPersons(persons.concat(data));
        setNotificationMessage(`Added ${data.name}`);
        setNotificationClass('notification')
        setTimeout(() => {
          setNotificationMessage(null)
          setNotificationClass(null)
        }, 5000);
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} className={notificationClass} />
      <form onSubmit={addPerson} >
        <Search setSearchQuery={setSearchQuery} persons={persons} />
        <PersonForm newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      </form>
      <h2>Numbers</h2>
      <Persons setPersons={setPersons} persons={persons} searchQuery={searchQuery} setNotificationMessage={setNotificationMessage} setNotificationClass={setNotificationClass} />
    </div>
  )
}

export default App