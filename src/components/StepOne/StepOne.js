import React from 'react';

function StepOne() {
    return (
        <div className="reservation-form__step-one">
            <input className="reservation-form__input rounded" placeholder="Pick-up location"/>
            <input className="reservation-form__input rounded" placeholder="Drop-off location"/>
            <div className="reservation-form__submit-btn rounded pointer">
                <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                <div className="reservation-form__triangle"></div>
            </div>
        </div>
    )
}

export default StepOne;