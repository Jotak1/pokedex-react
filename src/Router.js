import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/common/not-found/Notfound';
import Pokedex from './components/pokedex/Pokedex'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/pokedex' component={Pokedex}/>
            <Route path='/pokemon/:id' component={Pokedex}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;