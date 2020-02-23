import React from 'react';

import Top from '../Top/Top';
import TalkingCar from '../TalkingCar/TalkingCar';
import Mission from '../Mission/Mission';

function Reservation(){
  return (
    <div className="reservation">
      <Top/>
      <TalkingCar/>
      <Mission/>
    </div>
  );
}

export default Reservation;