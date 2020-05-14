import React from 'react';
import ReservationFormHome from './ReservationFormHome/ReservationFormHome';
import WelcomeWithMap from './WelcomeWithMap';

import bg from '../images/bg-with-road.jpg';

function Home(props) {
    return (
        <div className="home" style={{
            position: 'relative',
            width: "100%",
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center -5.2rem',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%'
        }}>
            <ReservationFormHome/>
            <div className="home__home-content">
                <WelcomeWithMap {...props}/>
            </div>
        </div>
    );
}

export default Home;