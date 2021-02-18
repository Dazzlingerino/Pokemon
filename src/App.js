import React from 'react';
import './App.css';
import Pokedex from "./components/Pokemons/Pokedex";


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'> Pokedex
            </header>
            <div className='container'>
                <Pokedex/>
            </div>
        </div>
    );
}

export default App;
