import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import Reservation from '../components/Reservation/Reservation';
import Services from '../components/Services/Services';
import ContactUs from '../components/ContactUs/ContactUs';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ AboutUs }/>
        <Route path="/reserve" component={ Reservation }/>
        <Route path="/contact" component={ ContactUs }/>
    </Switch>
)