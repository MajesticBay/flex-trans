import React from 'react';
import GoogleMap from 'google-distance-matrix';
import { reservationFormContext } from '../../../contexts/reservationFormContext';

require('dotenv').config();

function StepTwo(props) {
    GoogleMap.key('AIzaSyA1_FjAoDlmqOnFqr8ckuw9Ifw9T8oYgWU');
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { coordinatesPick, setCoordinatesPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    const { coordinatesDrop, setCoordinatesDrop } = React.useContext(reservationFormContext);

    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&key=AIzaSyA1_FjAoDlmqOnFqr8ckuw9Ifw9T8oYgWU`;

    // const testing = () => {
    //     console.log('here!!!!!!!!!!!')
    //     console.log(addressPick);
    // }

    getDistance = () => {
        GoogleMap.matrix(addressPick, addressDrop, function (err, distances) {
            if (err) {
                return console.log(err);
            }
            if(!distances) {
                return console.log('no distances');
            }
            if (distances.status == 'OK') {
                if(distances.rows[0].elements[0])  {
                    var distance = distances.rows[0].elements[0].duration['text'];
                    this.setState({
                        foundDistance: true, 
                        distanceText: distance
    
                    }); 
                }
            } 
        });
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
                            <div className="reservation-form__submit-btn rounded pointer" onClick={() => props.next()}>
                                <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                            </div>
                        </div>
                    </div>
                    <div className="step-one__car-photo-container">
                        <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%"}} src={mapUrl}>
        
                        </iframe>
                    </div>
                </div>
            )
        } else return (<div><span>StepTwo null</span></div>);
    }

    return(showStep());
}

export default StepTwo;