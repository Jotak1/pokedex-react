import React, { Component } from 'react';
import './Home.scss'
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class Home extends Component{
    render(){
        return (
            <div className='Home'>
                <div className='title'>
                    <p className='titletext' >Pokedex</p>
                </div>
                <div className='Image'>
                    <img className='img' src="./assets/img/pikachuphone.gif" alt="Pikachu"/>
                </div>
                <div className='buttongoto'>
                    <Button variant="contained" color="primary" href="/pokedex" endIcon={ <ArrowForwardIosIcon/> }>
                        Go to Pokedex 
                    </Button>
                </div>
            </div>
        );
    }
}

export default Home;