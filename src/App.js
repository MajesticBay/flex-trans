import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import routes from './routes/routes';
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