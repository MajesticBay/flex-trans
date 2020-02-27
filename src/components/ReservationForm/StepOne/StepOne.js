import React from 'react';
import fordtransit from '../../images/car-left-shadow.png';

function StepOne(props) {
    if (props.currentStep !== 1) {
        return null
    }
    return (
        <div className="reservation-form__step-one">
            <div>
                <div className="step-one__form rounded">
                    <input className="reservation-form__input rounded" name="pick" placeholder="Pick-up location" onChange={props.handleChange}/>
                    <input className="reservation-form__input rounded" name="drop" placeholder="Drop-off location"/>
                    <div className="reservation-form__submit-btn rounded pointer">
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                        <div className="reservation-form__triangle"></div>
                    </div>
                </div>
            </div>
            <div className="step-one__car-photo-container">
                <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
            </div>
        </div>
    )
}

export default StepOne;