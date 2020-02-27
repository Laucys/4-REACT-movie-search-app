import React from 'react';

const Search = ({handleInput, handleSearch}) => {
    return (
        <section className='searchbox-wrap'>
        <input
        type='text'
        placeholder='Enter movie title'
        className='searchbox'
        onChange={handleInput}
        onKeyPress={handleSearch}
        />
        </section>
    )
}

export default Search;