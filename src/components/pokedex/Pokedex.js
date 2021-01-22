import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from '@material-ui/core/Button';
import Search, { sFunctype } from '../common/search/Search';
import './Pokedex.scss'
import CloseIcon from '@material-ui/icons/Close';

import getTypeColor from '../common/color/Colortype';
import Pokemon from '../common/pokemon/Pokemon'


function Pokedex() {
    const [result, setResult] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [poke, setPoke] = React.useState([]);
    const [load, setLoad] = React.useState('true');
    const arr = [];
    const [valor, setValor] = React.useState([]);
    
   
    const handleClickOpen = i => {
         
        let a = poke[i]
        setValor(a)
        setOpen(true);
        
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    
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
                            <div className="flip-container"  onClick={() => handleClickOpen(i)}>
                                <div className="flipper">
                                    <div  className="front" >
                                        <img  src={img.sprites.front_default} alt='pokemon' />
                                    </div>
                                    <div className="back">
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
        
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title"
                
                    PaperProps={{
                        style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        },
                    }}
            >
                <DialogTitle id="max-width-dialog-title">
                    <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="primary">
                    <CloseIcon/>
                    </Button>
                    </DialogActions>
                    </DialogTitle>
                <DialogContent>
                
                <Pokemon Pokedetail={valor} />
               
                </DialogContent>
                
            </Dialog>

        </div>
    );
    }
export default Pokedex;
