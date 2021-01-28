import React from 'react';
import Pokemon from './Pokemon/Pokemon'
import style from './Pokemons.module.css'
import * as axios from "axios";

class Pokemons extends React.Component {
    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${25}`).then(response => {
            this.props.setPokemons(response.data.results)
            }
        )
    }


    render() {
       return (
           <div>
                <div>
                    {/*{this.props.pokemons.filter((poc, index) => index < 12).map(poc => <span key={poc.id}>
                        <img src={poc.url}/>
                        <span> {poc.name}</span>
                    </span>)}*/}
                    {this.props.displayedPokemons.filter((poc, index) => index < this.props.displayedCount).map(poc => <span key={poc.id}>
                        <img src={poc.url}/>
                        <span> {poc.name}</span>
                    </span>)}

                    <button onClick={this.props.onLoadMore}> Load More</button>
                </div>
            </div>
        )

}}


export default Pokemons;