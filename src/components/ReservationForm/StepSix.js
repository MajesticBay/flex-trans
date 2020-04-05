import React from 'react';

function StepSix(props) {
    return (
        <div className="reservation-form__step-six">
            <div className="step-six__inner-container">
                <div className="step-six__step-six-header">
                    <span className="step-six__header-text">You are almost done. Please confirm your order.</span>
                    <div>
                        <span>← Back</span>
                        <span>Step 2 of 5</span>
                    </div>
                </div>
                <div className="step-six__step-six-content">
                    <div className="step-six__step-six-form-container">
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Pick-up date: </span>
                            <span className="step-six-line-container__step-six-line-content">01/30/2020</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Pick-up time: </span>
                            <span className="step-six-line-container__step-six-line-content">4:30 pm</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Trip origin: </span>
                            <span className="step-six-line-container__step-six-line-content">Seattle-Tacoma International Airport (SEA), International Boulevard, Seattle, WA, USA</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Destination: </span>
                            <span className="step-six-line-container__step-six-line-content">Sammamish Landing Park, East Lake Sam- mamish Parkway Northeast, Sammamish, WA, USA</span>
                        </div>
                    </div>
                    <div className="step-six__step-six-form-container">
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Passenger's Name: </span>
                            <span className="step-six-line-container__step-six-line-content">John Johnson</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Phone Number: </span>
                            <span className="step-six-line-container__step-six-line-content">3-498-503-9-45</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Email Address: </span>
                            <span className="step-six-line-container__step-six-line-content">johnson@gmail.com</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Additional Passengers: </span>
                            <span className="step-six-line-container__step-six-line-content">1</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Do you need our wheelchair provided? </span>
                            <span className="step-six-line-container__step-six-line-content">Yes</span>
                        </div>
                        <div className="step-six-form-container__step-six-line-container">
                            <span className="step-six-line-container__step-six-line-title">Do you need a ride back? </span>
                            <span className="step-six-line-container__step-six-line-content">No</span>
                        </div>
                    </div>
                </div>
                <div className="step-six__step-six-comments-container">
                    <p className="step-six-comments-container__title">Comments: </p>
                    <span>You might notice that if you add extra passengers or use of our wheelchair, your quote does not go up. That’s because we offer these services, plus a number of others to whoever needs them free of charge. Go to our About Us page to see what others you can take advantage of at no cost to you.  </span>
                </div>
                <div className="step-six__step-six-footer">
                    <div>
                        <span>Total</span>
                        <span>$0</span>
                    </div>
                    <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
                        <span className="reservation-form__submit-text">Accept Terms & Condition</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepSix;