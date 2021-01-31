import React from 'react';
import classes from './Pokemon.module.css'

const Pokemon = ({currentPokemon,visible}) => {

    console.log('in pokemon', currentPokemon)

    return (
        <div className={classes.item}>
            <table>
                <tr>
                    <th style={{textTransform: 'capitalize'}}>{currentPokemon !== -1 ? `${currentPokemon.name} ${currentPokemon.id.toString().padStart(4, '#0')}` : null}</th>
                </tr>
                <tr>
                    <td>Type</td>
                    <td> {currentPokemon.types && currentPokemon.types.map(currType => currType.type.name)}</td>
                </tr>
                {currentPokemon.stats && currentPokemon.stats.map(
                    currStat => (<tr>
                        <td style={{textTransform:'capitalize'}}>{getStatName(currStat.stat.name)}</td>
                    <td>{currStat.base_stat}</td>
                    </tr>))

                }

                <tr>
                    <td>Weight</td>
                    <td>{currentPokemon.weight}</td>
                </tr>
                <tr>
                    <td>Total moves</td>
                    <td>{currentPokemon.moves.length}</td>
                </tr>
            </table>
        </div>
    )
}
export default Pokemon
function getStatName(stat) {
    switch (stat){
        case 'special-attack':
            return 'SP Attack'
        case 'special-defense':
            return 'SP Defense'
        case 'hp':
            return 'HP'
        default :
            return stat;

    }
}
