import React from 'react';

import Top from '../Top/Top';
import TalkingCar from '../TalkingCar/TalkingCar';
import Mission from '../Mission/Mission';

function ContactUs() {
  return (
    <div className="contact-us">
      <Top/>
      <TalkingCar/>
      <div className="contact-us__contact-us-content">
        <h3 className="contact-us__header">Contact Information</h3>
        <p>Phone: 1-425-444-3905</p>
        <p>Email: flextranswa@gmail.com</p>
        <div className="contact-us__contact-form rounded">
          <p className="contact-us__header contact-us__header--form">Send us a message</p>
          <div className="contact-form__contact-form-inside-wrapper">
            <div className="contact-form-inside-wrapper__contact-left">
              <div className="contact-form__contact-form-group">
                <label className="contact-form__label">First and Last Name</label>
                <input className="contact-form-group__input rounded"></input>
              </div>
              <div className="contact-form__contact-form-group">
                <label className="contact-form__label">Phone</label>
                <input className="contact-form-group__input rounded"></input>
              </div>
              <div className="contact-form__contact-form-group">
                <label className="contact-form__label">Email</label>
                <input className="contact-form-group__input contact-form-group__input--no-padding rounded"></input>
              </div>
            </div>

            <div className="contact-form-inside-wrapper__contact-right">
              <div className="contact-us__contact-form-group contact-us__contact-form-group--height-100">
                <label className="contact-form__label">Message</label>
                <textarea className="contact-form-group__textarea rounded"></textarea>
              </div>
            </div>
            <div className="contact-form-group__contact-submit-btn rounded">
              <p className="contact-submit-btn__text">Send message</p>
            </div>
          </div>
        </div>
      </div>
      <Mission/>
    </div>
  );
}

export default ContactUs;