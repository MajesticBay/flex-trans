import React from 'react';
import { reservationFormContext } from '../../../contexts/reservationFormContext';

function StepSeven(props) {
    const { addressPick} = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);
    const { distance } = React.useContext(reservationFormContext);
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;
    return (
        <div className="reservation-form__step-seven">
            <div className="step-seven__form rounded">
                    <span className="step-seven__thank-you-text">Thank you for your reservation!  Our manager will be  in touch with you soon.</span>
                    <div className="reservation-form__submit-btn reservation-form__submit-btn--no-margin rounded pointer" onClick={props.next}>
                        <span className="reservation-form__submit-text">Reserve Another Trip →</span>
                    </div>
                </div>
            <div className="step-one__car-photo-container">
                <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%", borderRadius: "6px" }} src={mapUrl}></iframe>
            </div>
        </div>
    )
}

export default StepSeven;