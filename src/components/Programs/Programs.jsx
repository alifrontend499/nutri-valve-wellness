import React, { Component } from 'react'

// styles
import './styles/programs-styles.css'

// bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

import ProgramsSearch from './includes/ProgramsSearch'
import ProgramPlans from './includes/ProgramPlans'

// images
import programGirl from 'assets/images/program-girl-img.png'

export default class Programs extends Component {
    render() {
        return (
            <>
                <Header />

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Programs"
                        lastLinkName="Programs"
                        lastLinkPath="/programs"
                    />
                    {/* P SEARCH */}
                    <ProgramsSearch />

                    {/* PROGRAM WEIGHT LOSS CHALLENGE SECTION */}
                    <section id="program-weight-loss-challenge" className="ST_def-mar-T">
                        <Container>
                            <Row className="program-weight-loss-challenge">
                                {/* header */}
                                <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-4">
                                    <p className="st-heading heading-xs font-family-secondary-bold mb-3 mb-lg-4">Weight Loss Chalange</p>
                                    <p className="desc font-size-15 st-text-gray">
                                        An excellent program for one who has sedentary lifestyle, desk job and post pregnancy weight issues and wants to lose weight, inch loss, fat loss. The program does not include any artificial supplements and can be easily followed with no crash meals.
                                    </p>
                                </Col>


                                <Col xs={12} md={10} lg={9} className="row align-items-center mx-auto">
                                    {/* lt-sec */}
                                    <Col xs={12} md={6} className='lt-sec'>
                                        <div className="inner">
                                            <Image src={programGirl} fluid style={{ verticalAlign: 'bottom' }} />
                                        </div>
                                    </Col>
                                    {/* rt-sec */}
                                    <Col xs={12} md={6} className='rt-sec'>
                                        <div className="inner">
                                            <p className="st-heading heading-xs font-family-secondary-bold mb-3">Program Features:</p>
                                            <p className="desc st-text-gray mb-2">1. Customised, Easy and Effective Diet Plans </p>
                                            <p className="desc st-text-gray mb-2">2. Weight, Inch and Photo Trackers</p>
                                            <p className="desc st-text-gray mb-2">3. Arogya Access</p>
                                            <p className="desc st-text-gray mb-2">4. Periodic Calls with your nutritionist</p>
                                            <p className="desc st-text-gray mb-2">5. Unlimited queries on email</p>
                                            <p className="desc st-text-gray mb-2">6. 1500+ Healthy NW Recipes</p>
                                            <p className="desc st-text-gray mb-2">7. NW Wallet & Reward Points</p>
                                        </div>
                                    </Col>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* PROGRAM PLANS SECTION */}
                    <ProgramPlans />

                    <Footer />
                </section>
            </>
        )
    }
}
