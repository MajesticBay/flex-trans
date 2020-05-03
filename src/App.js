import React, { useEffect } from 'react';
import NavBar from './components/NavBar';
import Top from './components/Top';
import ReservationFormHome from './components/ReservationFormHome/ReservationFormHome';
import WelcomeWithMap from './components/WelcomeWithMap';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Mission from './components/Mission';
import MissionMobile from './components/MissionMobile'
import Footer from './components/Footer';
import routes from './routes';

import bg from './images/bg.jpg';

function App() {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     });
  // });

  return (
    <div className="App">
        <NavBar/>
        <div className="mobile">
          <Top/>
          <ReservationFormHome/>
          <WelcomeWithMap/>
          <MissionMobile/>
          <AboutUs/>
          <ContactUs/>
        </div>
        <div className="desktop" style={{
          position: 'relative',
          width: "100%",
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 61vh'
        }}>
          { routes }
          <Mission/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;