import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ReservationForm from '../ReservationForm/ReservaitonForm';
import fordtransit from '../../images/ford-transit-home-page.png';
import map from '../../images/map.png';
import missionPhoto from '../../images/mission-photo.png';

function Home() {
    return (
        <div>
            <NavBar />
            <div className="home">
                <div className="top">
                </div>
                <div className="top__floating-container">
                    <ReservationForm/>
                    <div className="top__car-photo-container">
                        <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
                    </div>
                </div>
                <div className="home__home-content">
                    <div className="home-content__outside-welcome-container">
                        <div className="home-content__welcome-container">
                            <p className="welcome-container__general-info">Flex-Trans is a family-owned business that offers Non-Emergency Medical Transportation for seniors and disabled passengers. We are located in Bellevue but we offer our services anywhere in the entire Washington State.</p>
                            <div className="welcome-content-container">
                                <div className="welcome-content-container__content">
                                    <h3 className="welcome-content-container__header">Welcome to Flex-Trans</h3>
                                    <p className="welcome-content-container__wheel-chair-transfer-text">Wheel chair transfer:</p>
                                    <p className="welcome-content-container__prices">
                                        $30 pick up one way, + $2.95/mi <br/>
                                        Ferry fee $110 extra
                                    </p>
                                    <p>Reduced/Flat rates available for long-distance transfers</p>
                                </div>
                                <div className="welcome-content-container__map-container">
                                    <img className="img-fluid" src={map} alt="working area map"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-content__outside-mission-container">
                        <div className="home-content__mission-container">
                            <div className="mission-container__mission-photo">
                                <img className="img-fluid" src={missionPhoto} alt="our mission"/>
                            </div>
                            <div className="mission-container__mission-content">
                                <p className="mission-content__text">Our mission at Flex-Trans is simple, we aim to provide you with the best services you require.  
                                    From Pickup to Drop-Off as a valued member we want to make your transportation needs as simple and seamless as possible.</p>
                                <p className="mission-content__text">To ensure timely arrival and departure we ask that you make your appointment with us at least 24 hours in advance.  If a last-minute trip arises and you must get somewhere on short notice — we will go out of our way to try and accommodate your travel needs.</p>
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