const LOAD_MORE = 'LOAD_MORE';
const SET_POKEMONS = 'SET_POKEMONS';


let initialState = {
    pokemons: [],
    displayedPokemons:[],
    displayedCount:0,
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
                pokemons: action.pokemons
            }
        default:
            return state;
    }
}

export const loadMoreAC = () => ({type: LOAD_MORE })
export const setPokemonsAC = (pokemons) => ({type: SET_POKEMONS, pokemons})


export default pokemonsReducer;