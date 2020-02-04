import React from 'react';
import logo from '../../images/logo-cabulance.png';
import phone from '../../images/phone.svg';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-mobile">
                <div className="navbar-mobile__logo-container">
                    <img className="img-fluid" src={logo} alt="company logo"/>
                </div>
                <div className="navbar-mobile__menu">
                    <p>(425) 260 2121</p>
                </div>
            </div>
            <div className="navbar-desktop">
                <div className="navbar-desktop__logo-container pointer">
                    <img className="img-fluid" src={logo} alt="company logo"/>
                </div>
                <div className="call-btn rounded">
                    <img className="call-btn__phone-img" src={phone} alt="Press to call us"/>
                    <span className="call-btn__text">(425) 260 2121</span>
                </div>
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
