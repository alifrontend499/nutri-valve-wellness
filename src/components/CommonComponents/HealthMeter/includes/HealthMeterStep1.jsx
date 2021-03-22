import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { Image } from 'react-bootstrap'

// images icons
import iconGender from 'assets/images/icons/male-female-icon.png'
import iconAge from 'assets/images/icons/age-icon.png'
import iconKg from 'assets/images/icons/kg-icon.png'

export default class HealthMeterStep1 extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            gender: 'male',
            ageYears: '18',
            ageMonths: '9',
            heightFt: '6',
            heightIn: '7',
            weightKg: '21',
            weightGm: '18',
        }

        // functions bindings
        this.handleGenderChange = this.handleGenderChange.bind(this)

        this.handleAgeYearsChange = this.handleAgeYearsChange.bind(this)
        this.handleAgeMonthsChange = this.handleAgeMonthsChange.bind(this)

        this.handleHeightFtChange = this.handleHeightFtChange.bind(this)
        this.handleHeightInChange = this.handleHeightInChange.bind(this)

        this.handleWeightKgChange = this.handleWeightKgChange.bind(this)
        this.handleWeightGmChange = this.handleWeightGmChange.bind(this)
    }

    // setting gender
    handleGenderChange(event) {
        // console.log(event)
        this.setState({ gender: event.target.value });
    }

    // setting age | years
    handleAgeYearsChange(event) {
        // console.log(event)
        this.setState({ ageYears: event.target.value });
    }

    // setting age | months
    handleAgeMonthsChange(event) {
        // console.log(event)
        this.setState({ ageMonths: event.target.value });
    }

    // setting height | feet
    handleHeightFtChange(event) {
        // console.log(event)
        this.setState({ heightFt: event.target.value });
    }

    // setting height | inches
    handleHeightInChange(event) {
        // console.log(event)
        this.setState({ heightIn: event.target.value });
    }

    // setting weight | kilogram
    handleWeightKgChange(event) {
        // console.log(event)
        this.setState({ weightKg: event.target.value });
    }

    // setting weight | gram
    handleWeightGmChange(event) {
        // console.log(event)
        this.setState({ weightGm: event.target.value });
    }

    render() {
        const state = this.state;
        const props = this.props;
        return (
            <div className="step1">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-sm font-family-secondary-bold border-bottom st-border-default pb-2 pb-lg-4 mb-2 mb-lg-4">
                        Health Meter
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
                                    <select name="" id="" className="form-control border-0"
                                        defaultValue={state.gender}
                                        onChange={this.handleGenderChange}>
                                        <option disabled>Select</option>
                                        <option value="male" >Male</option>
                                        <option value="female" >Female</option>
                                    </select>
                                    <div className="icon d-inline-block position-absolute">
                                        <Image src={iconGender} fluid width={17} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                            <div className="form-container d-flex border st-border-default">
                                {/* field */}
                                <div className="st-form w-50 pr-2 position-relative with-icon-left has-right-border">
                                    <select name="" id="" className="form-control border-0"
                                        defaultValue={state.ageYears}
                                        onChange={this.handleAgeYearsChange}>
                                        <option disabled>Select Year</option>
                                        <option value="17" >17 (years)</option>
                                        <option value="18" >18 (years)</option>
                                        <option value="19" >19 (years)</option>
                                        <option value="20" >20 (years)</option>
                                        <option value="21" >21 (years)</option>
                                        <option value="22" >22 (years)</option>
                                    </select>
                                    <div className="icon d-inline-block position-absolute">
                                        <Image src={iconAge} fluid width={17} />
                                    </div>
                                </div>
                                {/* field */}
                                <div className="st-form w-50 pl-2 position-relative">
                                    <select name="" id="" className="form-control border-0"
                                        defaultValue={state.ageMonths}
                                        onChange={this.handleAgeMonthsChange}>
                                        <option disabled>Select Month</option>
                                        <option value="8" >8 (months)</option>
                                        <option value="9" >9 (months)</option>
                                        <option value="10" >10 (months)</option>
                                        <option value="11" >11 (months)</option>
                                        <option value="12" >12 (months)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* frac */}
                    <div className="frac d-flex flex-wrap">
                        <div className="col-12 col-md-6 lt-sec pl-0 pr-0 pr-md-2 mb-3">
                            <div className="form-container d-flex border st-border-default">
                                {/* field */}
                                <div className="st-form w-50 pr-2 position-relative with-icon-left has-right-border">
                                    <select name="" id="" className="form-control border-0"
                                        defaultValue={state.heightFt}
                                        onChange={this.handleHeightFtChange}>
                                        <option disabled>Select</option>
                                        <option value="5" >5(ft)</option>
                                        <option value="6" >6(ft)</option>
                                        <option value="7" >7(ft)</option>
                                        <option value="8" >8(ft)</option>
                                        <option value="9" >9(ft)</option>
                                    </select>
                                    <div className="icon d-inline-block position-absolute">
                                        <Image src={iconAge} fluid width={17} />
                                    </div>
                                </div>
                                {/* field */}
                                <div className="st-form w-50 pl-2 position-relative">
                                    <select name="" id="" className="form-control border-0"
                                        defaultValue={state.heightIn}
                                        onChange={this.handleHeightInChange}>
                                        <option disabled>Select</option>
                                        <option value="5" >5(in)</option>
                                        <option value="9" >6(in)</option>
                                        <option value="7" >7(in)</option>
                                        <option value="8" >8(in)</option>
                                        <option value="9" >9(in)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                            <div className="form-container d-flex border st-border-default">
                                {/* field */}
                                <div className="st-form w-50 pr-2 position-relative with-icon-left has-right-border">
                                    <select name="" id="" className="form-control border-0"
                                        defaultValue={state.weightKg}
                                        onChange={this.handleWeightKgChange}>
                                        <option value="0" disabled>Kg</option>
                                        <option value="17" >17</option>
                                        <option value="18" >18</option>
                                        <option value="19" >19</option>
                                        <option value="20" >20</option>
                                        <option value="21" >21</option>
                                    </select>
                                    <div className="icon d-inline-block position-absolute">
                                        <Image src={iconKg} fluid width={17} />
                                    </div>
                                </div>
                                {/* field */}
                                <div className="st-form w-50 pl-2 position-relative">
                                    <select name="" id="" className="form-control border-0"
                                        defaultValue={state.weightGm}
                                        onChange={this.handleWeightGmChange}>
                                        <option disabled>gm</option>
                                        <option value="17" >17</option>
                                        <option value="18" >18</option>
                                        <option value="19" >19</option>
                                        <option value="20" >20</option>
                                        <option value="21" >21</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BTN SEC */}
                <div className="btn-sec d-flex justify-content-end border-top st-border-default pt-3 pt-lg-4 mt-3 mt-lg-5">
                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => {
                            // sending data to main component
                            props.gettingDataFromStep1(state)

                            // opening step 2
                            this.props.openStep2Tab(ev)
                        }}
                    >next</button>
                </div>
            </div>
        )
    }
}
