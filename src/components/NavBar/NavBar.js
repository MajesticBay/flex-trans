import React from 'react';
import logo from '../../images/logo-new.jpg';

function NavBar() {
    return (
        <div className="navbar">
            <img className="img-fluid" src={logo} alt="company logo"/>
            <p>(425) 260 2121</p>
        </div>
    );
}

export default NavBar;
