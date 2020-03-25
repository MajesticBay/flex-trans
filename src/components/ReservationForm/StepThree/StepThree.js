import React from 'react';

import { reservationFormContext } from '../../../contexts/reservationFormContext';

function StepThree(props) {
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    return (
        <div className="reservation-form__step-three">
            <div>
                <p className="step-three__header">Pick-up date and time</p>
                <div>
                    <span>Back</span>
                    <span>Step 1</span>
                    <span>of 5</span>
                </div>
                <div className="step-three__reservation-date-picker-container">
                    <input className="reservation-date-picker-container__reservation-date-picker reservation-form__input rounded" placeholder="Date"/>
                    <div className="reservation-date-picker-container__reservation-time-picker">
                        <input className="reservation-form__input rounded" placeholder="Time"/>
                        <input className="reservation-form__input rounded" placeholder="Time"/>
                    </div>
                    <div className="reservation-date-picker-container__reservation-am-pm-picker">
                        <label for="time-am">am</label>
                        <input type="radio" id="time-am" name="gender" value="am"/>
                        <label for="time-pm">pm</label>
                        <input type="radio" id="time-pm" name="gender" value="pm"/>
                    </div>
                    <div className="reservation-form__submit-btn reservation-form__submit-btn--step-three rounded pointer" onClick={() => props.next()}>
                        <span className="reservation-form__submit-text">Next Step →</span>
                    </div>
                </div>  
                
            </div>
            <div className="step-one__car-photo-container">
                <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%", borderRadius: "6px" }} src={mapUrl}>

                </iframe>
            </div>
        </div>
    )
}

export default StepThree;