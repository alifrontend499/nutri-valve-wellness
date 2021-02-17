import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { Image } from 'react-bootstrap'

// images
import menBodyTypeOval from 'assets/images/icons/for-men-body-type-oval.png'
import menBodyTypeSquare from 'assets/images/icons/for-men-body-type-square.png'
import menBodyTypeTriangular from 'assets/images/icons/for-men-body-type-triangular.png'

import womenBodyTypeApple from 'assets/images/icons/for-women-body-type-apple.png'
import womenBodyTypeBanana from 'assets/images/icons/for-women-body-type-banana.png'
import womenBodyTypeHourglass from 'assets/images/icons/for-women-body-type-hourglass.png'
import womenBodyTypePear from 'assets/images/icons/for-women-body-type-pear.png'

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
                    <div className="for-men d-none">
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menBodyTypeOval} fluid />
                                <span className="text d-block mt-1">Oval</span>
                            </span>
                        </label>
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menBodyTypeSquare} fluid />
                                <span className="text d-block mt-1">Trapezoid</span>
                            </span>
                        </label>
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={menBodyTypeTriangular} fluid />
                                <span className="text d-block mt-1">Triangular</span>
                            </span>
                        </label>
                    </div>

                    {/* FOR WOMEN */}
                    <div className="for-women d-flex justify-content-center">
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenBodyTypeApple} fluid />
                                <span className="text d-block mt-1">Apple</span>
                            </span>
                        </label>
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenBodyTypeBanana} fluid />
                                <span className="text d-block mt-1">Banana</span>
                            </span>
                        </label>
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenBodyTypeHourglass} fluid />
                                <span className="text d-block mt-1">Hourglass</span>
                            </span>
                        </label>
                        {/* radio */}
                        <label className="st-img-radio text-center mx-1">
                            <input type="radio" name="body-type" id="" className="d-none" />
                            <span className="box d-block border p-1">
                                <Image src={womenBodyTypePear} fluid />
                                <span className="text d-block mt-1">Pear</span>
                            </span>
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
