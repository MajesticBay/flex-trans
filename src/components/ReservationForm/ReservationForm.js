import React from 'react';

import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import StepFive from './StepFive/StepFive';
import StepSix from './StepSix/StepSix';
import StepSeven from './StepSeven/StepSeven';
import StepEight from './StepEight/StepEight';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            // pick: '',
            // drop: ''
        }
    }

    _next = () => {
        let currentStep = this.state.currentStep
        currentStep += 1
        this.setState({
            currentStep: currentStep
        })
    }

    // nextButton() {
    //     let currentStep = this.state.currentStep;
        
    // }

    // test = param => {
    //     console.log (this.state.currentStep);
    // }
    
    render() {
        return (
            <form className="reservation-form rounded">
                <StepOne currentStep={this.state.currentStep} next={this._next} />
                <StepTwo currentStep={this.state.currentStep} next={this._next}/>
                <StepThree currentStep={this.state.currentStep} next={this._next}/>
                <StepFour currentStep={this.state.currentStep} next={this._next}/>
                <StepFive currentStep={this.state.currentStep} next={this._next}/>
                <StepSix currentStep={this.state.currentStep} next={this._next}/>
                <StepSeven currentStep={this.state.currentStep} next={this._next}/>
                <StepEight currentStep={this.state.currentStep} next={this._next}/>
                {/* <button onClick={this._next}>Next</button> */}
            </form>
        );
    }
}

export default ReservationForm;
