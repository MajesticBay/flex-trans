import React from 'react';
import car from '../images/car-left-shadow.png';

function Top() {
    return (
        <div className="top">
            <img className="top__car-image" src={car} alt="Wheelchair van photo from front"/>
        </div>
    );
}

export default Top;