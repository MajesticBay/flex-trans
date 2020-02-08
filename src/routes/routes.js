import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs/AboutUs';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ AboutUs }/>
    </Switch>
)