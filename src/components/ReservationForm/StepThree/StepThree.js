import React from 'react';

function StepThree(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="reservation-form__step-one">
            <input className="reservation-form__input rounded" placeholder="Pick-up location"/>
            <input className="reservation-form__input rounded" placeholder="Drop-off location"/>
            <div className="reservation-form__submit-btn rounded pointer">
                <span className="reservation-form__submit-text">Step3</span>
                <div className="reservation-form__triangle"></div>
            </div>
        </div>
    )
}

export default StepThree;