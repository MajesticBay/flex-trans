import React from 'react';
// import map from '../../../images/map.png';

require('dotenv').config();

function StepTwo(props) {
    let url = `https://www.google.com/maps/embed/v1/directions?origin=40.7127837,-74.0059413&destination=42.3600825,-71.05888&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
    // if (props.currentStep !=== 2) {
    //     return null
    // }

    const stepDone = () => {
        localStorage.clear();
        props.next();
    }

    const showStep = () => {
        if (props.currentStep === 2) {
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
                            <div className="reservation-form__submit-btn rounded pointer" onClick={stepDone}>
                                <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                            </div>
                        </div>
                    </div>
                    <div className="step-one__car-photo-container">
                        {/* <img className="img-fluid" src={map} alt="Ford Transit Wheelchair Vagon"/> */}
                        <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%"}} src={url}>
        
                        </iframe>
                    </div>
                </div>
            )
        } else return (<div><span>StepTwo null</span></div>);
    }

    return(showStep());
}

export default StepTwo;