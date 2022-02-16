import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/common/not-found/Notfound';
import Pokedex from './components/pokedex/Pokedex'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/pokedex-react' element={<Home/>} />
            <Route path='/pokedex-react/home' element={<Home/>} />
            <Route path='/pokedex-react/about' element={<About/>}/>
            <Route path='/pokedex-react/pokedex' element={<Pokedex/>}/>
                <Route element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
)

export default Router;