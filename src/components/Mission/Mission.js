import React from 'react';

import missionPhoto from '../../images/mission-photo.png';

function Mission() {
    return (
        <div className="home-content__outside-mission-container">
            <div className="home-content__mission-container">
                <div className="mission-container__mission-photo">
                    <img className="img-fluid" src={missionPhoto} alt="our mission"/>
                </div>
                <div className="mission-container__mission-content">
                    <p className="mission-content__text">Our mission at Flex-Trans is simple, we aim to provide you with the best services you require.  
                        From Pickup to Drop-Off as a valued member we want to make your transportation needs as simple and seamless as possible.</p>
                        <br/>
                    <p className="mission-content__text">To ensure timely arrival and departure we ask that you make your appointment with us at least 24 hours in advance.  If a last-minute trip arises and you must get somewhere on short notice — we will go out of our way to try and accommodate your travel needs.</p>
                </div>
            </div>
        </div>
    );
}

export default Mission;