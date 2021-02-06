import React from 'react';
import './App.css';
import Pokedex from "./components/Pokemons/Pokedex";


const App = () => {
    return (
        <div className='app-wrapper' style={{maxWidth: '1200px', margin: '0 auto', padding: '0 15px'}}>
            <header className='header'> Pokedex
            </header>
            <div className='container'>
                <Pokedex/>
            </div>
        </div>
    );
}

export default App;
