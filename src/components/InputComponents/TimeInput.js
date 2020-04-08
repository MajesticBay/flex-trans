import React from "react"
import InputMask from "react-input-mask";

function DateInput(props) {
    return <InputMask className="reservation-form__input reservation-form__input--no-margin rounded" mask="99" placeholder="Time" onChange={props.onChange} />;
}

export default DateInput;