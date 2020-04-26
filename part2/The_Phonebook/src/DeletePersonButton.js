import React from 'react';
import services from './services'

const DeletePersonButton = ({ setPersons, persons, person, setNotificationMessage, setNotificationClass }) => {
    function handleDelete() {
        const message = `Delete ${person.name}?`;
        if (window.confirm(message)) {
            services.deletePerson(person.id)
                .catch(() => {
                    setNotificationMessage(
                        `Information of '${person.name}' has already been removed from server`
                    )
                    setNotificationClass('error')
                    setTimeout(() => {
                        setNotificationMessage(null)
                        setNotificationClass(null)
                    }, 5000)
                    setPersons(persons.filter(n => n.id !== person.id));
                })
            setPersons(persons.filter(n => n.id !== person.id))
        }
    }

    return (
        <input onClick={handleDelete} type='button' value='delete' />
    )
}

export default DeletePersonButton