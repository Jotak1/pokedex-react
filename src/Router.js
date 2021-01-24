import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/common/not-found/Notfound';
import Pokedex from './components/pokedex/Pokedex'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/pokedex-react' component={Home} />
            <Route path='/pokedex-react/home' component={Home} />
            <Route path='/pokedex-react/about' component={About}/>
            <Route path='/pokedex-react/pokedex' component={Pokedex}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;