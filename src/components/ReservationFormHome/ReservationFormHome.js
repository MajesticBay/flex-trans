import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';

function ReservationForm(props) {
    const [currentStep, setCurrentStep] = useState(1);

    const _next = () => {
        setCurrentStep(currentStep + 1);
    }

    const _previous = () => {
        setCurrentStep(currentStep - 1)
    }

    const switchForms = () => {
        switch (currentStep) {
            case 1:
                return <StepOne currentStep={currentStep} next={_next}/>
            case 2:
                return <StepTwo currentStep={currentStep} next={_next}/>
            case 3:
                return <StepThree currentStep={currentStep} next={_next} previous={_previous}/>
            case 4:
                return <StepFour currentStep={currentStep} next={_next} previous={_previous}/>
            case 5:
                return <StepFive currentStep={currentStep} next={_next} previous={_previous}/>
            case 6:
                return <StepSix currentStep={currentStep} next={_next} previous={_previous}/>
            case 7:
                return <StepSeven currentStep={currentStep} next={_next}/>
            default:
                return <StepOne currentStep={currentStep} next={_next}/>
            }
    }
    
    return (
        <form className="reservation-form rounded">
            {switchForms()}
        </form>
    )
}

export default ReservationForm;
