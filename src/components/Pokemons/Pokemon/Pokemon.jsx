import React from 'react';
import s from './Pokemon.module.css'


const Pokemon = ({currentPokemon, onClick}) => {
    return (
        <div className={s.item} onClick={onClick}>
            <picture className={s.picturePOK}>
                <img className={s.imgItem}
                     src={`https://pokeres.bastionbot.org/images/pokemon/${currentPokemon.id}.png/`}
                alt={'Error with showing pokemon image'}/>
            </picture>
            <div style={{marginLeft: '60px', marginBottom: '10px'}}>
                <th style={{
                    textTransform: 'capitalize',
                    fontWeight: '700',
                    fontSize: '2em'
                }}>{currentPokemon !== -1 ? `${currentPokemon.name} #${currentPokemon.id.toString().padStart(3, '0')}` : null}</th>
            </div>
            <table>
                <tr>
                    <td>Type</td>
                    <td style={{textTransform: 'capitalize'}}> {currentPokemon.types && currentPokemon.types.map(currType => `${currType.type.name + ' '}`)}</td>
                </tr>
                {currentPokemon.stats && currentPokemon.stats.map(
                    currStat => (<tr>
                        <td style={{textTransform: 'capitalize'}}>{getStatName(currStat.stat.name)}</td>
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
