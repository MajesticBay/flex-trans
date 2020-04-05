import React from 'react';

import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepSix(props) {

    const { addressPick } = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);
    const { distance } = React.useContext(reservationFormContext);
    const { price } = React.useContext(reservationFormContext);
    const { date } = React.useContext(reservationFormContext);
    const { time } = React.useContext(reservationFormContext);
    const { passengerInfo } = React.useContext(reservationFormContext);


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
                            <span className="step-six-line-container__step-six-line-content">Yes</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Do you need our wheelchair provided? </span>
                            <span className="step-six-line-container__step-six-line-content">Yes</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Do you need a ride back? </span>
                            <span className="step-six-line-container__step-six-line-content">No</span>
                        </div>
                    </div>
                </div>
                <div className="step-six__step-six-comments-container">
                    <p className="step-six-comments-container__title">Comments: </p>
                    <span>You might notice that if you add extra passengers or use of our wheelchair, your quote does not go up. That’s because we offer these services, plus a number of others to whoever needs them free of charge. Go to our About Us page to see what others you can take advantage of at no cost to you.  </span>
                </div>
                <div className="step-six__step-six-footer">
                    <div>
                        <span>Total</span>
                        <span>$0</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
                        <span className="reservation-form__submit-text">Accept Terms & Condition</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepSix;