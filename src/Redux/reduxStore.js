import {combineReducers, createStore} from "redux";

import pokemonsReducer from "./pokemonsReducer";

let reducers = combineReducers({
    Pokemons:pokemonsReducer,

})

let store = createStore(reducers);

export default store;