import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ReservationFormProvider from './contexts/reservationFormContext';
import './css/main.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
                    <ReservationFormProvider>
                        <App/>
                    </ReservationFormProvider>
                </Router>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
