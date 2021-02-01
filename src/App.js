import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Pokedex from "./components/Pokemons/Pokedex";


const App = () => {
  return (
      <div>
        <div className='app-wrapper'>
          <Header />
          </div>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
           <Pokedex />
          </div>
          </div>
        );
}

export default App;
