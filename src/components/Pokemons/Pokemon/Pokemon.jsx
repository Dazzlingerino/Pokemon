import React from 'react';
import s from './Pokemon.module.css'
import './Pokemon.module.css'

const Pokemon = ({currentPokemon}) => {
    return (
        <div className={s.item}>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${currentPokemon.id}.png/`}
                 alt={'Error with showing pokemon'}/>
            <div className={s.pokeName}>
                {currentPokemon !== -1 ? `${currentPokemon.name} #${currentPokemon.id.toString().padStart(3, '0')}` : null}
            </div>
            <table>
                <tr>
                    <td>Type</td>
                    <td className={s.typeName}> {currentPokemon.types && currentPokemon.types.map(currType => `${currType.type.name + ' '}`)}</td>
                </tr>
                {currentPokemon.stats && currentPokemon.stats.map((currStat, id) => (
                    <tr key={currStat.id}>
                        <td className={s.statName}>{getStatName(currStat.stat.name)}</td>
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
    switch (stat) {
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
