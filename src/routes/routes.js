import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import AboutUs from '../components/AboutUs/AboutUs';
import Reservation from '../components/Reservation/Reservation';
import ContactUs from '../components/ContactUs/ContactUs';
import ReservationFormTest from '../components/ReservationFormTest/MultiStepForm';

export default (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/about" component={ AboutUs }/>
        <Route path="/reserve" component={ Reservation }/>
        <Route path="/contact" component={ ContactUs }/>
        <Route path="/test" component={ ReservationFormTest }/>
    </Switch>
)