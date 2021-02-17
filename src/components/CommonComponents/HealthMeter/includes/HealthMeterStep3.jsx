import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { } from 'react-bootstrap'

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
                        3. Goals
                    </p>
                    <p className="desc st-text-gray">
                        Know your ideal weight, BMI & a score describing your current health status
                        curated by the nutritionists at
                    </p>
                </div>

                {/* CONTENT SEC */}
                <div className="content-sec"></div>

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
