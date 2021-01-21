import React from 'react';

// Material

// Estilos
import './Pokemon.scss';
import getTypeColor from './../color/Colortype';

function Pokemon(props) {
    let color1 = 'ffffff'
    let color2 = '707070'
    let backgroundColor1 = color1;
    let backgroundColor2 = `linear-gradient(180deg, #${color1} 34%, #${color2} 100%)`;
    let contador = 0;

    const BackStyle = {
    //  background: getTypeColor(props.Pokedetail.types[0].type.name),
    //  backgroundImage: getTypeColor(props.Pokedetail.types[1].type.name), 
    };

    console.log(props.Pokedetail);
    
    getTypeColor(props.Pokedetail.types[0].type.name);

        return (
            <div className='detail'>
                <div className='Cont-detail' style={BackStyle}>
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
            
        );
    }


export default Pokemon;
