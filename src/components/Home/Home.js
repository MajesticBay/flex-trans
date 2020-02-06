import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ReservationForm from '../ReservationForm/ReservaitonForm';
import fordtransit from '../../images/ford-transit-home-page.png';

function Home() {
    return (
        <div>
            <NavBar />
            <div className="home">
                <div className="top">
                    <div className="top__floating-wrapper">
                        <ReservationForm/>
                        <div className="top__car-photo-wrapper">
                            <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
                        </div>
                    </div>
                </div>
                <div className="home__content">
                    <p>Flex-Trans is a family-owned business that offers Non-Emergency Medical Transportation for seniors and disabled passengers. We are located in Bellevue but we offer our services anywhere in the entire Washington State.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;