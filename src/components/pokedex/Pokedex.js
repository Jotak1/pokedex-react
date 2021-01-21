import React, { useEffect } from 'react';
import Search, { sFunctype } from '../common/search/Search';
import './Pokedex.scss'
import getTypeColor from '../common/color/Colortype';

function Pokedex() {
    const [result, setResult] = React.useState([]);
    const [poke, setPoke] = React.useState([]);
    const [load, setLoad] = React.useState('true');
    const arr = [];

    
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then((response) => response.json())
      .then((data) => setResult(
      data.results.map((item) => {
      fetch(item.url)
      .then((response) => response.json())
      .then((allpokemon) => arr.push(allpokemon));
      setPoke(arr);
    }),
    ));
    }, []);

    setTimeout(() => {
    setLoad(false);
    }, 2000);

    
    
    
    return (
        <div className="App">
            
            <div className='search'>
            <Search/>
            </div>
            {/* <button value='fire' id='prueba' onClick={sFunctype}>tipo</button> */}
            <div className='pokegallery'  id="pokegallery" >
                            
                { load ? (
                    <div className='Loading'>
                        <p className="image-holder">
                    <img src='./assets/img/pokeloading.gif' alt='Loading' />
                    </p>
                    </div>
                    ) : (
                        
                    poke.map((img, i) => (
                        
                        <div id={img.id} key={img.id} className='card' >
                            <div class="flip-container">
                            <div class="flipper">
                            <div  class="front" >
                            <img  src={img.sprites.front_default} alt='pokemon' />
                            </div>
                            <div class="back">
                            <img  src={img.sprites.back_default} alt='pokemon' />
                            </div>
                            </div>
                            </div>
                            <h5 className='num' >N°</h5>
                            <div className='name'>{img.id} {img.name} 
                                 <div className='types'  style={{background: getTypeColor(img.types[0].type.name)}} onClick={()=> sFunctype(img.types[0].type.name)} >   {img.types[0].type.name}</div> 
                                 { img.types[1] &&
                                     <div className='types' style={{background: getTypeColor(img.types[1].type.name)}} onClick={()=> sFunctype(img.types[1].type.name)}>  {img.types[1].type.name} </div>
                                 }
                                 
                            </div>
                            
                            </div>
                            
                        
                                               
                        
                ))
                )}
                
            </div>
        
        </div>
    );
    }
export default Pokedex;
