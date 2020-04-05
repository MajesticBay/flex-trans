import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Reservation from './components/Reservation/Reservation';
import ContactUs from './components/ContactUs';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ AboutUs }/>
        <Route path="/reserve" component={ Reservation }/>
        <Route path="/contact" component={ ContactUs }/>
    </Switch>
)