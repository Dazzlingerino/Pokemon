import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PokemonsContainer from "./components/Pokemons/PokemonsContainer";


const App = (props) => {
  return (
      <div>
        <div className='app-wrapper'>
          <Header />
          </div >
           <PokemonsContainer store={props.store} />
          </div>
        );
}

export default App;
