import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './Pokemons.module.css'
import Pokemon from "./Pokemon/Pokemon";


export default function Pokedex() {
    const [data, setData] = useState([]);
    const [pokemons, setPokemons] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState(0);
    const [isVisible, setIsVisible] = useState(false);


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


    return (
        <div className={s.pokemons}>
            <div className={s.gridForPok}>
                {pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1).map(item => (
                    <div className={s.pokemon} onClick={() => {
                        setCurrentPokemon(item)
                        setIsVisible(true)
                    }} key={item.objectID}>
                        <picture className={s.picture}>
                            <img className={s.pocIMG}
                                 src={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png/`}
                             alt={'Error with showing pokemon image'}/>
                        </picture>
                        <div className={s.pokeName}> {item.name}</div>
                        {<div className={s.typesBox}> {item.types && item.types.map(currType => (
                            <span className={[s.type, s[currType.type.name]].join(' ')}>
                                {`${currType.type.name + ' '}`}
                            </span>
                        ))}</div>}
                    </div>
                ))}
            </div>

            <button className={s.pokemonsButton} onClick={handleLoadMore}>Load More</button>
            {isVisible ?
                <Pokemon currentPokemon={currentPokemon}/> : null}
        </div>
    );
}
