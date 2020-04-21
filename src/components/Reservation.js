import React from 'react';
import ReservationForm from './ReservationForm/ReservationForm';
import WelcomeWithoutMap from './WelcomeWithoutMap';

function Reservation(){
  return (
    <div className="reservation">
      <ReservationForm/>
      <WelcomeWithoutMap/>
    </div>
  );
}

export default Reservation;