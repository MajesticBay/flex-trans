import React from 'react';
import ReservationForm from './ReservationForm/ReservationForm';
import WelcomeWithMap from './WelcomeWithMap';

function Home() {
    return (
        <div className="home">
            <ReservationForm/>
            <div className="home__home-content">
                <WelcomeWithMap/>
        
            </div>
        </div>
    );
}

export default Home;