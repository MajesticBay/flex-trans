import React from 'react';

import Top from './Top';
import ReservationForm from './ReservationForm/ReservationForm';

function Reservation(){
  return (
    <div className="reservation">
      <Top/>
      <ReservationForm/>
    </div>
  );
}

export default Reservation;