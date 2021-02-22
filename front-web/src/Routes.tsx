import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalog from './pages/Catalog';
import DetailMovies from './pages/Catalog/components/DetailMovies';
import Home from './pages/Home';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movies" exact>
                    <Catalog />
                </Route>
                <Route path="/movies/:movieId" exact>
                    <DetailMovies />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;