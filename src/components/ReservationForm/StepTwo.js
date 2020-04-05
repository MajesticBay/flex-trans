import React, { useEffect } from 'react';
import GoogleMap from 'google-distance-matrix';
import axios from 'axios';
import { reservationFormContext } from '../../contexts/reservationFormContext';

require('dotenv').config();

function StepTwo(props) {
    GoogleMap.key('AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE');
    GoogleMap.units('imperial');
    const { addressPick} = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);
    const { distance, setDistance } = React.useContext(reservationFormContext);
    const { price, setPrice } = React.useContext(reservationFormContext);

    useEffect(() => {
        let origins = [addressPick];
        let destinations = [addressDrop];
        axios.post('/distance', { origins, destinations })
            .then(res => {
                let distanceStrArr = res.data[0].elements[0].distance.text.split(' ');
                let distanceStr = distanceStrArr[0]
                console.log(distanceStr);
                let priceRes = 30 + (2.95 * parseInt(distanceStr));
                setPrice(priceRes);
                setDistance(distanceStr);
                console.log (distance);
            })
            .catch(err => {
                console.log(err);
            })
        
    }, []);

    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

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
                                <p className="step-two__info">Wheelchair rampvan <br/> One way trip {distance} mi</p>
                                <div>
                                    <span className="step-two__dollar-sign">$</span>
                                    <span className="step-two__cost">{price}</span>
                                </div>
                            </div>
                            <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
                                <span className="reservation-form__submit-text">Make Reservation →</span>
                            </div>
                        </div>
                    </div>
                    <div className="step-two__google-map-container">
                        <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%", borderTopRightRadius: "6px", borderBottomRightRadius: "6px" }} src={mapUrl}></iframe>
                        {/* <span>Distance {distance}</span> */}
                    </div>
                </div>
            )
        } else return (<div><span>StepTwo null</span></div>);
    }

    return(showStep());
}

export default StepTwo;