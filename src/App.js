import React from 'react';
import NavBar from './components/NavBar';
import Mission from './components/Mission';
import Footer from './components/Footer';
import routes from './routes';

import bg from './images/bg.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div style={{
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