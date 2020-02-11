import React from 'react';
import ReservationForm from '../ReservationForm/ReservaitonForm';
import Mission from '../Mission/Mission';
import aboutUsOne from '../../images/about-us1.png';
import aboutUsTwo from '../../images/about-us2.png';
import aboutUsThree from '../../images/about-us3.png';

function AboutUs() {
  return (
    <div>
      <ReservationForm/>
      <h3>About us</h3>
      <p>Flex-Trans was created with the vision of providing the best quality care and customer service in the non-emergent transportation industry.
The founders of Flex-Trans saw a need for professional, timely, and courteous service and have set the standard for delivering on these promises.  Our professional and qualified staff is trained to be compassionate and understanding to the needs of our clients. From the dispatcher to the drivers you can always expect and deserve 5-star service from Flex-Trans.</p>
      <h3>We provide Services</h3>
      <div className="about-us__services">
        <div>
          <img className="img-fluid" src={aboutUsOne} alt="Transportation to Doctor's appointment"/>
          <p>Transportation to Doctor's appointment</p>
        </div>
        <div>
          <img className="img-fluid" src={aboutUsTwo} alt="Transportation from Hospital to Home"/>
          <p>Transportation from Hospital to Home</p>
        </div>
        <div>
          <img className="img-fluid" src={aboutUsThree} alt="Non-Emergency Wheelchair Transportation"/>
          <p>Non-Emergency Wheelchair Transportation</p>
        </div>
      </div>
      <div>
        <h3>Our fleet</h3>
        <p>We provide transportation on fully equipped and inspected 2015 Ford Transit Wheelchair Van. </p>
      </div>
      <Mission/>
    </div>
  );
}

export default AboutUs;