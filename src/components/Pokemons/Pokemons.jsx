import React from 'react';
import Pokemon from './Pokemon/Pokemon'
import style from './Pokemons.module.css'
import * as axios from "axios";

class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: []
        };
    }

    componentDidMount() {
        /*  axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${25}`).then(response => {
              response.data.results.forEach( i => axios.get(`${i.url}`).then(response => { this.props.setEachPokemon(response.data)}))
              this.props.setPokemons(response.data.results)*/
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${25}`).then(response =>
            this.props.setPokemons(response.data.results)
        )
    }



    render() {
        this.props.displayedPokemons.forEach(item => {this.props.setEachPokemon(item.url)});
        if (this.props.pokemon !== this.state.pokemons) {
            this.setState({
                pokemons: this.props.pokemon
            });
        }

        console.log('this', this);
        return (
            <div className={style.pokemons}>
                {console.log('this.state', this.state.pokemons)}
                {this.state.pokemons.map(poc =>
                    <div key={poc.id} className={style.pokemon}>
                        <img src={poc.url}/>
                        <span> {poc.name}</span>
                        {poc.types && poc.types.map(currType => <span style={{color: "green"}}>{currType.type.name}</span>)}
                    </div>)}

                <button onClick={this.props.onLoadMore}> Load More</button>

            </div>
        )

    }
}


export default Pokemons;