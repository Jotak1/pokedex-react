import React, { useEffect } from 'react';
import Search from '../common/search/Search';
import './Pokedex.css'

function Pokedex() {
    const [result, setResult] = React.useState([]);
    const [poke, setPoke] = React.useState([]);
    const [load, setLoad] = React.useState('true');
    const arr = [];

    
    useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon/?limit=50')
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
    }, 1000);

    


    return (
        <div className="App">
            <div className='search'>
            <Search/>
            </div>
            <div className='pokegallery' id='pokegallery'>
            
                { load ? (
                    <p  >Loading...</p>
                    ) : (
                        
                    poke.map((img, i) => (
                        
                        <div id={img.id} key={img.id} className='card'>
                            <div  >
                            <img  src={img.sprites.front_default} alt='pokemon' />
                            <div >
                            <h5 className='name'>{img.name}</h5>
                            <h6>id:{img.id}</h6>
                            </div>
                            </div>
                        </div>
                        
                ))
                )}
            </div>
        </div>
    );
    }
export default Pokedex;
