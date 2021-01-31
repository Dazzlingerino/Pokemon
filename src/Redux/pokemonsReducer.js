import * as axios from "axios";

const LOAD_MORE = 'LOAD_MORE';
const SET_POKEMONS = 'SET_POKEMONS';
const SET_EACH_POKEMON = 'SET_EACH_POKEMON';



let initialState = {
    pokemons: [],
    pokemon: [],
    displayedPokemons: [],
    displayedCount: 12,
    totalPokemonsCount: 1118
}
const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MORE: {
            let newCount = state.displayedCount + 12;
            return {
                ...state,
                displayedPokemons: [...state.displayedPokemons, ...state.pokemons.slice(state.displayedCount, newCount)],
                displayedCount: newCount
            }
        }
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons,
                displayedPokemons: action.pokemons.slice(0, 12)
            }
        case SET_EACH_POKEMON:
            console.log('action', action.payload);
            let data = state.pokemon;
            action.payload.then(result => {
                if (data.findIndex(item => item.name === result.name) === -1) {
                    data.push(result)
                }
            });
            let copyPokems = state.pokemons;
            action.payload.then(result => {
                let index = copyPokems.findIndex( item => item.name === result.name)
                if (index !== -1){
                copyPokems[index].type = result.types}
        });
            console.log('data in reducer', data);
            return {...state, pokemon: data, pokemons:copyPokems,displayedPokemons:copyPokems}
               default:
            return state;
    }
}

export const loadMoreAC = () => ({type: LOAD_MORE})
export const setPokemonsAC = (pokemons) => ({type: SET_POKEMONS, pokemons})
export const setEachPokemonAC = (url) => ({type: SET_EACH_POKEMON, payload: axios.get(url).then(result => result.data)})



export default pokemonsReducer;