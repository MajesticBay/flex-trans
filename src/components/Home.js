import React from 'react';
import ReservationFormHome from './ReservationForm/ReservationFormHome';
import WelcomeWithMap from './WelcomeWithMap';

function Home() {
    return (
        <div className="home">
            <ReservationFormHome/>
            <div className="home__home-content">
                <WelcomeWithMap/>
            </div>
        </div>
    );
}

export default Home;