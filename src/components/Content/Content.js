import React from 'react';


function Content() {
    return (
        <div className="content">
            <div className="top">
                <div className="top__floating-wrapper">
                    <ReservationForm/>
                    <div className="top__car-photo-wrapper">
                        <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
                    </div>
                </div>
            </div>
            <div>
                <p>Flex-Trans is a family-owned business that offers Non-Emergency Medical Transportation for seniors and disabled passengers. We are located in Bellevue but we offer our services anywhere in the entire Washington State.</p>
            </div>
        </div>
    );
}

export default Content;
