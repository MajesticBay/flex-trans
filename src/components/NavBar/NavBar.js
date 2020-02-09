import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-cabulance.png';
import phone from '../../images/phone.svg';
import hamburger from '../../images/menu-hamburger.svg';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-mobile">
                <div className="navbar-mobile__logo-container">
                    <Link to="/">
                        <img className="img-fluid" src={logo} alt="company logo"/>
                    </Link>
                </div>
                <div className="call-btn call-btn--mobile rounded pointer">
                    <img className="call-btn__phone-img" src={phone} alt="Press to call us"/>
                    <span className="call-btn__text">(425) 260 2121</span>
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
                    <Link to="/">
                        <img className="img-fluid" src={logo} alt="company logo"/>
                    </Link>
                </div>
                <div className="call-btn rounded pointer">
                    <img className="call-btn__phone-img" src={phone} alt="Press to call us"/>
                    <span className="call-btn__text">(425) 260 2121</span>
                </div>
                <div className="navbar__navbar-links">
                    <Link className="navbar-links__navbar-link" to="/">Home</Link>
                    <Link className="navbar-links__navbar-link" to="/about">About Us</Link>
                    <Link className="navbar-links__navbar-link" to="/reservation">Reservation</Link>
                    <Link className="navbar-links__navbar-link" to="/services">Services</Link>
                    <Link className="navbar-links__navbar-link" to="/contact">Contact Us</Link>
                    {/* <a className="navbar-links__navbar-link" href="/">Home</a>
                    <a className="navbar-links__navbar-link" href="/">About Us</a>
                    <a className="navbar-links__navbar-link" href="/">Reservation</a>
                    <a className="navbar-links__navbar-link" href="/">Services</a>
                    <a className="navbar-links__navbar-link" href="/">Contact Us</a> */}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
