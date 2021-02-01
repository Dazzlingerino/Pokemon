import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './Pokemons.module.css'
import Pokemon from "./Pokemon/Pokemon";


export default function PokemonsHook() {
    const [data, setData] = useState({results: []});
    const [pokemons, setPokemons] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState(0);
    const [isVisible, setIsVisible] = useState(false);


    /*       currentPokemon: this.state.pokemons.find(pokemon => pokemon.id === id)
       })
*/

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://pokeapi.co/api/v2/pokemon/?limit=42`,
            );
            const result2 = await Promise.all(result.data.results.map(item => axios(`${item.url}`)))
            setData(result.data);
            setPokemons(result2.map(item => item.data))

        };
        fetchData();
    }, []);

    function handleLoadMore(e) {
        setCurrentPokemon(e);
    }


    return (
        <div className={s.pokemons}>
            <div className={s.gridForPok}>
                {pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1).map(item => (
                    <div onClick={() => {
                        setCurrentPokemon(item)
                        setIsVisible(true)
                    }} key={item.objectID}>
                        <a>{item.name}</a>
                        <picture className={s.picture}>
                            <source className={s.pocIMG} media={"(min-width:725px)"}
                                    srcSet={`https://pokeres.bastionbot.org/images/pokemon/${item.id}.png/`}/>
                            <img className={s.pocIMG}
                                 src={"https://poketouch.files.wordpress.com/2020/11/die_cast_poke_ball_replica.jpg"}/>
                        </picture>
                    </div>

                ))}
            </div>

            <button className={s.pokemonsButton} onClick={handleLoadMore}>>Load More</button>
            {isVisible ?
                <Pokemon currentPokemon={currentPokemon}/> : null}
        </div>
    );
}
