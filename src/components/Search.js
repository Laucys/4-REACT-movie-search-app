import React from 'react';

const Search = ({handleInput, handleSearch}) => {
    return (
        <section className='searchbox-wrap'>
        <input
        type='text'
        placeholder='Search for a movie'
        className='searchbox'
        onChange={handleInput}
        onKeyPress={handleSearch}
        />
        </section>
    )
}

export default Search;