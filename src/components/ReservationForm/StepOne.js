import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { reservationFormContext } from '../../contexts/reservationFormContext';

import fordtransit from '../../images/car-left.png';

function StepOne(props) {
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { setCoordinatesPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    const { setCoordinatesDrop } = React.useContext(reservationFormContext);

    const handleSelectPick = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddressPick(value);
        setCoordinatesPick(latLng);
    };

    const handleSelectDrop = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddressDrop(value);
        setCoordinatesDrop(latLng);
    };

    const nextStep = () => {
        if (!addressPick || !addressDrop) {
            alert ("Fill out all fields!");
        } else {
            props.next();
        }
    }

    return (
        <div className="reservation-form__step-one">
                <div className="step-one__form rounded-desktop">
                    <PlacesAutocomplete value={addressPick} onChange={setAddressPick} onSelect={handleSelectPick}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>

                            <input
                                className="reservation-form__input rounded" 
                                {...getInputProps({ placeholder: "Pick-up location" })} />

                            <div style = {{ 
                                        position: "absolute",
                                        zIndex: "2",
                                        top: "5.2rem",
                                        width: "100%",
                                        fontSize: "1.6rem",
                                        cursor: "pointer"
                                    }}>
                                {loading ? <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><span style={{padding: "1.6rem 2rem"}}>...loading</span></div> : null}

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
                    <PlacesAutocomplete value={addressDrop} onChange={setAddressDrop} onSelect={handleSelectDrop}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div style={{position: "relative", display: "flex", flexDirection: "column"}}>

                            <input
                                className="reservation-form__input rounded"
                                {...getInputProps({ placeholder: "Drop-off location" })} />

                            <div style = {{ 
                                        position: "absolute",
                                        top: "5.2rem",
                                        width: "100%",
                                        fontSize: "1.6rem",
                                        cursor: "pointer"
                                    }}>
                                {loading ? <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><span style={{padding: "1.6rem 2rem"}}>...loading</span></div> : null}

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
                    <div className="reservation-form__submit-btn rounded pointer" onClick={() => nextStep()}>
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                        <div className="reservation-form__triangle"></div>
                    </div>
                </div>
                <div className="step-one__car-photo-container">
                    <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
                </div>
        </div>
    )
}

export default StepOne;