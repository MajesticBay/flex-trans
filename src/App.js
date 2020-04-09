import React from 'react';
import NavBar from './components/NavBar';
import ReservationForm from './components/ReservationForm/ReservationForm';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Mission from './components/Mission';
import MissionMobile from './components/MissionMobile'
import Footer from './components/Footer';
import routes from './routes';

import bg from './images/bg.jpg';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className="mobile">
          <ReservationForm/>
          <Home/>
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
          backgroundSize: '100% 60vh'
        }}>
          <ReservationForm/>
          { routes }
          <Mission/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;