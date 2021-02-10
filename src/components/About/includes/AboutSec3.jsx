import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image,
    ProgressBar
} from 'react-bootstrap'

import AboutSec3RightImg from 'assets/images/page-about/about-sec3-right-img.jpg'

export default class AboutSec3 extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            progressProtienPercentage: 0,
            progressFruitPercentage: 0,
            progressVegetablesPercentage: 0,
            progressDietFoodPercentage: 0,
        }
    }

    // setting progress
    componentDidMount() {
        this.setState({
            progressProtienPercentage: 90,
            progressFruitPercentage: 80,
            progressVegetablesPercentage: 70,
            progressDietFoodPercentage: 80,
        })
    }

    render() {
        return (
            <section id="page-about-sec3" className="ST_def-pad-T st-bg-slate">
                <Container>
                    <Row className="page-about-sec3">
                        {/* lt-sec */}
                        <Col xs={12} md={6} className="lt-sec">
                            <div className="inner">
                                {/* heading */}
                                <div className="st-heading-wrapper mb-3 mb-lg-4">
                                    <p className="d-inline-block font-family-primary-bold st-text-primary text-uppercase position-relative mb-2">interesting facts</p>
                                    <p className="st-heading heading-sm font-family-sec font-family-secondary-bold text-capitalize">
                                        How Natural life helps you feel better.
                                    </p>
                                </div>
                                <p className="desc font-size-15 st-text-gray mb-3 mb-lg-5">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam aliquid voluptates pariatur quam unde illo ratione eos officia nulla nisi, qui commodi, veritatis quod dolorum voluptatibus exercitationem, sed tenetur.
                                </p>

                                <div className="progress-main">
                                    {/* item */}
                                    <div className="progress-item mb-3 mb-lg-4">
                                        <p className="progress-name st-text-gray font-weight-600 font-size-13 mb-1">Protiens</p>
                                        <ProgressBar
                                            now={this.state.progressProtienPercentage}
                                            label={`${this.state.progressProtienPercentage}%`}
                                            className="st-progress progress-primary font-family-secondary-bold"
                                        />
                                    </div>

                                    {/* item */}
                                    <div className="progress-item mb-3 mb-lg-4">
                                        <p className="progress-name st-text-gray font-weight-600 font-size-13 mb-1">Fruit</p>
                                        <ProgressBar
                                            now={this.state.progressFruitPercentage}
                                            label={`${this.state.progressFruitPercentage}%`}
                                            className="st-progress progress-primary font-family-secondary-bold"
                                        />
                                    </div>

                                    {/* item */}
                                    <div className="progress-item mb-3 mb-lg-4">
                                        <p className="progress-name st-text-gray font-weight-600 font-size-13 mb-1">Vegetables</p>
                                        <ProgressBar
                                            now={this.state.progressVegetablesPercentage}
                                            label={`${this.state.progressVegetablesPercentage}%`}
                                            className="st-progress progress-primary font-family-secondary-bold"
                                        />
                                    </div>

                                    {/* item */}
                                    <div className="progress-item mb-3 mb-lg-4">
                                        <p className="progress-name st-text-gray font-weight-600 font-size-13 mb-1">Diet Food</p>
                                        <ProgressBar
                                            now={this.state.progressDietFoodPercentage}
                                            label={`${this.state.progressDietFoodPercentage}%`}
                                            className="st-progress progress-primary font-family-secondary-bold"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* rt-sec */}
                        <Col xs={12} md={6} className="rt-sec mt-3 mt-md-0">
                            <div className="inner">
                                <Image src={AboutSec3RightImg} fluid />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        )
    }
}
