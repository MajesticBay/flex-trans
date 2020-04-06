import React from 'react';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepSix(props) {

    const { addressPick } = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);
    const { distance } = React.useContext(reservationFormContext);
    const { price } = React.useContext(reservationFormContext);
    const { date } = React.useContext(reservationFormContext);
    const { time } = React.useContext(reservationFormContext);
    const { passengerInfo } = React.useContext(reservationFormContext);

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

    const handleReservationSubmit = (event) => {
        // event.preventDefault();
        const pickup = addressPick;
        const drop = addressDrop;
        console.log('addressPick ', addressPick);
        console.log('addressDrop ', addressDrop);
        const dateStr = date;
        const timeStr = time.fullTime;
        const name = passengerInfo.name;
        const phone = passengerInfo.phone;
        const email = passengerInfo.email;
        const additionalPassenger = passengerInfo.additionalPassenger;
        const wheelchairNeeded = passengerInfo.wheelchairNeeded;
        const rideBackNeeded = passengerInfo.rideBackNeeded;
        const formValues = { pickup, drop, dateStr, timeStr, name, phone, email, additionalPassenger, wheelchairNeeded, rideBackNeeded };
        // const formValues = { addressPick, addressDrop };
        console.log('formValues => ', formValues);
        const templateId = 'reservation_form';
        sendFeedback(templateId, formValues);
        props.next();
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
        <div className="reservation-form__step-six">
            <div className="step-six__inner-container">
                <div className="step-six__step-six-header">
                    <span className="step-six__header-text">You are almost done. Please confirm your order.</span>
                    <div>
                        <span>← Back</span>
                        <span>Step 2 of 5</span>
                    </div>
                </div>
                <div className="step-six__step-six-content">
                    <div className="step-six__step-six-form-container">
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Pick-up date: </span>
                            <span className="step-six-line-container__step-six-line-content">{date}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Pick-up time: </span>
                            <span className="step-six-line-container__step-six-line-content">{time.fullTime}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Trip origin: </span>
                            <span className="step-six-line-container__step-six-line-content">{addressPick}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Destination: </span>
                            <span className="step-six-line-container__step-six-line-content">{addressDrop}</span>
                        </div>
                    </div>
                    <div className="step-six__step-six-form-container">
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Passenger's Name: </span>
                            <span className="step-six-line-container__step-six-line-content">{passengerInfo.name}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Phone Number: </span>
                            <span className="step-six-line-container__step-six-line-content">{passengerInfo.phone}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Email Address: </span>
                            <span className="step-six-line-container__step-six-line-content">{passengerInfo.email}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Additional Passengers: </span>
                            <span className="step-six-line-container__step-six-line-content">{passengerInfo.additionalPassenger}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Do you need our wheelchair provided? </span>
                            <span className="step-six-line-container__step-six-line-content">{passengerInfo.wheelchairNeeded}</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Do you need a ride back? </span>
                            <span className="step-six-line-container__step-six-line-content">{passengerInfo.rideBackNeeded}</span>
                        </div>
                    </div>
                </div>
                <div className="step-six__step-six-comments-container">
                    <p className="step-six-comments-container__title">Comments: </p>
                    <span>You might notice that if you add extra passengers or use of our wheelchair, your quote does not go up. That’s because we offer these services, plus a number of others to whoever needs them free of charge. Go to our About Us page to see what others you can take advantage of at no cost to you.</span>
                </div>
                <div className="step-six__step-six-footer">
                    <div>
                        <span>Total</span>
                        <span>$0</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={() => handleReservationSubmit()}>
                        <span className="reservation-form__submit-text">Accept Terms & Condition</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepSix;