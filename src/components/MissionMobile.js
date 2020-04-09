import React from 'react';
import mission from '../images/mission-photo.png'

function MissionMobile() {
    return (
        <div>
            <div>
                <h3>About us</h3>
                <p>Flex-Trans was created with the vision of providing the best quality care and customer service in the non-emergent transportation industry.
The founders of Flex-Trans saw a need for professional, timely, and courteous service and have set the standard for delivering on these promises.  Our professional and qualified staff is trained to be compassionate and understanding to the needs of our clients. From the dispatcher to the drivers you can always expect and deserve 5-star service from Flex-Trans.</p>
                <p>Our mission at Flex-Trans is simple, we aim to provide you with the best services you require.  
From Pickup to Drop-Off as a valued member we want to make your transportation needs as simple and seamless as possible.</p>
                <p>To ensure timely arrival and departure we ask that you make your appointment with us at least 24 hours in advance.  If a last-minute trip arises and you must get somewhere on short notice — we will go out of our way to try and accommodate your travel needs.</p>
            </div>
            <img className="img-fluid" src={ mission } alt="Mission"/>
        </div>
    )
}

export default MissionMobile;