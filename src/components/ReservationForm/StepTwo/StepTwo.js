import React from 'react';

import { reservationFormContext } from '../../../contexts/reservationFormContext';

require('dotenv').config();

function StepTwo(props) {
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { coordinatesPick, setCoordinatesPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    const { coordinatesDrop, setCoordinatesDrop } = React.useContext(reservationFormContext);

    let url = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

    const testing = () => {
        console.log('here!!!!!!!!!!!')
        console.log(addressPick);
    }

    const stepDone = () => {
        
        props.next();
    }

    const showStep = () => {
        if (props.currentStep === 2) {
            return (
                <div className="reservation-form__step-two">
                    <div>
                        <div className="step-two__form rounded">
                            <div className="step-two__locations">
                                <span className="step-two__locations-text--red">A: </span><span className="step-two__locations-text">{addressPick}</span>
                            </div>
                            <div className="step-two__locations">
            <span className="step-two__locations-text--red">B: </span><span className="step-two__locations-text">{addressDrop}</span>
                            </div>
                            <div className="step-two__trip-cost-container">
                                <p className="step-two__info">Wheelchair rampvan <br/> One way trip 43,5 mi</p>
                                <div>
                                    <span className="step-two__dollar-sign">$</span>
                                    <span className="step-two__cost">53.31</span>
                                </div>
                            </div>
                            <div className="reservation-form__submit-btn rounded pointer" onClick={testing}>
                                <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                            </div>
                        </div>
                    </div>
                    <div className="step-one__car-photo-container">
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