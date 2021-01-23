import React from 'react';

// Estilos
import './Pokemon.scss';
import { getBackcolor } from './../color/Colortype';


function Pokemon(props) {
        console.log(props.Pokedetail);
        function tipoif(props){
            if(props.Pokedetail.types[1]){
                return   props.Pokedetail.types[1].type.name;
                }
            }

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
                            N° {props.Pokedetail.id} {props.Pokedetail.name}
                        </div>
                        <div className='Specs1'>
                            Exp:{props.Pokedetail.base_experience} Height:{props.Pokedetail.height/10}m Weight:{props.Pokedetail.weight/10}Kg
                        </div>
                        <div>
                           Tipo: {props.Pokedetail.types[0].type.name} 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Pokemon;
