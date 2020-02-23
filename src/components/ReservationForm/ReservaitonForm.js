import React from 'react';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <form className="reservation-form rounded">
                <div className="reservation-form__step-one">
                    <input className="reservation-form__input rounded" placeholder="Pick-up location"/>
                    <input className="reservation-form__input rounded" placeholder="Drop-off location"/>
                    <div className="reservation-form__submit-btn rounded pointer">
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                        <div className="reservation-form__triangle"></div>
                    </div>
                </div>
                <div className="reservation-form__step-two">
                    <input className="reservation-form__input rounded" placeholder="Pick-up location"/>
                    <input className="reservation-form__input rounded" placeholder="Drop-off location"/>
                    <div className="reservation-form__submit-btn rounded pointer">
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                        <div className="reservation-form__triangle"></div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ReservationForm;
