import React, { useState } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import Top from './Top';
import ReservationForm from './ReservationForm/ReservationForm';

function ContactUs() {
  const [contactFormName, setContactFormName] = useState("");
  const [contactFormPhone, setContactFormPhone] = useState("");
  const [contactFormEmail, setContactFormEmail] = useState("");
  const [contactFormMessage, setContactFormMessage] = useState("");

  const createNotification = (type) => {
    console.log(type)
    if (type === "success") {
        NotificationManager.success('A message was sent', 'Success!', 5000);
    } else {
        NotificationManager.error('This message has not been sended', 'Error!', 5000, () => {
        alert('callback');
        });
    }
  }

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log(contactFormName);
    // console.log(contactFormPhone);
    // console.log(contactFormEmail);
    // console.log(contactFormMessage);
    const name = contactFormName;
    const phone = contactFormPhone;
    const email = contactFormEmail;
    const message = contactFormMessage;
    const formValues = { name, phone, email, message };
    console.log ('formValues => ', formValues);
    const templateId = 'contact-us_zxl0pk0o';
    sendFeedback(templateId, formValues);
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send('gmail', templateId, variables)
    .then(res => {
        createNotification('success')
        console.log('Email successfully sent!');
        console.log(res);
    })
    .catch(err => {
        createNotification('error')
        console.error('Error during sending email:', err);
    })
  }

  return (
    <div className="contact-us">
      {/* <Top/> */}
      <ReservationForm/>
      <div className="contact-us__contact-us-content">
        <h3 className="contact-us__header">Contact Information</h3>
        <NotificationContainer/>
        <p className="contact-us__info"><span className="contact-us__info-header">Phone:</span> 1-425-444-3905</p>
        <p className="contact-us__info"><span className="contact-us__info-header">Email:</span> flextranswa@gmail.com</p>
        {/* <form className="contact-us__contact-form rounded" onSubmit={() => handleSubmit()}> */}
        <form className="contact-us__contact-form">
          <p className="contact-us__header contact-us__header--form">Send us a message</p>
          <div className="contact-form__contact-form-inside-wrapper">
            <div className="contact-form-inside-wrapper__contact-left">
              <div className="contact-form__contact-form-group">
                <label className="contact-form__label">First and Last Name</label>
                <input type="text" className="contact-form-group__input rounded" onChange={e => setContactFormName(e.target.value)}></input>
              </div>
              <div className="contact-form__contact-form-group">
                <label className="contact-form__label">Phone</label>
                <input type="phone" className="contact-form-group__input rounded" onChange={e => setContactFormPhone(e.target.value)}></input>
              </div>
              <div className="contact-form__contact-form-group">
                <label className="contact-form__label">Email</label>
                <input type="email" className="contact-form-group__input contact-form-group__input--no-padding rounded" onChange={e => setContactFormEmail(e.target.value)}></input>
              </div>
            </div>

            <div className="contact-form-inside-wrapper__contact-right">
              <div className="contact-us__contact-form-group contact-us__contact-form-group--height-100">
                <label className="contact-form__label">Message</label>
                <textarea type="text" className="contact-form-group__textarea rounded" onChange={e => setContactFormMessage(e.target.value)}></textarea>
              </div>
            </div>
            {/* <div className="contact-form-group__contact-submit-btn rounded pointer" onClick={ () => handleSubmit() }>
              <input className="contact-submit-btn__text" type="submit" value="Send message"></input>
            </div> */}
            <div className="contact-form-group__contact-submit-btn rounded pointer" onClick={ () => handleSubmit() }>
              <p className="contact-submit-btn__text">Send message</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;