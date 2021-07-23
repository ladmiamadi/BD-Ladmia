import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Formulaire from './Formulaire';
import Details from './Details';
import ShoppingBag from './ShoppingBag';

class Content extends Component {
    render() {
        return (           
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/card-details/:id' exact component={Details}/>
                        <Route path='/inscription' exact component={Formulaire}/>
                        <Route path='/panier' exact component={ShoppingBag}/>
                    </Switch>
                </BrowserRouter>
              
        );
    }
}

export default Content;