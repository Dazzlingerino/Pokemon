import React from 'react';
import Pokemon from './Pokemon/Pokemon'
import style from './Pokemons.module.css'
import * as axios from "axios";
import Container from 'react-bootstrap/Container'

class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            visible: false,
            currentPokemon: -1
        };
    }

    componentDidMount() {
        /*  axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${25}`).then(response => {
              response.data.results.forEach( i => axios.get(`${i.url}`).then(response => { this.props.setEachPokemon(response.data)}))
              this.props.setPokemons(response.data.results)*/
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${13}&offset=100`).then(response =>
            this.props.setPokemons(response.data.results)
        )
    }

    displayPokemon(id) {
        this.setState({
            visible: true,
            currentPokemon: this.state.pokemons.find(pokemon => pokemon.id === id)
        })

    }


    render() {
        this.props.displayedPokemons.forEach(item => {
            this.props.setEachPokemon(item.url)
        });
        if (this.props.pokemon !== this.state.pokemons) {
            this.setState({
                pokemons: this.props.pokemon
            });
        }
        console.log('this', this);
        return (
            <div className={style.pokemons}>
                {/*{console.log('this.state', this.state.pokemons)}*/}
                <div className={style.gridForPok}>
                    {this.state.pokemons.sort((a, b) => (a.id > b.id) ? 1 : -1).map(poc =>
                        <div key={poc.id} className={style.pokemon} onDoubleClick={() => {

                            this.displayPokemon(poc.id)

                        }}>
                            <picture className={style.picture}>
                                <source media={"(min-width:725px)"}
                                        srcSet={`https://pokeres.bastionbot.org/images/pokemon/${poc.id}.png/`}/>
                                <img
                                    src={"https://poketouch.files.wordpress.com/2020/11/die_cast_poke_ball_replica.jpg"}/>
                            </picture>
                            <div className={style.pokeName}> {poc.name}</div>
                            {<div className={style.typesBox}> {poc.types && poc.types.map(currType => (
                                <span
                                    className={[style.type, style[currType.type.name]].join(' ')}>{currType.type.name}</span>
                            ))}</div>}
                        </div>)}
                </div>

                <button className={style.pokemonsButton} onClick={this.props.onLoadMore}> Load More</button>
                {this.state.visible ?
                    <Pokemon currentPokemon={this.state.currentPokemon} visible={this.state.visible}/> : null}
            </div>
        )

    }
}


export default Pokemons;