import React from 'react';

function StepSix(props) {
    return (
        <div className="reservation-form__step-six">
            <div className="step-six__inner-container">
                <div className="step-six__step-six-header">
                    <span className="step-six__header-text">Reservation form</span>
                    <div>
                        <span>← Back</span>
                        <span>Step 2 of 5</span>
                    </div>
                </div>
                <div className="step-six__step-six-content">
                    <div>
                    
                    </div>
                    <div>
                    
                    </div>
                </div>
                <div className="step-six__step-six-footer">
                    <div>
                        <span>Total</span>
                        <span>$0</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
                        <span className="reservation-form__submit-text">Next Step →</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepSix;