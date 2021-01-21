import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo-cabulance.png';
import phone from '../images/phone.svg';
import { reservationFormContext } from '../contexts/reservationFormContext';

// function useForceUpdate(){
//     // const [value, setValue] = useState(0); // integer state
//     return () => setValue(value => ++value); // update the state to force render
// }

function NavBar() {
    // const forceUpdate = useForceUpdate();
    // const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const {
        setAddressPick, setAddressDrop, setDate, setTime
    } = React.useContext(reservationFormContext);

    const handleNavLinkClick = (value) => {
        if (value === window.location.pathname) {
            window.location.reload();
        }
        if (value === "/") {
            setAddressPick("");
            setAddressDrop("");
        } else if (value === "/reserve") {
            setDate("");
            setTime({
                fullTime: "",
                hours: "0",
                minutes: "00",
                ampm: ""
        })}
    }

    // const reloadHome = () => {
    //     window.location.reload();
    // }

    return (
        <div className="navbar">
            <nav className="navbar-mobile">
                <div className="navbar-mobile__logo-container">
                    <img className="img-fluid--no-width" src={logo} alt="Flex-trans logo"/>
                </div>
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
            </nav>
            <nav className="navbar-desktop">
                <div className="navbar-desktop__navbar-desktop-left">
                    <Link to="/" onClick={() => handleNavLinkClick("/")}>
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
                    <NavLink
                        activeStyle={{ backgroundColor: 'rgb(223, 44, 33)', color: 'white', textDecoration: 'none'}}
                        className="navbar-links__navbar-link" exact to="/"
                        onClick={() => handleNavLinkClick("/")}
                        >Home</NavLink>
                    <NavLink
                        activeStyle={{ backgroundColor: 'rgb(223, 44, 33)', color: 'white', textDecoration: 'none'}}
                        className="navbar-links__navbar-link" to="/about"
                        onClick={() => handleNavLinkClick("/about")}
                        >About Us</NavLink>
                    <NavLink
                        activeStyle={{ backgroundColor: 'rgb(223, 44, 33)', color: 'white', textDecoration: 'none'}}
                        className="navbar-links__navbar-link" to="/reserve"
                        onClick={() => handleNavLinkClick("/reserve")}
                        >Reserve a trip</NavLink>
                    <NavLink
                        activeStyle={{ backgroundColor: 'rgb(223, 44, 33)', color: 'white', textDecoration: 'none'}}
                        className="navbar-links__navbar-link" to="/contact"
                        onClick={() => handleNavLinkClick()}
                        >Contact Us</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
