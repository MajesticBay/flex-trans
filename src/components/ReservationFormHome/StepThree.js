import React from 'react';

import DateInput from '../InputComponents/DateInput';
import TimeInput from '../InputComponents/TimeInput';

import { reservationFormContext } from '../../contexts/reservationFormContext';

function StepThree(props) {
    const { addressPick } = React.useContext(reservationFormContext);
    const { addressDrop } = React.useContext(reservationFormContext);

    const { date, setDate } = React.useContext(reservationFormContext);
    const { time, setTime } = React.useContext(reservationFormContext);
    
    let mapUrl = `https://www.google.com/maps/embed/v1/directions?origin=${addressPick}&destination=${addressDrop}&key=AIzaSyA97rzK2Y0x79nYrp4ozU5NzB7acY8MASE`;

    const handleDateChange = (e) => {
        setDate(e.target.value);
        // console.log('date => ', date);
    }

    const handleHoursChange = (e) => {
        setTime({ ...time, hours: e.target.value });
        // console.log('time => ', time);
    }

    const handleMinutesChange = (e) => {
        setTime({ ...time, minutes: e.target.value });
        // console.log('time => ', time);
    }

    const handleRadioChange = (e) => {
        setTime ({ ...time, ampm: e.target.value });
        // console.log('time => ', time);
    }

    const goToStepFour = () => {
        let timeStr = time.hours + ':' + time.minutes + ' ' + time.ampm;
        setTime ({ ...time, fullTime: timeStr });
        if (!date || !time) {
            alert ("Fill out all fields!");
        } else {
            props.next();
        }
    }

    return (
        <div className="reservation-form__step-three">
            <div className="step-three__step-three-container">
                <div className="step-three__step-header">
                    <span className="step-three__header">Pick-up date and time</span>
                    {/* <span>
                        <span>← Back</span>
                        <span>Step 2 of 5</span>
                    </span> */}
                </div>
                <div className="step-three__reservation-date-picker-container">
                    <input className="reservation-form__input reservation-form__input--no-margin rounded" type="date" onChange={e => handleDateChange(e)}/>
                    {/* <DateInput onChange={e => handleDateChange(e)}/> */}
                    <div className="reservation-date-picker-container__reservation-time-picker">
                        <select className="reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleHoursChange(e)}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                        <span> : </span>
                        <select className="reservation-form__input reservation-form__input--no-margin rounded" onChange={e => handleMinutesChange(e)}>
                            <option>00</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                        </select>
                        {/* <TimeInput onChange={e => handleHoursChange(e)}/>
                        <span> : </span>
                        <TimeInput onChange={e => handleMinutesChange(e)}/> */}
                    </div>
                    <div className="reservation-date-picker-container__reservation-am-pm-picker">
                        <div className="reservation-am-pm-picker__inner-container">
                            <div className="reservation-date-picker-container__am-container">
                                <input type="radio" id="time-am" name="gender" value="am" onChange={e => handleRadioChange(e)}/>
                                <label for="time-am">am</label>
                            </div>
                            <div className="reservation-date-picker-container__pm-container">
                                <input type="radio" id="time-pm" name="gender" value="pm" onChange={e => handleRadioChange(e)}/>
                                <label for="time-pm">pm</label>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="reservation-form__submit-btn reservation-form__submit-btn--no-margin reservation-form__submit-btn--step-three rounded pointer" onClick={() => goToStepFour()}>
                        <span className="reservation-form__submit-text">Next Step →</span>
                    </div>
                </div>  
                
            </div>
            <div>
                <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%", borderTopRightRadius: "6px", borderBottomRightRadius: "6px" }} src={mapUrl}>
                </iframe>
            </div>
        </div>
    )
}

export default StepThree;