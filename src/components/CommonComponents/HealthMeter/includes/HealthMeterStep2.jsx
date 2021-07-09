import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { Image } from 'react-bootstrap'


import appleMen from 'assets/images/icons/apple.jpg'
import appleWomen from 'assets/images/icons/apple-girl.jpg'

import bananaMen from 'assets/images/icons/banana.jpg'
import bananaWomen from 'assets/images/icons/banana-girl.jpg'

import hourglassMen from 'assets/images/icons/hourglass.jpg'
import hourglassWomen from 'assets/images/icons/hourglass-girl.jpg'

import pearMen from 'assets/images/icons/pair.jpg'
import pearWomen from 'assets/images/icons/pair-girl.jpg'




export default class HealthMeterStep2 extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            bodyType: 'apple'
        }

        // functions bindings
        this.handleBodyTypeChange = this.handleBodyTypeChange.bind(this)
    }

    // setting body type
    handleBodyTypeChange(event) {
        this.setState({ bodyType: event.target.value });
    }

    render() {
        const state = this.state;
        const props = this.props;
        return (
            <div className="step2">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-xs2 font-family-secondary-bold border-bottom pb-2 pb-lg-4 mb-2 mb-lg-4">
                        Health Meter - <span className="st-text-primary">Step 2</span>
                    </p>
                    <p className="desc st-text-gray">
                        Select your body type
                    </p>
                </div>

                {/* CONTENT SEC */}
                <div className="content-sec">

                    {
                        /* RENDERING DATA BASED ON THE SELECTED GENDER BY THE USER */
                        (props.selectedGender && props.selectedGender == 'male') ? (
                            // FOR MALE
                            <div className="for-men d-flex flex-wrap justify-content-center">
                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "apple"}
                                        value="apple"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={appleMen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "apple" ? 'active' : ''}`}>Apple Shaped</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "hourglass"}
                                        value="hourglass"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={hourglassMen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "hourglass" ? 'active' : ''}`}>Hourglass Shaped</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "pear"}
                                        value="pear"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={pearMen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "pear" ? 'active' : ''}`}>Pear-Shaped</span>
                                </label>

                                {/* radio */}
                                {/* <label className="st-img-radio text-center mx-1 mb-2" style={{width: 115}}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "Hour Glass"}
                                        value="hour glass"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={menHourglass} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "Hour Glass" ? 'active' : ''}`}>Hour Glass</span>
                                </label> */}

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "banana"}
                                        value="banana"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={bananaMen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "banana" ? 'active' : ''}`}>Rectangle / Banana Shape</span>
                                </label>
                            </div>

                        ) : (
                            // FOR FEMALE
                            <div className="for-women d-flex flex-wrap justify-content-center">
                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "apple"}
                                        value="apple"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={appleWomen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "apple" ? 'active' : ''}`}>Apple Shaped</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "hourglass"}
                                        value="hourglass"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={hourglassWomen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "hourglass" ? 'active' : ''}`}>Hourglass Shaped</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "pear"}
                                        value="pear"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={pearWomen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "pear" ? 'active' : ''}`}>Pear-Shaped</span>
                                </label>

                                {/* radio */}
                                {/* <label className="st-img-radio text-center mx-1 mb-2" style={{width: 115}}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "hour glass"}
                                        value="hour glass"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={womenHourglass} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "hour glass" ? 'active' : ''}`}>Hour Glass</span>
                                </label> */}

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1 mb-2" style={{ width: 115 }}>
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "banana"}
                                        value="banana"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1 mx-auto">
                                        <Image src={bananaWomen} width={70} fluid className="img-fluid-height" />
                                    </span>
                                    <span className={`text d-block mt-1 ${state.bodyType == "banana" ? 'active' : ''}`}>Rectangle / Banana Shape</span>
                                </label>
                            </div>

                        )
                    }
                </div>

                {/* BTN SEC */}
                <div className="btn-sec d-flex justify-content-between border-top pt-3 pt-lg-4 mt-3 mt-lg-5">
                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => this.props.openStep1Tab(ev)}
                    >Prev</button>

                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => {
                            // sending data to main component
                            props.gettingDataFromStep2(state)

                            // opening step 3
                            this.props.openStep3Tab(ev)
                        }}
                    >next</button>
                </div>
            </div>
        )
    }
}
