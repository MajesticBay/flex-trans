import React from 'react';

import map from '../../../images/map.png';

function StepThree(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="reservation-form__step-three">
            <div>
                <p>Pick-up date and time</p>
                <div>
                    <span>Back</span>
                    <span>Step 1</span>
                    <span>of 5</span>
                </div>
                <div className="reservation-form__reservation-date-picker-container">
                    <div className="reservation-date-picker-container__reservation-date-picker">
                        <input className="reservation-form__input rounded" placeholder="Date"/>
                        <div className="reservation-date-picker-container__reservation-time-picker">
                            <input className="reservation-form__input rounded" placeholder="Time"/>
                            <input className="reservation-form__input rounded" placeholder="Time"/>
                        </div>
                    </div>
                    <div>
                        <label for="time-am">am</label>
                        <input type="radio" id="time-am" name="gender" value="am"/>
                        <label for="time-pm">pm</label>
                        <input type="radio" id="time-pm" name="gender" value="pm"/>
                    </div>
                </div>
                <div className="reservation-form__submit-btn rounded pointer" onClick={props.next()}>
                    <span className="reservation-form__submit-text">Step3</span>
                    <div className="reservation-form__triangle"></div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default StepThree;