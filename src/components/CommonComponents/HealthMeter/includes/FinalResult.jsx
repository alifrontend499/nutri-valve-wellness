import React, { Component } from 'react'

import HTMLparser from "html-react-parser";
// styles
import '../styles/health-meter-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

// components
// import Header from 'components/CommonComponents/Header/Header'
// import Footer from 'components/CommonComponents/Footer/Footer'

import { Link } from 'react-router-dom';

// images
import bgImg from 'assets/images/health-meter-result/bg.jpg'
import alcohalImg from 'assets/images/health-meter-result/alcohal-img.jpg'
import bodyImg from 'assets/images/health-meter-result/body-img1.jpg'
import healthImg from 'assets/images/health-meter-result/health-img.jpg'
import lifestyleImg from 'assets/images/health-meter-result/lifestyle-img1.jpg'
import meterImg from 'assets/images/health-meter-result/meter-bg.jpg'
import sleepImg from 'assets/images/health-meter-result/sleep.jpg'
import smokingImg from 'assets/images/health-meter-result/smoking-img.jpg'
import vegeImg from 'assets/images/health-meter-result/vegetable.jpg'
import waterImg from 'assets/images/health-meter-result/water.jpg'

import appleMen from 'assets/images/icons/apple.jpg'
import appleWomen from 'assets/images/icons/apple-girl.jpg'

import bananaMen from 'assets/images/icons/banana.jpg'
import bananaWomen from 'assets/images/icons/banana-girl.jpg'

import hourglassMen from 'assets/images/icons/hourglass.jpg'
import hourglassWomen from 'assets/images/icons/hourglass-girl.jpg'

import pearMen from 'assets/images/icons/pair.jpg'
import pearWomen from 'assets/images/icons/pair-girl.jpg'


export default class FinalResult extends Component {
    constructor(props) {
        super(props)

        this.state = {
            result: null,
            step1Data: null
        }
    }

    componentDidMount() {
        if ((this.props.location && this.props.location.state)) {
            const result = this.props.location.state.result
            const step1Data = this.props.location.state.step1Data
            if (result) {
                this.setState({
                    result,
                    step1Data
                }, () => {
                    console.log(this.state.step1Data);
                })
            }
        }

    }

    render() {
        const result = this.state.result && this.state.result
        const gender = this?.state?.step1Data?.gender
        // const meter = this.props.meter
        return (
            <React.Fragment>
                <div className="bmi-final-result-wrapper" style={{ backgroundImage: `url('${bgImg}')` }}>
                    {/* HEADER */}
                    {/* <Header /> */}

                    {/* MAIN CONTENT WRAPPER */}
                    <section id="st-wrapper">
                        <div id="heath-meter-final-result" className="ST_def-pad-TB">
                            <Container>
                                {
                                    // IF WE HAVE RESUILT IN THE DATA
                                    (result) ? (
                                        <React.Fragment>
                                            {/* HEADING WRAPPER */}
                                            <Col xs={12} lg={7} className="st-heading-wrapper pb-3 pb-lg-4 mx-auto text-center">
                                                <p className="st-heading heading-sm font-family-secondary-bold mb-2 mb-lg-4">
                                                    Results
                                                </p>
                                                <p className="desc font-size-17 st-text-gray mb-3">
                                                    Know your ideal weight, BMI & a score describing your current health status curated by the nutritionists at
                                                </p>
                                            </Col>

                                            {/* CONTENT SEC */}
                                            <Row className="heath-meter-final-result bg-white p-3 p-lg-4 mx-auto">
                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={meterImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                What Your BMI Says About Your Health
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {result.weight && result.weight.message}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            {
                                                                // body type: apple
                                                                (result.bodyShape === "apple") && (
                                                                    gender === "male" ? (
                                                                        <Image src={appleMen} fluid width={150} />
                                                                    ) : (
                                                                        <Image src={appleWomen} fluid width={150} />
                                                                    )
                                                                )
                                                            }

                                                            {
                                                                // body type: hourglass
                                                                (result.bodyShape === "hourglass") && (
                                                                    gender === "male" ? (
                                                                        <Image src={hourglassMen} fluid width={150} />
                                                                    ) : (
                                                                        <Image src={hourglassWomen} fluid width={150} />
                                                                    )
                                                                )
                                                            }

                                                            {
                                                                // body type: pear
                                                                (result.bodyShape === "pear") && (
                                                                    gender === "male" ? (
                                                                        <Image src={pearMen} fluid width={150} />
                                                                    ) : (
                                                                        <Image src={pearWomen} fluid width={150} />
                                                                    )
                                                                )
                                                            }

                                                            {
                                                                // body type: banana
                                                                (result.bodyShape === "banana") && (
                                                                    gender === "male" ? (
                                                                        <Image src={bananaMen} fluid width={150} />
                                                                    ) : (
                                                                        <Image src={bananaWomen} fluid width={150} />
                                                                    )
                                                                )
                                                            }
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                What Body Shape Says About Your Health
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {result.body}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={healthImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                Your Health Issues
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {result.health}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={smokingImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                Health Effects of Cigarette Smoking
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {HTMLparser(`${result.smoking}`)}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={alcohalImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                Alcohol's Effects on the Body
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {result.alcohol}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={sleepImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                How sleep habits effects on your health
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {result.sleep}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={lifestyleImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                Lifestyle :- Daily acivity level
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {result.activity}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={waterImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                How much water you should you drink per day
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {HTMLparser(`${result.water}`)}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                {/* ITEM */}
                                                <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5">
                                                    {/* LT SEC */}
                                                    <Col xs={12} md={5} className="lt-sec">
                                                        <div className="inner text-center">
                                                            <Image src={vegeImg} fluid />
                                                        </div>
                                                    </Col>

                                                    {/* RT SEC */}
                                                    <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                                        <div className="inner">
                                                            <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                                                Consumption of fruit and veg per day
                                                            </p>
                                                            <p className="desc font-size-16 font-weight-600 st-text-gray">
                                                                {result.fruits}
                                                            </p>
                                                        </div>
                                                    </Col>
                                                </div>

                                                <Col xs={12} className="mb-3 mb-lg-4">
                                                    <Link to="/health-meter" className="btn st-btn st-btn-lg st-btn-primary font-weight-700">Back</Link>
                                                </Col>
                                            </Row>
                                        </React.Fragment>

                                    ) : (
                                        <p className="text-center">No data found</p>
                                    )
                                }

                            </Container>
                        </div>

                        {/* FOOTER */}
                        {/* <Footer /> */}
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
