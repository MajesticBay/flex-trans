import React from 'react';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            pick: '',
            drop: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        console.log('name ', name, 'value', value);
    }
    
    render() {
        return (
            <form className="reservation-form rounded">
                <StepOne 
                    handleChange={this.state.currenStep}
                    handleChange={this.handleChange}
                    pick={this.state.pick}
                    drop={this.state.drop}
                />
                <StepTwo 
                    handleChange={this.state.currenStep}
                    handleChange={this.handleChange}
                    pick={this.state.pick}
                    drop={this.state.drop}
                />
                {/* <div className="reservation-form__step-one">
                    <input className="reservation-form__input rounded" name="pick" placeholder="Pick-up location" onChange={this.handleChange}/>
                    <input className="reservation-form__input rounded" name="drop" placeholder="Drop-off location" onChange={this.handleChange}/>
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
                </div> */}
            </form>
        );
    }
}

export default ReservationForm;
