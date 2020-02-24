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

    test = param => {
        console.log (this.state.currentStep);
    }
    
    render() {
        return (
            <form className="reservation-form rounded">
                <StepOne 
                    currenStep={this.state.currentStep}
                    handleChange={this.handleChange}
                    pick={this.state.pick}
                    drop={this.state.drop}
                />
                <StepTwo 
                    handleChange={this.state.currentStep}
                    handleChange={this.handleChange}
                    pick={this.state.pick}
                    drop={this.state.drop}
                />
            </form>
        );
    }
}

export default ReservationForm;
