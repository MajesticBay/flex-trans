import React, { useState } from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete"

import fordtransit from '../../../images/car-left-shadow.png';


function StepOne(props) {

    // Pick block
    const [addressPick, setAddressPick] = useState("");
    const [coordinatesPick, setCoordinatesPick] = useState({lat: null, lng: null})

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddressPick(value);
        setCoordinatesPick(latLng);
    };
    
    // Drop block
    // const [address, setAddress] = useState("");
    // const [coordinates, setCoordinates] = useState({lat: null, lng: null})

    // const handleSelect = async value => {
    //     const results = await geocodeByAddress(value);
    //     const latLng = await getLatLng(results[0]);
    //     setAddress(value);
    //     setCoordinates(latLng);
    //     console.log(coordinates)
    // };


    if (props.currentStep !== 1) {
        return null
    }


    return (
        <div className="reservation-form__step-one">
            <div>
                <div className="step-one__form rounded">
                    <input className="reservation-form__input rounded" name="pick" placeholder="Pick-up location" onChange={props.handleChange}/>
                    <PlacesAutocomplete className="reservation-form__input rounded" value={addressPick} onChange={setAddressPick} onSelect={handleSelect}>
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                            <p>Latitude: {coordinatesPick.lat}</p>
                            <p>Longitude: {coordinatesPick.lng}</p>

                            <input {...getInputProps({ placeholder: "Type address" })} />

                            <div>
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map(suggestion => {
                                const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
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
                    <input className="reservation-form__input rounded" name="drop" placeholder="Drop-off location"/>
                    <div className="reservation-form__submit-btn rounded pointer">
                        <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                        <div className="reservation-form__triangle"></div>
                    </div>
                </div>
            </div>
            <div className="step-one__car-photo-container">
                <img className="img-fluid" src={fordtransit} alt="Ford Transit Wheelchair Vagon"/>
            </div>
        </div>
    )
}

export default StepOne;