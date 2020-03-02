import React from 'react';
import fordtransit from '../../../images/car-left-shadow.png';

class StepOne extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pickup: '',
            drop: ''
        }
    }

    handlePickChange = event => {
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

    render() {
        if (this.props.currentStep !== 1) {
            return null
        }

        return (
            <div className="reservation-form__step-one">
                <div>
                    <div className="step-one__form rounded">
                        <input className="reservation-form__input rounded" name="pick" placeholder="Pick-up location" onChange={this.handlePickChange}/>
                        <input className="reservation-form__input rounded" name="drop" placeholder="Drop-off location" onChange={this.handleDropChange}/>
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
}

export default StepOne;