import React from 'react'

const Persons = ({ render }) => {
    return (
        <ul>
            {
                render()
            }
        </ul>
    )
}

export default Persons