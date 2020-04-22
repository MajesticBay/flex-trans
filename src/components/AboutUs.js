import React from 'react';
import aboutUsOne from '../images/about-us1.png';
import aboutUsTwo from '../images/about-us2.png';
import aboutUsThree from '../images/about-us3.png';
import fordtransitright from '../images/ford-transit-right.png';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-us__content-container">
        <div className="about-us__description-container">
          <h3 className="about-us__header">About us</h3>
          <p className="about-us__base-text">Flex-Trans was created with the vision of providing the best quality care and customer service in the non-emergent transportation industry.
    The founders of Flex-Trans saw a need for professional, timely, and courteous service and have set the standard for delivering on these promises.  Our professional and qualified staff is trained to be compassionate and understanding to the needs of our clients. From the dispatcher to the drivers you can always expect and deserve 5-star service from Flex-Trans.</p>
        </div>
        <div className="about-us__services">
          <h3 className="about-us__header">We provide Services</h3>
          <div className="about-us-services__services-container">
            <div className="services-container__item">
              <img className="img-fluid rounded-desktop" src={aboutUsOne} alt="Transportation to Doctor's appointment"/>
              <p className="services-container__service-header">Transportation to<br/>Doctor's appointment</p>
            </div>
            <div className="services-container__item">
              <img className="img-fluid rounded-desktop" src={aboutUsTwo} alt="Transportation from Hospital to Home"/>
              <p className="services-container__service-header">Transportation from<br/>Hospital to Home</p>
            </div>
            <div className="services-container__item">
              <img className="img-fluid rounded-desktop" src={aboutUsThree} alt="Non-Emergency Wheelchair Transportation"/>
              <p className="services-container__service-header">Non-Emergency<br/>Wheelchair Transportation</p>
            </div>
          </div>
        </div>
        <div className="about-us__fleet">
          <div className="about-us-fleet__description">
            <h3 className="about-us__header">Our fleet</h3>
            <p className="about-us__base-text about-us-fleet__baset-text">We provide transportation on fully equipped and inspected wheelchair van. </p>
          </div>
          <div className="about-us-fleet_car-container rounded-desktop">
            <img className="about-us-fleet__car-img img-fluid" src={fordtransitright} alt="Ford Transit"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;