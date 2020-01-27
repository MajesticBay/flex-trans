import React from 'react';
import logo from '../../images/logo.jpg';

function NavBar() {
    return (
        <div className="navbar">
            <div className="navbar-mobile">
                <img className="img-fluid" src={logo} alt="company logo"/>
                <p>(425) 260 2121</p>
            </div>
            <div className="navbar-desktop">
                <div className="navbar-desktop__logo-container">
                    <img className="img-fluid" src={logo} alt="company logo"/>
                </div>
                <p>(425) 260 2121</p>
            </div>
        </div>
    );
}

export default NavBar;
