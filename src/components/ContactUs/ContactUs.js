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
                <p>First and Last Name</p>
                <input className="contact-form-group__input rounded"></input>
              </div>
              <div className="contact-form__contact-form-group">
                <p>Phone</p>
                <input className="contact-form-group__input rounded"></input>
              </div>
              <div className="contact-form__contact-form-group">
                <p>Email</p>
                <input className="contact-form-group__input rounded"></input>
              </div>
            </div>

            <div className="contact-form-inside-wrapper__contact-right">
              <div className="contact-us__contact-form-group">
                <p>Message</p>
                <textarea className="contact-form-group__textarea rounded"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mission/>
    </div>
  );
}

export default ContactUs;