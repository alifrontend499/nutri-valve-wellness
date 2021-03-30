import React, { Component } from 'react'

// styles
import './styles/programs-styles.css'

// bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap'
import HTMLparser from "html-react-parser";

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

import ProgramsSearch from './includes/ProgramsSearch'
import ProgramPlans from './includes/ProgramPlans'

// api: common
import { getPost } from 'utlis/apis/common'
// local storage
import { getItemFromLocalStorage } from 'utlis/localStorage/localStorage'

// images
import programGirl from 'assets/images/program-girl-img.png'

export default class Programs extends Component {
    state = {post: []};
    componentDidMount() {
        const { slug } = this.props.match.params;
        // console.log(slug);
        // MAKING USER REQUEST
        getPost(            
            localStorage.getItem('commanToken'),
            slug
        ).then(res => {
            this.setState({ post: res.data });
            // console.log('res  + ', res)
        });
    }
    render() {
        const {post} = this.state;
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
                                    <p className="st-heading heading-xs font-family-secondary-bold mb-3 mb-lg-4">{post.title}</p>
                                    <p className="desc font-size-15 st-text-gray">
                                    {HTMLparser(`${post.content}`)}
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
                                    <Col xs={12} md={6} className='rt-sec my-3 my-md-0'>
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
