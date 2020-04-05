import React from 'react';

import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepFour(props) {
    const { addressPick} = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;
    return (
        <div className="reservation-form__step-four">
            <div className="step-four__inner-container">
                <div className="step-four__step-four-header">
                    <span className="step-four__header-text">Reservation form</span>
                    <div>
                        <span>← Back</span>
                        <span>Step 2 of 5</span>
                    </div>
                </div>
                <div className="step-four__step-four-form">
                    <div className="step-four__address-container">
                        <p className="step-four__address-input-header reservation-form__input-label">Pick-up location</p>
                        <input className="step-four__address-input reservation-form__input rounded"/>
                        <input className="step-four__apt-input reservation-form__input rounded"/>
                    </div>
                    <div className="step-four__address-container">
                        <p className="step-four__address-input-header reservation-form__input-label">Drop-off location</p>
                        <input className="step-four__address-input reservation-form__input rounded"/>
                        <input className="step-four__apt-input reservation-form__input rounded"/>
                    </div>
                </div>
                <div className="step-four__step-four-footer">
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

export default StepFour;