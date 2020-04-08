import React from "react"
import InputMask from "react-input-mask";

function DateInput(props) {
    return <InputMask className="reservation-date-picker-container__reservation-date-picker reservation-form__input reservation-form__input--no-margin rounded" mask="99/99/9999" onChange={props.onChange} />;
}

export default DateInput;