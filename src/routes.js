import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Search from './pages/Search'

// Separa as rotas da aplicação e possibilita o redirecionamento entre paginas de forma prática.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/search/:item/:tags' component={Search} />
                <Route path='/search' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}