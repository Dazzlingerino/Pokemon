import React from 'react';
import Pokemon from './Pokemon/Pokemon'
import style from './Pokemons.module.css'
import * as axios from "axios";

class Pokemons extends React.Component {
    componentDidMount() {
        /*  axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${25}`).then(response => {
              response.data.results.forEach( i => axios.get(`${i.url}`).then(response => { this.props.setEachPokemon(response.data)}))
              this.props.setPokemons(response.data.results)*/
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${999}`).then(response =>
            this.props.setPokemons(response.data.results)
        )
    }
    /*getPokemonInfo = (url) => {

    }*/


    render() {
            this.props.setEachPokemon('https://pokeapi.co/api/v2/pokemon/2/')


        return (
            <div className={style.pokemons}>
                    {this.props.displayedPokemons.filter((poc, index) => index < this.props.displayedCount).map(poc =>
                    <div key={poc.id} className={style.pokemon}>
                    <img src={poc.url}/>
                    <span> {poc.name}</span> <span> {poc.pokemon}</span>
                    { console.log(this.props.pokemon)
                    }

                    </div>)}

                <button onClick={this.props.onLoadMore}> Load More</button>

            </div>
        )

    }
}


export default Pokemons;