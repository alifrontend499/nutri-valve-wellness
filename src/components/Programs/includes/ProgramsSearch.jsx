import React, { Component } from 'react'

// styles
import '../styles/programs-styles.css'

// bootstrap
import { Container } from 'react-bootstrap'

export default class PSearch extends Component {
    render() {
        return (
            <section id="programs-search" className="st-bg-slate py-3 py-lg-5">
                <Container>
                    <div className="programs-search d-flex justify-content-center align-items-center">
                        <p className="head font-weight-600 mr-3 mr-lg-4">Select Program: </p>
                        <div className="st-form st-form-rounded st-form-has-shadow">
                            <select className="form-control">
                                <option value="1">Weight Loss chalange</option>
                                <option value="2">Battle PCOS</option>
                                <option value="3">Body Transformation</option>
                                <option value="4">Weight Gain</option>
                                <option value="5">Pregnancy and Motherhood</option>
                            </select>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}
