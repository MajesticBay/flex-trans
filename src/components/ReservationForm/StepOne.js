import React from 'react';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";

import { reservationFormContext } from '../../contexts/reservationFormContext';

import fordtransit from '../../images/car-left-shadow.png';

function StepOne(props) {

    // Pick block
    const { addressPick, setAddressPick } = React.useContext(reservationFormContext);
    const { coordinatesPick, setCoordinatesPick } = React.useContext(reservationFormContext);
    const { addressDrop, setAddressDrop } = React.useContext(reservationFormContext);
    const { coordinatesDrop, setCoordinatesDrop } = React.useContext(reservationFormContext);

    // useEffect(() => {
    //     console.log('yes')
    // },[])

    const handleSelectPick = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddressPick(value);
        setCoordinatesPick(latLng);
    };
    
    // Drop block
    const handleSelectDrop = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddressDrop(value);
        setCoordinatesDrop(latLng);
    };

    // const stepDone = () => {
    //     localStorage.clear();
    //     props.next();
    //     console.log("Pick:", coordinatesPick.lat, coordinatesPick.lng)
    //     console.log("Drop:", coordinatesDrop.lat, coordinatesDrop.lng)
    // }
    const showStep = () => {
        if (props.currentStep === 1) {
            return (
                <div className="reservation-form__step-one">
                    <div>
                        <div className="step-one__form rounded">
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
                            <div className="reservation-form__submit-btn rounded pointer" onClick={props.next}>
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
        } else return (<div><span>StepOne null</span></div>);
    }

    return(showStep());
}

export default StepOne;