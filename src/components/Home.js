import React from 'react';

import Top from './Top';
import ReservationForm from './ReservationForm/ReservationForm';
import WelcomeWithMap from './WelcomeWithMap';
// import map from '../../images/map.png';

function Home() {
    return (
        <div className="home">
            {/* <Top/> */}
            <ReservationForm/>
            <div className="home__home-content">
                <WelcomeWithMap/>
            </div>
        </div>
    );
}

export default Home;