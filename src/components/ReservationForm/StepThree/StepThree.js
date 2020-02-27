import React from 'react';

function StepThree(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (
        <div className="reservation-form__step-one">
            <p>Pick-up date and time</p>
            <input className="reservation-form__input rounded" placeholder="Date"/>
            <input className="reservation-form__input rounded" placeholder="Time"/>
            <input className="reservation-form__input rounded" placeholder="Time"/>
            <div className="reservation-form__submit-btn rounded pointer">
                <span className="reservation-form__submit-text">Step3</span>
                <div className="reservation-form__triangle"></div>
            </div>
        </div>
    )
}

export default StepThree;