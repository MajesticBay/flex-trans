import React from 'react';
import ReservationForm from '../ReservationForm/ReservaitonForm';
import fordtransit from '../../images/ford-transit-home-page.png';

function Content() {
    return (
        <div className="content">
            <div className="background">
                <div className="content__floating-wrapper">
                    <ReservationForm/>
                    <div className="content__car-photo-wrapper">
                        <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
