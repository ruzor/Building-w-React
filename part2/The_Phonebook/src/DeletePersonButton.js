import React from 'react';
import services from './services'

const DeletePersonButton = ({ setPersons, person }) => {
    function handleDelete() {
        const message = `Delete ${person.name}?`;
        if (window.confirm(message)) {
            services.deletePerson(person.id);
            services.getAllPersons()
                .then(data => setPersons(data));
        }
    }

    return (
        <input onClick={handleDelete} type='button' value='delete' />
    )
}

export default DeletePersonButton