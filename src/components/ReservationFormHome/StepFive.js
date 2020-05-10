import React from 'react';
import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepFive(props) {
    const { addressPick, addressDrop, passengerInfo, setPassengerInfo, price, setPrice } = React.useContext(reservationFormContext);
    // const { addressDrop } = React.useContext(reservationFormContext);
    // const { passengerInfo, setPassengerInfo } = React.useContext(reservationFormContext);
    // const { price, setPrice } = React.useContext(reservationFormContext);
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
        if (e.target.value == "Yes") {
            setPrice((price * 2).toFixed(2));
        }
        setPassengerInfo({ ...passengerInfo, rideBackNeeded: e.target.value });
        console.log('passengerInfo => ', passengerInfo.rideBackNeeded);
    }

    const nextStep = () => {
        // var hasFalseKeys = Object.keys(passengerInfo).some(k => !passengerInfo[k]);

        if (!passengerInfo.name || !passengerInfo.phone || !passengerInfo.email) { 
            alert ("Fill out all fields!");
        } else {
            props.next();
        }
    }

    return (
        <div className="reservation-form__step-five">
            <div className="step-five__inner-container">
                <div className="step-five__step-five-header">
                    <span className="step-five__header-text">Reservation form</span>
                    <span className="reservation-form__back-container">
                        <span className="back-container__back-text pointer" onClick={() => props.previous()}>← Back </span>
                        <span className="back-container__step-text">Step 3</span>
                        <span className="back-container__of-steps-text"> of 4</span>
                    </span>
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
                    <div className="reservation-form__reservation-footer-price-container">
                        <span className="reservation-footer-price-container__total">Total: </span>
                        <span className="reservation-footer-price-container__dollar">$</span>
                        <span className="reservation-footer-price-container__price">{price}</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={() => nextStep()}>
                        <span className="reservation-form__submit-text">Next Step →</span>
                    </div>
                </div>
            </div>
            <iframe className="google-map-iframe" title="google-map" frameBorder="0" style={{ borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px" }} src={mapUrl}></iframe>
        </div>
    )
}

export default StepFive;