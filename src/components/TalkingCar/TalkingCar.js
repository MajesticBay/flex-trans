import React from 'react';
import ReservationForm from '../ReservationForm/ReservationForm';
import fordtransit from '../../images/car-left-shadow.png';

function TalkingCar() {
    return (
        <div className="top__floating-container">
            <div>
                <ReservationForm/>
            </div>
            <div className="top__car-photo-container">
                <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
            </div>
        </div>
    )
}

export default TalkingCar;