import React from 'react';

import map from '../../images/map.png';

function WelcomeWithMap() {
    return (
        <div className="home-content__outside-welcome-container">
            <div className="home-content__welcome-container">
                <p className="welcome-container__general-info">Flex-Trans is a family-owned business that offers Non-Emergency Medical Transportation for seniors and disabled passengers. We are located in Bellevue but we offer our services anywhere in the entire Washington State.</p>
                <div className="welcome-content-container">
                    <div className="welcome-content-container__content">
                        <h3 className="welcome-content-container__header">Welcome to Flex-Trans</h3>
                        <p className="welcome-content-container__wheel-chair-transfer-text">Wheel chair transfer:</p>
                        <p className="welcome-content-container__prices">
                            <span className="welcome-content-container__prices--black">One way trip</span> $30 pick up + $2.95/mi <br/>
                            <span className="welcome-content-container__prices--black">Ferry fee</span> $110 extra
                        </p>
                        <p className="welcome-content-container__reduced-prices">Reduced/Flat rates available for long-distance transfers</p>
                    </div>
                    <div className="welcome-content-container__map-container">
                        <img className="img-fluid" src={map} alt="working area map"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeWithMap;