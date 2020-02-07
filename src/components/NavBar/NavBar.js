import React from 'react';
import logo from '../../images/logo-cabulance.png';
import phone from '../../images/phone.svg';
import hamburger from '../../images/menu-hamburger.svg';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-mobile">
                <div className="navbar-mobile__logo-container">
                    <img className="img-fluid" src={logo} alt="company logo"/>
                </div>
                <div>
                    <img src={hamburger} alt="menu hamburger"/>
                </div>
                <div className="navbar-mobile__menu">
                    <p>(425) 260 2121</p>   
                </div>
            </div>
            <div className="navbar-desktop">
                <div className="navbar-desktop__logo-container pointer">
                    <img className="img-fluid" src={logo} alt="company logo"/>
                </div>
                <div className="call-btn rounded pointer">
                    <img className="call-btn__phone-img" src={phone} alt="Press to call us"/>
                    <span className="call-btn__text">(425) 260 2121</span>
                </div>
                <div className="navbar__navbar-links">
                    <a className="navbar-links__navbar-link" href="/home">Home</a>
                    <a className="navbar-links__navbar-link" href="/about-us">About Us</a>
                    <a className="navbar-links__navbar-link" href="/reservation">Reservation</a>
                    <a className="navbar-links__navbar-link" href="/services">Services</a>
                    <a className="navbar-links__navbar-link" href="/contact-us">Contact Us</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
