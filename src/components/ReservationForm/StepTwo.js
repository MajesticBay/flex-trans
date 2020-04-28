import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { reservationFormContext } from '../../contexts/reservationFormContext';

import fordtransit from '../../images/car-left-shadow.png';

function StepOne(props) {
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { setCoordinatesPick } = React.useContext(reservationFormContext);
    const { buildingInfoPick, setBuildingInfoPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    const { setCoordinatesDrop } = React.useContext(reservationFormContext);
    const { buildingInfoDrop, setBuildingInfoDrop } = React.useContext(reservationFormContext);
    const { date, setDate } = React.useContext(reservationFormContext);
    const { time, setTime } = React.useContext(reservationFormContext);

    const handleSelectPick = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddressPick(value);
        setCoordinatesPick(latLng);
    };

    const handleBuildingInfoPick = (e) => {
        setBuildingInfoPick(e.target.value);
    }

    const handleSelectDrop = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddressDrop(value);
        setCoordinatesDrop(latLng);
    };

    const handleBuildingInfoDrop = (e) => {
        setBuildingInfoDrop(e.target.value);
    }

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
        setTime({ ...time, ampm: e.target.value });
        // console.log('time => ', time);
    }

    const nextStep = () => {
        if (!date || !time) {
            alert("Fill out all fields!");
        } else {
            props.next();
        }
    }

    return (
        <div className="reservation-form__step-one">
            <div className="step-one__form rounded-desktop">
                <div className="new-form-step-three__container">
                    <span className="step-three__header step-three__header-pb-2">Reservation Form</span>
                    <div className="step-four__address-container">
                        <p className="step-four__address-input-header reservation-form__input-label">Pick-up location</p>
                        <PlacesAutocomplete value={addressPick} onChange={setAddressPick} onSelect={handleSelectPick}>
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div style={{ gridArea: "address", position: "relative", display: "flex", flexDirection: "column" }}>
                                    <input
                                        className="reservation-form__input rounded"
                                        {...getInputProps({ placeholder: "Pick-up location" })} />

                                    <div style={{
                                        position: "absolute",
                                        zIndex: "2",
                                        top: "5.2rem",
                                        width: "100%",
                                        fontSize: "1.6rem",
                                        cursor: "pointer"
                                    }}>
                                        {loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><span style={{ padding: "1.6rem 2rem" }}>...loading</span></div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {
                                                width: "100%",
                                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                                color: suggestion.active ? "#fff" : "#000",
                                                padding: "1.6rem 2rem"
                                            };

                                            return (
                                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                        <input className="step-four__apt-input reservation-form__input rounded" placeholder="Apt./Ste" onChange={e => handleBuildingInfoPick(e)} />
                    </div>
                    <div className="step-four__address-container">
                        <p className="step-four__address-input-header reservation-form__input-label">Drop-off location</p>
                        <PlacesAutocomplete value={addressDrop} onChange={setAddressDrop} onSelect={handleSelectDrop}>
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                <div style={{ gridArea: "address", position: "relative", display: "flex", flexDirection: "column" }}>

                                    <input
                                        className="reservation-form__input rounded"
                                        {...getInputProps({ placeholder: "Drop-off location" })} />

                                    <div style={{
                                        position: "absolute",
                                        top: "5.2rem",
                                        width: "100%",
                                        fontSize: "1.6rem",
                                        cursor: "pointer"
                                    }}>
                                        {loading ? <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><span style={{ padding: "1.6rem 2rem" }}>...loading</span></div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {
                                                width: "100%",
                                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                                                color: suggestion.active ? "#fff" : "#000",
                                                padding: "1.6rem 2rem"
                                            };

                                            return (
                                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                        <input className="step-four__apt-input reservation-form__input rounded" placeholder="Apt./Ste" onChange={e => handleBuildingInfoDrop(e)} />
                    </div>
                </div>

                <div className="reservation-form__submit-btn rounded pointer" onClick={() => nextStep()}>
                    <span className="reservation-form__submit-text">Reserve a trip</span>
                </div>
            </div>
            <div className="step-one__car-photo-container">
                <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon" />
            </div>
        </div>
    )
}

export default StepOne;