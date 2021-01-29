import * as axios from "axios";

const LOAD_MORE = 'LOAD_MORE';
const SET_POKEMONS = 'SET_POKEMONS';
const SET_EACH_POKEMON = 'SET_EACH_POKEMON';


let initialState = {
    pokemons: [],
    pokemon: [],
    displayedPokemons:[],
    displayedCount:12,
    totalPokemonsCount: 1118
}
const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MORE: {
            let newCount = state.displayedCount +12;
            return {
                ...state,
                displayedPokemons: [...state.displayedPokemons, ...state.pokemons.slice(state.displayedCount,newCount)],
                displayedCount:newCount
            }}
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: action.pokemons,
                displayedPokemons : action.pokemons.slice(0,12)
            }
        case SET_EACH_POKEMON:

            foo(action)

                 return {
                ...state,
                }
        default:
            return state;
    }
}
async function foo(action) {
    if (action && action.hasOwnProperty('payload')){
        console.log(action.payload)
    const { data }  = await action.payload.then(result => result.data);
console.log(data)
    return data;}
    }
export const loadMoreAC = () => ({type: LOAD_MORE })
export const setPokemonsAC = (pokemons) => ({type: SET_POKEMONS, pokemons})
export const setEachPokemonAC = (url) => ({type: SET_EACH_POKEMON, payload:axios.get(url).then(result => result.data)})





export default pokemonsReducer;