import React, { useEffect } from 'react';
import GoogleMap from 'google-distance-matrix';
import axios from 'axios';
import { reservationFormContext } from '../../../contexts/reservationFormContext';

require('dotenv').config();

function StepTwo(props) {
    GoogleMap.key('AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE');
    GoogleMap.units('imperial');
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { coordinatesPick, setCoordinatesPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    const { coordinatesDrop, setCoordinatesDrop } = React.useContext(reservationFormContext);
    const { distance, setDistance } = React.useContext(reservationFormContext);
    const { price, setPrice } = React.useContext(reservationFormContext);

    useEffect(() => {
        let origins = [addressPick];
        let destinations = [addressDrop];
        axios.post('/distance', { origins, destinations })
        // axios.get('https://beat-cors.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=Renton&mode=driving&units=imperial&language=en&avoid=&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE')
            .then(res => {
                // console.log(res.data[0].elements[0].distance.text);
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

    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    const testing = () => {
        console.log('here!!!!!!!!!!!')
        getDistance();
        console.log(addressPick);
    }

    const getDistance = () => {
        let origins = ["Seattle"];
        let destinations = ["Renton"];
        axios.post('/distance', { origins, destinations })
        // axios.get('https://beat-cors.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=Renton&mode=driving&units=imperial&language=en&avoid=&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE')
            .then(res => {
                // console.log(res.data[0].elements[0].distance.text);
                let distanceStrArr = res.data[0].elements[0].distance.text.split(' ');
                let distanceStr = distanceStrArr[0]
                console.log(distanceStr);
                setDistance(distanceStr);
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
                                <p className="step-two__info">Wheelchair rampvan <br/> One way trip {distance} mi</p>
                                <div>
                                    <span className="step-two__dollar-sign">$</span>
                                    <span className="step-two__cost">{price}</span>
                                </div>
                            </div>
                            <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
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