import React, {useState} from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';


const App = () => {

  const [state, setState] = useState({
    inputValue: '',
    results: [],
    selected: {}
  });
  
  const apiurl = 'http://www.omdbapi.com/?apikey=bd1d9a46';

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.inputValue).then(({data}) => {

        let resultsFromApi = data.Search;

        setState(prevState => {
          return { ...prevState, results: resultsFromApi }
        });
        
      });
    }
  }

  const handleInput = (e) => {
    let inputValue = e.target.value;

    setState(prevState => {
      return {...prevState, inputValue}
    });
  }

  const openPopup = id => {
    axios(apiurl + '&i=' +id).then(({ data }) => {
      let resultsFromApi = data;

      setState(prevState => {
        return {...prevState, selected: resultsFromApi}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }

  return (
    <div className="App">
      <header>
        <h1> Search Movie App </h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleSearch={handleSearch}/>

        <Results results={state.results} openPopup={openPopup}/>

        {(typeof state.selected.Title !== 'undefined') ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
