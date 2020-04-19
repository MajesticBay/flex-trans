import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-cabulance.png';
import phone from '../images/phone.svg';

function NavBar() {
    let isActive = true;
    const [active, setActive] = useState("/");
    let page = (window.location.href.split('/')[3]);
    // console.log(page);
    useEffect(() => {
        setActive(page);
        console.log(active);
    })

    const test = () => {
        console.log(window.location.href);
    }

    return (
        <div className="navbar">
            <div className="navbar-mobile">
                <Link to="/">
                    <div className="navbar-mobile__logo-container">
                        <img className="img-fluid--no-width" src={logo} alt="Flex-trans logo"/>
                    </div>
                </Link>
                <a href="tel:(425) 444 3905">
                    <div className="call-btn rounded pointer">
                        <div className="call-btn__phone-img-container">
                            <img className="call-btn__phone-img" src={phone} alt="Press to call us"/>
                        </div>
                        <span className="call-btn__text">(425) 444 3905</span>
                    </div>
                </a>
                <div className="navbar-mobile__menu">
                    <a href="tel:(425) 444 3905">
                        <p>(425) 444 3905</p>
                    </a>
                </div>
            </div>
            <div className="navbar-desktop">
                <div className="navbar-desktop__navbar-desktop-left">
                    <Link to="/">
                        <div className="navbar-desktop__logo-container pointer">
                            <img className="img-fluid--no-width" src={logo} alt="Flex-trans logo"/>
                        </div>
                    </Link>
                    <a href="tel:(425) 444 3905">
                        <div className="call-btn call-btn--desktop-navbar rounded pointer">
                            <div className="call-btn__phone-img-container">
                                <img className="img-fluid--no-width" src={phone} alt="Press to call us"/>
                            </div>
                            <span className="call-btn__text">(425) 444 3905</span>
                        </div>
                    </a>
                </div>
                <div className="navbar__navbar-links">
                    <Link className={` ${isActive} ? "backgroundColor: red" : "" navbar-links__navbar-link`} to="/">Home</Link>
                    <Link className="navbar-links__navbar-link" to="/about">About Us</Link>
                    <Link className="navbar-links__navbar-link" to="/reserve">Reserve a trip</Link>
                    <Link className="navbar-links__navbar-link" to="/contact">Contact Us</Link>
                    {/* <span onClick={() => test()}>test</span> */}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
