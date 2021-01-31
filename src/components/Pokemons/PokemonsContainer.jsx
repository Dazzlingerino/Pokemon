import React from 'react';
import {connect} from "react-redux";
import Pokemons from "./Pokemons";
import {loadMoreAC, setEachPokemonAC, setEachPokemonImgAC, setPokemonsAC} from "../../Redux/pokemonsReducer";
import * as axios from "axios";


const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        pokemons: state.Pokemons.pokemons,
        pokemon: state.Pokemons.pokemon,
        displayedPokemons: state.Pokemons.displayedPokemons,
        displayedCount: state.Pokemons.displayedCount,
        totalPokemonsCount: state.Pokemons.totalPokemonsCount
    }
}
const mapDispatchToProps = (dispatch) => {
       return {
        onLoadMore: () => (dispatch(loadMoreAC())),
        setPokemons: (pokemons) => (dispatch(setPokemonsAC(pokemons))),
        setEachPokemon: (pokemon) => (dispatch(setEachPokemonAC(pokemon)))

    }}


const PokemonsContainer = connect(mapStateToProps, mapDispatchToProps)(Pokemons);


export default PokemonsContainer;