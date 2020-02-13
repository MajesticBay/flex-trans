import React from 'react';
import ReservationForm from '../ReservationForm/ReservaitonForm';
import fordtransit from '../../images/ford-transit.png';

function TalkingCar() {
    return (
        <div className="top__floating-container">
            <ReservationForm/>
            <div className="top__car-photo-container">
                <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
            </div>
        </div>
    )
}

export default TalkingCar;