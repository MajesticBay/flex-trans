import React from 'react';

function StepTwo(props) {
    if (props.currentStep !== 2) {
        return null
    }
    return (
        <div className="reservation-form__step-one">
            <p>A: Seattle-Tacoma International Airport (SEA), International Boulevard, Seattle, WA, USA</p>
            <p>B: Sammamish Landing Park, East Lake Sam- mamish Parkway Northeast, Sammamish, WA, USA</p>
            <div>
                <p>Wheelchair rampvan <br/> One way trip 43,5 mi</p>
                <p>$53.31</p>
            </div>
            <div className="reservation-form__submit-btn rounded pointer">
                <span className="reservation-form__submit-text">Get instant quote for your trip Step2</span>
                <div className="reservation-form__triangle"></div>
            </div>
        </div>
    )
}

export default StepTwo;