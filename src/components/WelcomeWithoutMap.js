import React from 'react';

import car from '../images/ford-transit-right.png';

function WelcomeWithoutMap() {
    return (
        <div className="welcome-without-map__container rounded-desktop">
            <div className="welcome-without-map__content">
                <h3 className="welcome-without-map__header">Next Day Pick Up</h3>
                <p className="welcome-without-map__text">You may set up a ride at least 24 hours in advance. If you need to be picked up sooner, please call us at 425-260-2121. We do make exceptions.</p>
            </div>
            <div className="welcome-without-map__car-container">
                <img className="img-fluid" src={car}/>
            </div>
        </div>
    )
}

export default WelcomeWithoutMap;