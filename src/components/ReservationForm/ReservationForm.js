import React, { useState } from 'react';

import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import StepThree from './StepThree/StepThree';
import StepFour from './StepFour/StepFour';
import StepFive from './StepFive/StepFive';
import StepSix from './StepSix/StepSix';
import StepSeven from './StepSeven/StepSeven';
import StepEight from './StepEight/StepEight';

function ReservationForm(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentStep: 1,
    //         // pick: '',
    //         // drop: ''
    //     }
    // }
    const [currentStep, setCurrentStep] = useState(1);
    const [addressPick, setAddressPick] = useState("");
    const [coordinatesPick, setCoordinatesPick] = useState({lat: null, lng: null})

    const _next = () => {
        console.log("surrent step before -> ", currentStep);
        setCurrentStep(currentStep + 1)
        console.log("surrent step after -> ", currentStep);
    }

    // nextButton() {
    //     let currentStep = this.state.currentStep;
        
    // }

    // test = param => {
    //     console.log (this.state.currentStep);
    // }
    
    return (
        <form className="reservation-form rounded">
            <StepOne currentStep={currentStep} next={_next}/>
            <StepTwo currentStep={currentStep} next={_next}/>
            <StepThree currentStep={currentStep} next={_next}/>
            <StepFour currentStep={currentStep} next={_next}/>
            <StepFive currentStep={currentStep} next={_next}/>
            <StepSix currentStep={currentStep} next={_next}/>
            <StepSeven currentStep={currentStep} next={_next}/>
            <StepEight currentStep={currentStep} next={_next}/>
            {/* <button onClick={this._next}>Next</button> */}
        </form>
    )
}

export default ReservationForm;
