import React from 'react';
import GoogleMap from 'google-distance-matrix';
import axios from 'axios'
import { reservationFormContext } from '../../../contexts/reservationFormContext';

require('dotenv').config();

function StepTwo(props) {
    GoogleMap.key('AIzaSyA1_FjAoDlmqOnFqr8ckuw9Ifw9T8oYgWU');
    GoogleMap.units('imperial');
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { coordinatesPick, setCoordinatesPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    const { coordinatesDrop, setCoordinatesDrop } = React.useContext(reservationFormContext);
    const { distance, setDistance } = React.useContext(reservationFormContext);

    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&key=AIzaSyA1_FjAoDlmqOnFqr8ckuw9Ifw9T8oYgWU`;

    const testing = () => {
        console.log('here!!!!!!!!!!!')
        getDistance();
        console.log(addressPick);
    }

    // const getDistance = () => {
    //     let var1 = "Seattle";
    //     let var2 = "Renton";
    //     GoogleMap.matrix([addressPick], [addressDrop], function (err, distances) {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         if(!distances) {
    //             return console.log('no distances');
    //         }
    //         if (distances.status == 'OK') {
    //             if(distances.rows[0].elements[0])  {
    //                 var localDistance = distances.rows[0].elements[0].distance['text'];
    //                 console.log(localDistance)
    //             }
    //         } 
    //     });
    // }

    const getDistance = () => {
        let seattle = "Seattle";
        let renton = "Renton";
        axios.get('https://beat-cors.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=Renton&mode=driving&units=imperial&language=en&avoid=&key=AIzaSyA1_FjAoDlmqOnFqr8ckuw9Ifw9T8oYgWU')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
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
                            {/* <div className="reservation-form__submit-btn rounded pointer" onClick={() => props.next()}>
                                <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                            </div> */}
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