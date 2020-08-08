import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import './App.css';

export class App extends Component {
    render() {
        return (
            <React.Fragment>
            <NavBar />
            <Switch>
                <Route exact path = '/' component = {ProductList} />
                <Route path='/details' component={Details} />
                <Route path='/cart' component={Cart} />
                <Route component = {Default} />
            </Switch>
            <Modal />
            </React.Fragment>
        )
    }
}

export default App
