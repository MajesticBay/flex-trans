import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;