import React from 'react';

const Popup = ({selected, closePopup}) => {
    return (
        <section className='popup'>
            <div className='content'>
                <div className='top'>
                    <h2> { selected.Title } <span> ({ selected.Year }) </span> </h2>
                    <button className='close' onClick={closePopup}>Close</button>
                </div>
                <p className='rating'> Rating: { selected.imdbRating } ({ selected.imdbVotes } votes)</p>
                <div className='description'>
                    <div className='image'>
                        <img src={ selected.Poster} />
                    </div>
                    <div className='text'>
                        <p> <span>Plot: </span> { selected.Plot } </p>
                        <p> <span>Director: </span> { selected.Director } </p>
                        <p> <span>Production: </span> { selected.Production } </p>
                        <p> <span>Runtime: </span> { selected.Runtime } </p>
                        <p> <span>Actors: </span> { selected.Actors } </p>
                        <p> <span>Awards: </span> { selected.Awards } </p>
                        <p> <span>Box Office: </span> { selected.BoxOffice } </p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
};

export default Popup;