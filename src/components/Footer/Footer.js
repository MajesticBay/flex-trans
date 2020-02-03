import React from 'react';
import visa from '../../images/visa.svg';
import mastercard from '../../images/mastercard.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer-logos">
                    <div className="footer__payment-logo-container">
                        <img className="img-fluid" src={visa} alt="visa is supported as a payment system"/>
                    </div>
                    <div className="footer__payment-logo-container">
                        <img className="img-fluid" src={mastercard} alt="mastercard is supported as a payment system"/>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-info__mobile">
                        <p>© 2020 Flex-trans Inc. All rights reserved.</p>
                        <p>Phone number: (425) 260 2121</p>
                        <p>flex-trans@gmail.com</p>
                    </div>
                    <div className="footer-info__desktop">
                        <p>© 2020 Flex-trans Inc. All rights reserved. | Phone number: (425) 260 2121 | flex-trans@gmail.com</p>
                    </div>
                    <p className="footer-info__terms">Terms & Conditions: All Pricing & Services are subject to change or update at any time by Flex-Trans with or without notice. We will honor all pricing & services in effect at the time of reservation. All payments are refundable upon cancellation at least one hour pick-up time.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
