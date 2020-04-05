import React from 'react';

import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepThree(props) {
    const { addressPick } = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);

    const { date, setDate } = React.useContext(reservationFormContext);
    const { time, setTime } = React.useContext(reservationFormContext);
    
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    const handleDataChange = (e) => {
        setDate(e);
        console.log('date => ', date);
    }

    return (
        <div className="reservation-form__step-three">
            <div className="step-three__step-three-container">
                <div className="step-three__step-header">
                    <span className="step-three__header">Pick-up date and time</span>
                    <span>
                        <span>← Back</span>
                        <span>Step 1 of 5</span>
                    </span>
                </div>
                <div className="step-three__reservation-date-picker-container">
                    <input className="reservation-date-picker-container__reservation-date-picker reservation-form__input reservation-form__input--no-margin rounded" type="date" placeholder="Date" onChange={e => handleDataChange(e.target.value)}/>
                    <div className="reservation-date-picker-container__reservation-time-picker">
                        <input className="reservation-form__input reservation-form__input--no-margin rounded" placeholder="Time"/>
                        <span> : </span>
                        <input className="reservation-form__input reservation-form__input--no-margin rounded" placeholder="Time"/>
                    </div>
                    <div className="reservation-date-picker-container__reservation-am-pm-picker">
                        <div className="reservation-am-pm-picker__inner-container">
                            <div className="reservation-date-picker-container__am-container">
                                <input type="radio" id="time-am" name="gender" value="am"/>
                                <label for="time-am">am</label>
                            </div>
                            <div className="reservation-date-picker-container__pm-container">
                                <input type="radio" id="time-pm" name="gender" value="pm"/>
                                <label for="time-pm">pm</label>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="reservation-form__submit-btn reservation-form__submit-btn--no-margin reservation-form__submit-btn--step-three rounded pointer" onClick={() => props.next()}>
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