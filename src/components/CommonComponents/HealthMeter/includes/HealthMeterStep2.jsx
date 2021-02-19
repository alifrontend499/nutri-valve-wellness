import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { Image } from 'react-bootstrap'

// images
// import menBodyTypeOval from 'assets/images/icons/for-men-body-type-oval.png'
// import menBodyTypeSquare from 'assets/images/icons/for-men-body-type-square.png'
// import menBodyTypeTriangular from 'assets/images/icons/for-men-body-type-triangular.png'

// import womenBodyTypeApple from 'assets/images/icons/for-women-body-type-apple.png'
// import womenBodyTypeBanana from 'assets/images/icons/for-women-body-type-banana.png'
// import womenBodyTypeHourglass from 'assets/images/icons/for-women-body-type-hourglass.png'
// import womenBodyTypePear from 'assets/images/icons/for-women-body-type-pear.png'


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
    }

    render() {
        return (
            <div className="step2">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-sm font-family-secondary-bold border-bottom pb-3 pb-lg-4 mb-3 mb-lg-4">
                        Health Meter
                    </p>
                    <p className="desc st-text-gray">
                        Select Your Body Type
                    </p>
                </div>

                {/* CONTENT SEC */}
                <div className="content-sec">
                    {/* FOR MEN */}
                    {/* <div className="for-men d-flex justify-content-center"> */}
                    <div className="for-men d-none flex-wrap justify-content-center">
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menTriangle} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Triangle</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menInvertedTriangle} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Triangle Inverted</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menOval} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Oval</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menHourglass} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Hour Glass</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menSquare} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Square</span>
                        </label>
                    </div>

                    {/* FOR WOMEN */}
                    <div className="for-women d-flex flex-wrap justify-content-center">
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenTriangle} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Triangle</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenInvertedTriangle} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Triangle Inverted</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenOval} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Oval</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenHourglass} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Hour Glass</span>
                        </label>

                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenSquare} fluid className="img-fluid-height" />
                            </span>
                            <span className="text d-block mt-1">Square</span>
                        </label>
                    </div>
                </div>

                {/* BTN SEC */}
                <div className="btn-sec d-flex justify-content-between border-top pt-3 pt-lg-4 mt-3 mt-lg-5">
                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => this.props.openStep1Tab(ev)}
                    >Prev</button>

                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => this.props.openStep3Tab(ev)}
                    >next</button>
                </div>
            </div>
        )
    }
}
