import React from 'react'

const Search = ({ searchInfo }) => {
    return (
        <div>
            filter shown with: <input onChange={event => searchInfo(event)} />
        </div>
    )
}

export default Search