import React from 'react';
// import React, { useState, createContext } from 'react';
import NavBar from './components/NavBar/NavBar';
import Mission from './components/Mission/Mission';
import Footer from './components/Footer/Footer';
import routes from './routes/routes';

import './App.css';

// const DataContext = createContext();

function App() {
  // const [test] = useState(data);
  // const [activeTest, setActiveTest] = useState(test[0]);
  return (
    <div className="App">
      {/* <DataContext.Provider> */}
        <NavBar/>
        { routes }
        <Mission/>
        <Footer/>
      {/* </DataContext.Provider> */}
    </div>
  );
}

export default App;