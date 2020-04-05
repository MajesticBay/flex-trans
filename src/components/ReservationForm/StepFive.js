import React from 'react';

import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepFive(props) {
    const { addressPick} = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);

    const { passengerInfo, setPassengerInfo } = React.useContext(reservationFormContext);
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    const handleNameChange = (e) => {
        setPassengerInfo({ ...passengerInfo, name: e.target.value });
        console.log('passengerInfo => ', passengerInfo.name);
    }

    const handlePhoneChange = (e) => {
        setPassengerInfo({ ...passengerInfo, phone: e.target.value });
        console.log('passengerInfo => ', passengerInfo.phone);
    }

    const handleEmailChange = (e) => {
        setPassengerInfo({ ...passengerInfo, email: e.target.value });
        console.log('passengerInfo => ', passengerInfo.email);
    }

    const handleAdditionalPassengerChange = (e) => {
        setPassengerInfo({ ...passengerInfo, additionalPassenger: e.target.value });
        console.log('passengerInfo => ', passengerInfo.additionalPassenger);
    }
    
    const handleWheelchairNeededChange = (e) => {
        setPassengerInfo({ ...passengerInfo, wheelchairNeeded: e.target.value });
        console.log('passengerInfo => ', passengerInfo.wheelchairNeeded);
    }

    const handleRideBackNeededChange = (e) => {
        setPassengerInfo({ ...passengerInfo, rideBackNeeded: e.target.value });
        console.log('passengerInfo => ', passengerInfo.rideBackNeeded);
    }

    return (
        <div className="reservation-form__step-five">
            <div className="step-five__inner-container">
                <div className="step-five__step-five-header">
                    <span className="step-five__header-text">Reservation form</span>
                    <div>
                        <span>← Back</span>
                        <span>Step 2 of 5</span>
                    </div>
                </div>
                <div className="step-five__step-five-form">
                    <div className="step-five__pickup-container">
                        <p className="reservation-form__input-label">First & Last Name</p>
                        <input className="reservation-form__input rounded" onChange={e => handleNameChange(e)}/>
                    </div>
                    <div className="step-five__dropoff-container">
                        <p className="reservation-form__input-label">Phone Number</p>
                        <input className="reservation-form__input rounded" onChange={e => handlePhoneChange(e)}/>
                    </div>
                    <div className="step-five__dropoff-container">
                        <p className="reservation-form__input-label">Email Adress</p>
                        <input className="reservation-form__input rounded" onChange={e => handleEmailChange(e)}/>
                    </div>
                </div>
                <div className="step-five__additional-info">
                    <div className="step-five__additional-info-form-group">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Additional Passenger</p>
                        <select className="step-five__additional-info-input reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleAdditionalPassengerChange(e)}>
                            <option selected>None</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="step-five__additional-info-form-group">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Do you need our<br/>wheelchair provided?</p>
                        <select className="step-five__additional-info-input reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleWheelchairNeededChange(e)}>
                            <option>Yes</option>
                            <option selected>No</option>
                        </select>
                    </div>
                    <div className="step-five__additional-info-form-group">
                        <p className="step-five__additional-info-header reservation-form__input-label reservation-form__input-label--no-margin">Do you need<br/>a ride back?</p>
                        <select className="step-five__additional-info-input reservation-form__input reservation-form__input--no-margin rounded"onChange={e => handleRideBackNeededChange(e)}>
                            <option>Yes</option>
                            <option selected>No</option>
                        </select>
                    </div>
                </div>
                <div className="step-five__step-five-footer">
                    <div>
                        <span>Total</span>
                        <span>$0</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
                        <span className="reservation-form__submit-text">Next Step →</span>
                    </div>
                </div>
            </div>
            <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%", borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px" }} src={mapUrl}></iframe>
        </div>
    )
}

export default StepFive;