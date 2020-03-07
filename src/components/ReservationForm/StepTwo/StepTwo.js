import React from 'react';
// import map from '../../../images/map.png';

require('dotenv').config();

class StepTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pickup: '',
            drop: '',
            coordinatesPickLat: '',
            coordinatesPickLng: '',
            coordinatesDropLat: '',
            coordinatesDropLng: ''
        }
    }

    componentDidMount() {
        const pickup = localStorage.getItem('pickup');
        const drop = localStorage.getItem('drop');
        const coordinatesPickLat = localStorage.getItem('coordinatesPickLat')
        const coordinatesPickLng = localStorage.getItem('coordinatesPickLng')
        const coordinatesDropLat = localStorage.getItem('coordinatesDropLat')
        const coordinatesDropLng = localStorage.getItem('coordinatesDropLng')
        this.setState({ pickup, drop, coordinatesPickLat, coordinatesPickLng, coordinatesDropLat, coordinatesDropLng});
    }

    test = () => {
        console.log('123');
        console.log("Pick: ", this.state.coordinatesPickLat, this.state.coordinatesPickLng);
        console.log("Drop: ", this.state.coordinatesDropLat, this.state.coordinatesDropLng);
        console.log('this.state.pickup -> ', this.state.pickup);
        console.log('this.state.drop -> ', this.state.drop);
    }
    

    render() {
        // let url = `https://www.google.com/maps/embed/v1/directions?origin=40.7127837,-74.0059413&destination=42.3600825,-71.05888&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
        let url = `https://www.google.com/maps/embed/v1/directions?origin=${this.state.coordinatesPickLat},${this.state.coordinatesPickLng}&destination=${this.state.coordinatesDropLat},${this.state.coordinatesDropLng}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;
        if (this.props.currentStep !== 2) {
            return null
        }
        return (
            <div className="reservation-form__step-two">
                <div>
                    <div className="step-two__form rounded">
                        <div className="step-two__locations">
                            <span className="step-two__locations-text--red">A: </span><span className="step-two__locations-text">Seattle-Tacoma International Airport (SEA), International Boulevard, Seattle, WA, USA</span>
                        </div>
                        <div className="step-two__locations">
                            <span className="step-two__locations-text--red">B: </span><span className="step-two__locations-text">Sammamish Landing Park, East Lake Sam- mamish Parkway Northeast, Sammamish, WA, USA</span>
                        </div>
                        <div className="step-two__trip-cost-container">
                            <p className="step-two__info">Wheelchair rampvan <br/> One way trip 43,5 mi</p>
                            <div>
                                <span className="step-two__dollar-sign">$</span>
                                <span className="step-two__cost">53.31</span>
                            </div>
                        </div>
                        <div className="reservation-form__submit-btn rounded pointer" onClick={this.next}>
                            <span className="reservation-form__submit-text">Get instant quote for your trip</span>
                        </div>
                    </div>
                </div>
                <div className="step-one__car-photo-container">
                    {/* <img className="img-fluid" src={map} alt="Ford Transit Wheelchair Vagon"/> */}
                    <iframe title="google-map" frameBorder="0" style={{ width: "100%", height: "100%"}} src={url}>
    
                    </iframe>
                </div>
            </div>
        )
    }
}

export default StepTwo;