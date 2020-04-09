import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Mission from './components/Mission';
import Footer from './components/Footer';
import routes from './routes';

import bg from './images/bg.jpg';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className="mobile">
          <Home/>
          <Mission/>
          <AboutUs/>
          <ContactUs/>
          <Footer/>
        </div>
        <div className="desktop" style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 60vh',
          width: "100%"
        }}>
          { routes }
          <Mission/>
          <Footer/>
        </div>
    </div>
  );
}

export default App;