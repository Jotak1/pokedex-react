import React from 'react';

// Estilos
import './Pokemon.scss';
import { getBackcolor } from './../color/Colortype';


function Pokemon(props) {
        
        return (
            <div className='pokemondet'>
                <div className='detail'>
                    <div className='Cont-detail' style={{background: getBackcolor(props)}} >
                        <div className="spec-flip-container"  >
                            <div className="spec-flipper">
                                <div  className="spec-front" >
                                    <img className='imgfront' src={props.Pokedetail.sprites.front_default} alt='pokemon' />
                                </div>
                                <div className="spec-back">
                                    <img className='imgback'  src={props.Pokedetail.sprites.back_default} alt='pokemon' />
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className='spec-container'>
                        <div className='Specs'>
                            N°{props.Pokedetail.id} {props.Pokedetail.name}
                        </div>
                        <div className='Specs1'>
                            Exp:{props.Pokedetail.base_experience} Height:{props.Pokedetail.height/10}m Weight:{props.Pokedetail.weight/10}Kg
                        </div>
                        <div className='Specs1'>
                           Tipo: <br/>  {props.Pokedetail.types[0].type.name} {props.Pokedetail.types[1] && props.Pokedetail.types[1].type.name }
                        </div>
                        <div className='Specs1'>
                           Abilities: <br/> {props.Pokedetail.abilities[0].ability.name} {props.Pokedetail.abilities[1] && props.Pokedetail.abilities[1].ability.name }
                        </div>
                        <div className='Specs1'>
                           Stats: <br/>{props.Pokedetail.stats[0].stat.name}:{props.Pokedetail.stats[0].base_stat} {props.Pokedetail.stats[1].stat.name}:{props.Pokedetail.stats[1].base_stat} {props.Pokedetail.stats[2].stat.name}:{props.Pokedetail.stats[2].base_stat} {props.Pokedetail.stats[3].stat.name}:{props.Pokedetail.stats[3].base_stat} {props.Pokedetail.stats[4].stat.name}:{props.Pokedetail.stats[4].base_stat} {props.Pokedetail.stats[5].stat.name}:{props.Pokedetail.stats[5].base_stat}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Pokemon;
