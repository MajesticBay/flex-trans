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
        <div>
          <p>Send us a message</p>
          <div>
            <p>First and Last Name</p>
            <input className=""></input>
          </div>
        </div>
      </div>
      <Mission/>
    </div>
  );
}

export default ContactUs;