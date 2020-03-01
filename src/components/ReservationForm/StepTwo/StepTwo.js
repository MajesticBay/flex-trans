import React from 'react';
import map from '../../../images/map.png';

function StepTwo(props) {
    if (props.currentStep !== 2) {
        return null
    }

    return (
        <div className="reservation-form__step-two">
            <div>
                <div className="step-one__form rounded">
                    <p>A: Seattle-Tacoma International Airport (SEA), International Boulevard, Seattle, WA, USA</p>
                    <p>B: Sammamish Landing Park, East Lake Sam- mamish Parkway Northeast, Sammamish, WA, USA</p>
                    <input className="reservation-form__input rounded" name="drop" placeholder="Drop-off location"/>
                    <div className="reservation-form__submit-btn rounded pointer">
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                    </div>
                    <div>
                        <p>Wheelchair rampvan One way trip 43,5 mi</p>
                        <p>$53.31</p>
                    </div>
                </div>
            </div>
            <div className="step-one__car-photo-container">
                <img className="img-fluid" src={map} alt="Ford Transit Wheelchair Vagon"/>
            </div>
        </div>
    )
}

export default StepTwo;