import React from 'react';
import logo from '../../images/logo.jpg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logos">
                <div className="footer__payment-logo-container">
                    <img className="img-fluid" src={logo} alt="visa is supported as a payment system"/>
                </div>
                <div className="footer__payment-logo-container">
                    <img className="img-fluid" src={logo} alt="mastercard is supported as a payment system"/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
