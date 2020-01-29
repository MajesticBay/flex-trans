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
                <a>Home</a>
                <a>About Us</a>
                <a>Reservation</a>
                <a>Services</a>
                <a>Contact Us</a>
            </div>
        </div>
    );
}

export default NavBar;
