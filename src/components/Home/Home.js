import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ReservationForm from '../ReservationForm/ReservaitonForm';
import fordtransit from '../../images/ford-transit-home-page.png';
import map from '../../images/map.png';

function Home() {
    return (
        <div>
            <NavBar />
            <div className="home">
                <div className="top">
                </div>
                <div className="top__floating-wrapper">
                    <ReservationForm/>
                    <div className="top__car-photo-wrapper">
                        <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
                    </div>
                </div>
                <div className="home__home-content">
                    <div className="home-content__welcome-wrapper">
                        <p>Flex-Trans is a family-owned business that offers Non-Emergency Medical Transportation for seniors and disabled passengers. We are located in Bellevue but we offer our services anywhere in the entire Washington State.</p>
                        <div className="welcome-wrapper">
                            <div className="welcome-wrapper__content">
                                <h3>Welcome to Flex-Trans</h3>
                                <p>Wheel chair transfer:</p>
                                <p>
                                    $30 pick up one way, + $2.95/mi
                                    Ferry fee $110 extra
                                </p>
                                <p>Reduced/Flat rates available for long-distance transfers</p>
                            </div>
                            <div className="welcome-wrapper__map-container">
                                <img src={map} alt="working area map"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;