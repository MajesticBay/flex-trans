import React from 'react';
import logo from '../../images/logo.jpg';

function NavBar() {
    return (
        <div>
            <div className="navbar-mobile">
                <img className="img-fluid" src={logo} alt="company logo"/>
                <p>(425) 260 2121</p>
            </div>
            <div className="navbar-desktop">
                <div className="navbar-desktop__logo-container pointer">
                    <img className="img-fluid" src={logo} alt="company logo"/>
                </div>
                <p>(425) 260 2121</p>
                <a href="/home">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/reservation">Reservation</a>
                <a href="/services">Services</a>
                <a href="/contact-us">Contact Us</a>
            </div>
        </div>
    );
}

export default NavBar;
