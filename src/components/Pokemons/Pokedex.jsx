import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './Pokemons.module.css'
import './Pokemons.module.css'
import Pokemon from "./Pokemon/Pokemon";


export default function Pokedex() {
    const [data, setData] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [filterType, setFilterType] = useState(undefined);


    useEffect(() => {
        const fetchData = async () => {
            const pokemonsSet = await axios(
                `https://pokeapi.co/api/v2/pokemon?limit=12`,
            );
            const pokemonInfo = await Promise.all(pokemonsSet.data.results.map(item => axios(`${item.url}`)))
            setData(pokemonsSet.data);
            setPokemons(pokemonInfo.map(item => item.data))

        };
        fetchData();
    }, []);


    async function handleLoadMore() {
        const pokemonsSet = await axios(data.next);
        const pokemonInfo = await Promise.all(pokemonsSet.data.results.map(item => axios(`${item.url}`)))
        setData(pokemonsSet.data)
        setPokemons([...pokemons, ...pokemonInfo.map(item => item.data)])
    }

    function handleShowPokWithThisType(type) {
        setFilterType(type)
    }


    return (
        <div className={s.pokemons}>
            <div className={s.gridForPok}>
                {pokemons.filter(pok => !filterType || pok.types.some(type => type.type.name === filterType)).sort((a, b) => (a.id > b.id) ? 1 : -1).map((item, index) => (
                    <div key={item.index}
                         className={s.pokemon} onClick={() => {
                        setCurrentPokemon(item)
                        setIsVisible(true)
                    }}>
                        <img key={item.index}
                             style={{maxWidth: '100%'}}
                             src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png/`}
                             alt={'Error with showing pokemon'}/>
                        <div key={item.index} className={s.pokeName}> {item.name}</div>
                        <div key={item.index}
                             className={s.typesBox}> {item.types && item.types.map((currType, index) => (
                            <span key={currType.index}
                                  onClick={() => handleShowPokWithThisType(currType.type.name)}
                                  className={[s.type, s[currType.type.name]].join(' ')}>
                                {`${currType.type.name + ' '}`}
                            </span>
                        ))}</div>
                    </div>
                ))}
            </div>

            <button className={s.pokemonsButton} onClick={handleLoadMore}>Load More</button>
            {isVisible ?
                <Pokemon currentPokemon={currentPokemon}/> : null}
        </div>
    );
}
