import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { } from 'react-bootstrap'

// icons : feather
import FeatherIcon from 'feather-icons-react';

export default class HealthMeterStep3 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="step3">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-sm font-family-secondary-bold border-bottom pb-3 pb-lg-4 mb-3 mb-lg-4">
                        Step 3
                    </p>
                    <p className="desc st-text-gray">
                        Do You Currently Suffer From Any Of The Mentioned Health Issues?
                    </p>
                </div>

                {/* CONTENT SEC */}
                <div className="content-sec">
                    <div className="d-flex">
                        {/* lt-sec */}
                        <div className="lt-sec col-12 col-sm-6 px-0">
                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="" id="" className="d-none" />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Constipation</span>
                            </label>

                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="" id="" className="d-none" />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Constipation</span>
                            </label>

                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="" id="" className="d-none" />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Constipation</span>
                            </label>
                        </div>

                        {/* rt-sec */}
                        <div className="rt-sec col-12 col-sm-6 px-0">
                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="" id="" className="d-none" />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Constipation</span>
                            </label>

                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="" id="" className="d-none" />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Constipation</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* BTN SEC */}
                <div className="btn-sec d-flex justify-content-between border-top pt-3 pt-lg-4 mt-3 mt-lg-5">
                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => this.props.openStep2Tab(ev)}
                    >Prev</button>

                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => this.props.openStep4Tab(ev)}
                    >next</button>
                </div>
            </div>
        )
    }
}
