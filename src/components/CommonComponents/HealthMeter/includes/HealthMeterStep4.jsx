import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { Image } from 'react-bootstrap'

// images icons
import iconGender from 'assets/images/icons/male-female-icon.png'

export default class HealthMeterStep4 extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            smoking:  -1,
            alcoholConsumption: -1,
            sleepDuration: '6-disturbed',
            dailyActivityLevel: 'sedentary',
        }

        // functions bindings
        this.handleSmokingChange = this.handleSmokingChange.bind(this)
        this.handleAlcoholConsumptionChange = this.handleAlcoholConsumptionChange.bind(this)
        this.handleSleepDurationChange = this.handleSleepDurationChange.bind(this)
        this.handleDailyActivityLevelChange = this.handleDailyActivityLevelChange.bind(this)

    }

    // setting | smoking
    handleSmokingChange(event) {
        // console.log(event)
        this.setState({ smoking: event.target.value });
    }

    // setting | alcohol consumption
    handleAlcoholConsumptionChange(event) {
        // console.log(event)
        this.setState({ alcoholConsumption: event.target.value });
    }

    // setting | sleep duration
    handleSleepDurationChange(event) {
        // console.log(event)
        this.setState({ sleepDuration: event.target.value });
    }

    // setting | daily activity level
    handleDailyActivityLevelChange(event) {
        // console.log(event)
        this.setState({ dailyActivityLevel: event.target.value });
    }


    render() {
        const state = this.state;
        const props = this.props;
        return (
            <div className="step4">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-sm font-family-secondary-bold border-bottom pb-3 pb-lg-4 mb-3 mb-lg-4">
                        Heallth Meter
                    </p>
                    {/* <p className="desc st-text-gray">
                        
                    </p> */}
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
                                        defaultValue={state.smoking}
                                        onChange={this.handleSmokingChange}>
                                        <option disabled value="-1">How Often Do You Smoke?</option>
                                        <option value="never" >Never</option>
                                        <option value="quited" >QUITED</option> 
                                        <option value="aweek" >FEW TIMES A WEEK</option>
                                        <option value="morethen2timeaday" >MORE THAN 2 TIMES A DAY</option>
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
                                        defaultValue={state.alcoholConsumption}
                                        onChange={this.handleSmokingChange}>
                                        <option disabled value="-1">How Often Do You Consume Alcohol?</option>
                                        <option value="never" >Never</option>
                                        <option value="daily" >Daily</option> 
                                        <option value="occasionally" >Occasionally</option>
                                        <option value="year" >Quited</option>
                                    </select>
                                    <div className="icon d-inline-block position-absolute">
                                        <Image src={iconGender} fluid width={17} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* frac */}
                    <div className="frac d-flex flex-wrap">
                        <div className="col-12 col-md-6 lt-sec pl-0 pr-0 pr-md-2 mb-3">
                            {/* field */}
                            <div className="form-container border st-border-default">
                                <div className="st-form position-relative with-icon-left">
                                    <select className="form-control border-0"
                                        defaultValue={state.sleepDuration}
                                        onChange={this.handleSleepDurationChange}>
                                        <option disabled>Duration Of Sleep:</option>
                                        <option value="6-disturbed" >≤ 6 hours disturbed sleep</option> 
                                        <option value="6-peaceful" >≤ 6 hours peaceful sleep</option>
                                        <option value="6-9" >6 – 9 hours</option>
                                        <option value="10-0" >≥ 10 hours</option>
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
                                        defaultValue={state.dailyActivityLevel}
                                        onChange={this.handleDailyActivityLevelChange}>
                                        <option disabled>Daily Activity Level: </option>
                                        <option value="sedentary" >Sedentary Lifestyle</option>
                                        <option value="lightly" >Lightly Active Lifestyle</option>
                                        <option value="moderately" >Moderately Active Lifestyle</option>
                                        <option value="active" >Active Lifestyle</option>
                                        <option value="extra" >Extra Active Lifestyle</option>
                                        
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
                        onClick={ev => this.props.openStep3Tab(ev)}
                    >Prev</button>

                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => {
                            // sending data to main component
                            props.gettingDataFromStep4(state)

                            // opening step 2
                            this.props.openStep5Tab(ev)
                        }}
                    >Next</button>
                </div>
            </div>
        )
    }
}
