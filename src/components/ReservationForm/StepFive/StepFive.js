import React from 'react';

function StepFive(props) {
    if (props.currentStep !== 5) {
        return null
    }
    return (
        <div className="reservation-form__step-one">
            <input className="reservation-form__input rounded" placeholder="Pick-up location"/>
            <input className="reservation-form__input rounded" placeholder="Drop-off location"/>
            <div className="reservation-form__submit-btn rounded pointer" onClick={() => props.next()}>
                <span className="reservation-form__submit-text">Step5</span>
                <div className="reservation-form__triangle"></div>
            </div>
        </div>
    )
}

export default StepFive;