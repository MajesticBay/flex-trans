import React from 'react';

function ReservationForm() {
    return (
        <div className="reservation-form rounded">
            <input className="reservation-form__input mb-16 rounded" placeholder="Pick-up location"/>
            <input className="reservation-form__input mb-45 rounded" placeholder="Drop-off location"/>
            <div className="reservation-form__submit-btn rounded pointer">
                <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                <div className="reservation-form__triangle"></div>
            </div>
        </div>
    );
}

export default ReservationForm;
