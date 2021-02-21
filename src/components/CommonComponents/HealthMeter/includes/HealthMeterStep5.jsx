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
    }

    render() {
        return (
            <div className="step4">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-sm font-family-secondary-bold border-bottom pb-3 pb-lg-4 mb-3 mb-lg-4">
                        Step 5 (Final Step)
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
                                    <select name="" id="" className="form-control border-0" defaultValue="0">
                                        <option value="0" disabled>Consumption Of Water Per Day:</option>
                                        <option value="1" >{'< 4 glasses'}</option>
                                        <option value="2" >{'4 - 6 glasses'}</option>
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
                                    <select name="" id="" className="form-control border-0" defaultValue="0">
                                        <option value="0" disabled>Consumption Of Fruits & Vegetables Per Day:</option>
                                        <option value="1" >{'1 - 2 servings'}</option>
                                        <option value="2" >{'3 - 4 servings'}</option>
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
                        onClick={ev => this.props.openStep1Tab(ev)}
                    >Get Results</button>
                </div>
            </div>
        )
    }
}
