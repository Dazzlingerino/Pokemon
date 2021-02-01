import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PokemonsContainer from "./components/Pokemons/PokemonsContainer";
import PokemonsHook from "./components/Pokemons/PokemonHOOKs";


const App = (props) => {
  return (
      <div>
        <div className='app-wrapper'>
          <Header />
          </div>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
           {/*<PokemonsContainer store={props.store} />*/}
           <PokemonsHook />
          </div>
          </div>
        );
}

export default App;
