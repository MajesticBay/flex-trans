import React from 'react';

import { reservationFormContext } from '../../../contexts/reservationFormContext';

function StepFour(props) {
    const { addressPick} = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;
    return (
        <div className="reservation-form__step-four">
            <div>
                <div className="step-four__step-four-header">
                    <span>Reservation form</span>
                    <div>
                        <span>← Back</span>
                        <span>Step 2 of 5</span>
                    </div>
                </div>
                <div className="step-four__step-four-form">
                    <div className="step-four__pickup-container">
                        <p>Pick-up location</p>
                        <input/>
                        <input/>
                    </div>
                    <div className="step-four__dropoff-container">
                        <p>Drop-off location</p>
                        <input/>
                        <input/>
                    </div>
                </div>
                <div className="step-four__step-four-footer">
                    <div>
                        <span>Total</span>
                        <span>$0</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                    </div>
                </div>
            </div>
            <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%", borderRadius: "6px" }} src={mapUrl}></iframe>
        </div>
    )
}

export default StepFour;