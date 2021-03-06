import React from 'react';
import { Link } from 'react-router-dom';
import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepSeven(props) {
    const { addressPick, addressDrop } = React.useContext(reservationFormContext);
    // const { addressDrop } = React.useContext(reservationFormContext);
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&language=EN&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="reservation-form__step-seven">
            <div className="step-seven__form rounded">
                    <span className="step-seven__thank-you-text">Thank you for your reservation! Our manager will be in touch with you soon.</span>
                    <Link to="/reserve" onClick={refreshPage}>
                        <div className="reservation-form__submit-btn reservation-form__submit-btn--no-margin rounded pointer">
                            <span className="reservation-form__submit-text">Reserve Another Trip →</span>
                        </div>
                    </Link>
                </div>
            <div className="step-one__car-photo-container">
                <iframe className="google-map-iframe" title="google-map" frameBorder="0" style={{ borderBottomLeftRadius: "6px", borderBottomRightRadius: "6px" }} src={mapUrl}></iframe>
            </div>
        </div>
    )
}

export default StepSeven;