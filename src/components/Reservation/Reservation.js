import React from 'react';

import Top from '../Top/Top';
import TalkingCar from '../TalkingCar/TalkingCar';
import Mission from '../Mission/Mission';

class Reservation extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="reservation">
        <Top/>
        <TalkingCar/>
        <Mission/>
      </div>
    );
  }
}

export default Reservation;