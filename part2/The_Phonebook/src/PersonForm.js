import React from 'react'

const PersonForm = ({ newName, setNewName, newNumber, setNewNumber }) => {
    return (
        <>
            <h2>
                Add new
            </h2>
            <div>
                name: <input value={newName} onChange={event => setNewName(event.target.value)} />
            </div>
            <div>
                number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </>
    )
}

export default PersonForm