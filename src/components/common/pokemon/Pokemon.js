import React from 'react';

// Material

// Estilos
import './Pokemon.scss';
import { getBackcolor } from './../color/Colortype';



function Pokemon(props) {
 
    console.log(props.Pokedetail);
    
    let back = getBackcolor(props);
    console.log = back;

        return (
            <div>
                        <div className='detail'>
                            
                            <div className='Cont-detail'  >
                            <div className="spec-flip-container" >
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
                            </div>
                
                        </div>
                       
                    </div>
            
        );
    }


export default Pokemon;
