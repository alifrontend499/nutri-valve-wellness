import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { Image } from 'react-bootstrap'


import menTriangle from 'assets/images/icons/man-triangle.jpg'
import womenTriangle from 'assets/images/icons/woman-triangle.jpg'

import menInvertedTriangle from 'assets/images/icons/men-inverted-triangle.jpg'
import womenInvertedTriangle from 'assets/images/icons/women-inverted-triangle.jpg'

import menHourglass from 'assets/images/icons/men-hourglass.jpg'
import womenHourglass from 'assets/images/icons/women-hourglass.jpg'

import menOval from 'assets/images/icons/men-oval.jpg'
import womenOval from 'assets/images/icons/women-oval.jpg'

import menSquare from 'assets/images/icons/men-square.jpg'
import womenSquare from 'assets/images/icons/women-square.jpg'




export default class HealthMeterStep2 extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            bodyType: 'triangle'
        }

        // functions bindings
        this.handleBodyTypeChange = this.handleBodyTypeChange.bind(this)
    }

    // setting body type
    handleBodyTypeChange(event) {
        // console.log(event.target.value)
        this.setState({ bodyType: event.target.value });
    }

    render() {
        const state = this.state;
        const props = this.props;
        return (
            <div className="step2">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-sm font-family-secondary-bold border-bottom pb-2 pb-lg-4 mb-2 mb-lg-4">
                        Health Meter
                    </p>
                    <p className="desc st-text-gray">
                        Select Your Body Type
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
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "triangle"}
                                        value="triangle"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1">
                                        <Image src={menTriangle} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Triangle</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "triangle inverted"}
                                        value="triangle inverted"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1">
                                        <Image src={menInvertedTriangle} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Triangle Inverted</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "oval"}
                                        value="oval"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1">
                                        <Image src={menOval} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Oval</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "Hour Glass"}
                                        value="hour glass"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1">
                                        <Image src={menHourglass} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Hour Glass</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "square"}
                                        value="square"
                                        onChange={this.handleBodyTypeChange} />
                                    <span className="box d-block border p-1">
                                        <Image src={menSquare} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Square</span>
                                </label>
                            </div>

                        ) : (
                            // FOR FEMALE
                            <div className="for-women d-flex flex-wrap justify-content-center">
                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "triangle"}
                                        value="triangle"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1">
                                        <Image src={womenTriangle} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Triangle</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "triangle inverted"}
                                        value="triangle inverted"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1">
                                        <Image src={womenInvertedTriangle} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Triangle Inverted</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "oval"}
                                        value="oval"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1">
                                        <Image src={womenOval} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Oval</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "hour glass"}
                                        value="hour glass"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1">
                                        <Image src={womenHourglass} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Hour Glass</span>
                                </label>

                                {/* radio */}
                                <label className="st-img-radio text-center mx-1">
                                    <input type="radio" name="body_type" className="d-none"
                                        checked={state.bodyType == "square"}
                                        value="square"
                                        onChange={this.handleBodyTypeChange}
                                    />
                                    <span className="box d-block border p-1">
                                        <Image src={womenSquare} fluid className="img-fluid-height" />
                                    </span>
                                    <span className="text d-block mt-1">Square</span>
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
