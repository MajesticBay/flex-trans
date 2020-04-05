import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Mission from './components/Mission/Mission';
import Footer from './components/Footer';
import routes from './routes';

import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar/>
        { routes }
        <Mission/>
        <Footer/>
    </div>
  );
}

export default App;