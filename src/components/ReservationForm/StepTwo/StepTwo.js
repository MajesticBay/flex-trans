import React from 'react';
import map from '../../../images/map.png';

function StepTwo(props) {
    if (props.currentStep !== 2) {
        return null
    }

    return (
        <div className="reservation-form__step-two">
            <div>
                <div className="step-two__form rounded">
                    <div className="step-two__locations">
                        <span className="step-two__locations-text--red">A: </span><span className="step-two__locations-text">Seattle-Tacoma International Airport (SEA), International Boulevard, Seattle, WA, USA</span>
                    </div>
                    <div className="step-two__locations">
                        <span className="step-two__locations-text--red">B: </span><span className="step-two__locations-text">Sammamish Landing Park, East Lake Sam- mamish Parkway Northeast, Sammamish, WA, USA</span>
                    </div>
                    <div className="step-two__trip-cost-container">
                        <p className="step-two__info">Wheelchair rampvan <br/> One way trip 43,5 mi</p>
                        <div>
                            <span className="step-two__dollar-sign">$</span>
                            <span className="step-two__cost">53.31</span>
                        </div>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer">
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
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