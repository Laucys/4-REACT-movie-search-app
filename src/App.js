import React, {useState} from 'react';
import axios from 'axios';
import Search from './components/Search';

const App = () => {

  const [state, setState] = useState({
    inputValue: '',
    results: [],
    selected: {}
  });
  
  const apiurl = 'http://www.omdbapi.com/?apikey=bd1d9a46';

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      axios(apiurl + '&s=' + state.inputValue).then((data) => {
        console.log(data);
      })
    }
  }

  const handleInput = (e) => {
    let inputValue = e.target.value;

    setState(prevState => {
      return {...prevState, inputValue}
    })

  };

  return (
    <div className="App">
      <header>
        <h1> Search Movie App </h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleSearch={handleSearch}/>
      </main>
    </div>
  );
}

export default App;
