import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { Image } from 'react-bootstrap'

// images icons
import iconGender from 'assets/images/icons/male-female-icon.png'

export default class HealthMeterStep5 extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            waterConsumption: '3',
            fruitConsumption: '3',
        }

        // functions bindings
        this.handleWaterConsumptionChange = this.handleWaterConsumptionChange.bind(this)
        this.handleFruitConsumptionChange = this.handleFruitConsumptionChange.bind(this)

    }

    // setting | water consumption
    handleWaterConsumptionChange(event) {
        this.setState({ waterConsumption: event.target.value });
    }

    // setting | fruit consumption
    handleFruitConsumptionChange(event) {
        this.setState({ fruitConsumption: event.target.value });
    }

    render() {
        const state = this.state;
        const props = this.props;

        return (
            <div className="step4">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-xs2 font-family-secondary-bold border-bottom pb-3 pb-lg-4 mb-3 mb-lg-4">
                        Health Meter - <span className="st-text-primary">Final Step</span>
                    </p>
                    <p className="desc st-text-gray">
                        Know your ideal weight, BMI & a score describing your current health status
                        curated by the nutritionists at
                    </p>
                </div>

                {/* FORM SEC */}
                <div className="form-sec">
                    {/* frac */}
                    <div className="frac d-flex flex-wrap">
                        <div className="col-12 col-md-6 lt-sec pl-0 pr-0 pr-md-2 mb-3">
                            {/* field */}
                            <div className="form-container border st-border-default">
                                <div className="st-form position-relative with-icon-left">
                                    <select className="form-control border-0"
                                        defaultValue={state.waterConsumption}
                                        onChange={this.handleWaterConsumptionChange}>
                                        <option disabled>Consumption of water per day:</option>
                                        <option value="3" >{'< 4 glasses'}</option>
                                        <option value="6" >{'4 - 6 glasses'}</option>
                                        <option value="12" >{'6 - 12 glasses'}</option>
                                        <option value="13" >{'12 > glasses'}</option>
                                    </select>
                                    <div className="icon d-inline-block position-absolute">
                                        <Image src={iconGender} fluid width={17} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                            {/* field */}
                            <div className="form-container border st-border-default">
                                <div className="st-form position-relative with-icon-left">
                                    <select className="form-control border-0"
                                        defaultValue={state.fruitConsumption}
                                        onChange={this.handleFruitConsumptionChange}>
                                        <option disabled>Consumption of fruits & vegetables per day:</option>
                                        <option value="none">None</option>
                                        <option value="2" >{'1- 2 servings'}</option>
                                        <option value="4" >{'3 - 4 servings'}</option>
                                        <option value="5" >{'4> servings'}</option>
                                    </select>
                                    <div className="icon d-inline-block position-absolute">
                                        <Image src={iconGender} fluid width={17} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BTN SEC */}
                <div className="btn-sec d-flex justify-content-between border-top pt-3 pt-lg-4 mt-3 mt-lg-5">
                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => this.props.openStep4Tab(ev)}
                    >Prev</button>

                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => {
                            // sending data to main component
                            props.gettingDataFromStep5(state)

                            setTimeout(() => {
                                // final result
                                // props.getResult()

                                props.openUserDetailsModal(ev)

                            }, 200);
                        }}
                    >Get Results</button>
                </div>
            </div>
        )
    }
}
