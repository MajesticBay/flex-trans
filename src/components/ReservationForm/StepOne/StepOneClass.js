import React from 'react';
import useState from 'react';
import fordtransit from '../../../images/car-left-shadow.png';
// import "https://maps.googleapis.com/maps/api/js?key=AIzaSyA1_FjAoDlmqOnFqr8ckuw9Ifw9T8oYgWU&libraries=places&callback=initMap";
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete"


const google = window.google;


class StepOne extends React.Component {
    constructor(props) {
        super(props);

        // this.autocompleteInput = React.createRef();
        // this.autocomplete = null;
        // this.handlePlaceChanged = this.handlePlaceChanged.bind(this);

        this.state = {
            pickup: '',
            drop: ''
        }
    }

    // componentDidMount() {
    //     this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
    //         {"types": ["geocode"]});

    //     this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    // }

    // handlePlaceChanged(){
    //     const place = this.autocomplete.getPlace();
    //     this.props.onPlaceLoaded(place);
    // }

    handlePickupChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        console.log('name ', name, 'value', value);
        console.log('this.state.pick ', this.state.pick);
    }

    handleDropChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        console.log('name ', name, 'value', value);
        console.log('this.state.drop ', this.state.drop);
    }

    test = () => {
        const {pickup, drop} = this.state;
        console.log ('pickup ->', pickup)
        console.log ('drop ->', drop)
        localStorage.setItem('pickup', pickup);
        localStorage.setItem('drop', drop);
    }

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }

        return (
            <div className="reservation-form__step-one">
                <div>
                    <div className="step-one__form rounded">
                        {/* <input className="reservation-form__input rounded" name="pickup" ref={this.autocompleteInput}  id="autocomplete" placeholder="Enter your address" type="text"/> */}
                        <input className="reservation-form__input rounded" name="pickup" placeholder="Pick-up location" onChange={this.handlePickupChange}/>
                        <input className="reservation-form__input rounded" name="drop" placeholder="Drop-off location" onChange={this.handleDropChange}/>
                        <div className="reservation-form__submit-btn rounded pointer" onClick={this.test}>
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
}

export default StepOne;