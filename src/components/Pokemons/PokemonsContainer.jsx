import React from 'react';
import {connect} from "react-redux";
import Pokemons from "./Pokemons";
import {loadMoreAC, setPokemonsAC} from "../../Redux/pokemonsReducer";


const mapStateToProps = (state) => ({
    pokemons: state.Pokemons.pokemons,
    displayedPokemons: state.Pokemons.displayedPokemons,
    displayedCount: state.Pokemons.displayedCount,
    totalPokemonsCount: state.Pokemons.totalPokemonsCount
});
const mapDispatchToProps = (dispatch) => {
    return {
        onLoadMore: () => (dispatch(loadMoreAC())),
        setPokemons: (pokemons) => (dispatch(setPokemonsAC(pokemons)))
          }
    }


const PokemonsContainer = connect(mapStateToProps, mapDispatchToProps)(Pokemons);


export default PokemonsContainer;