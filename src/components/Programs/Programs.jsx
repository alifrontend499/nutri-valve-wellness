import React, { Component } from 'react'

// styles
import './styles/programs-styles.css'

// bootstrap
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import HTMLparser from "html-react-parser";

// components
// import Header from 'components/CommonComponents/Header/Header'
// import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

import ProgramsSearch from './includes/ProgramsSearch'
import ProgramPlans from './includes/ProgramPlans'

// api: common
import { getPost, cancelGetPost } from 'utlis/apis/API_common'

// images
import programGirl from 'assets/images/program-girl-img.png'
import { Helmet } from 'react-helmet';

// redux
import { connect } from 'react-redux';


import FooterTopSec from 'components/CommonComponents/Footer/includes/FooterTopSec';

class Programs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            post: [],
            slug: ""
        };
    }
    componentDidMount() {
        const { slug } = this.props.match.params;
        // MAKING USER REQUEST
        this.setState({
            loading: true,
            slug
        }, () => {
            getPost(this.state.slug).then(res => {
                this.setState({
                    loading: false
                });

                if (res) {
                    this.setState({
                        post: res.data
                    });
                }
            });
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { slug } = this.props.match.params;
        if (slug !== prevState.slug) {
            // MAKING USER REQUEST
            this.setState({
                loading: true,
                slug
            }, () => {
                getPost(this.state.slug).then(res => {
                    this.setState({
                        loading: false
                    });

                    if (res) {
                        this.setState({
                            post: res.data
                        });
                    }
                });
            });
        }
    }

    componentWillUnmount() {
        // canceling api
        cancelGetPost()
    }


    render() {
        const { post } = this.state;
        return (
            <>
                <Helmet>
                    <title>Nutri Health Care | Programs</title>
                    <link rel="canonical" href="" />
                    <meta name="description" content="Programs" />
                </Helmet>
                {/* <Header /> */}

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Programs"
                        lastLinkName="Programs"
                        lastLinkPath="/programs"
                    />
                    {/* P SEARCH */}
                    <ProgramsSearch
                        parentProps={this.props} />

                    {
                        this.state.loading ? (
                            <div className="nav-dropdown-loading text-center py-3">
                                <Spinner animation="border" size="sm" className="position-relative mr-2" style={{ top: 1 }} />
                            </div>
                        ) : (
                            <>
                                {/* PROGRAM WEIGHT LOSS CHALLENGE SECTION */}
                                <section id="program-weight-loss-challenge" className="ST_def-mar-T">
                                    <Container>
                                        <Row className="program-weight-loss-challenge">
                                            {/* header */}
                                            <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-4">
                                                <p className="st-heading heading-xs font-family-secondary-bold mb-3 mb-lg-4">{post && post.title}</p>
                                                <div className="desc font-size-15 st-text-light">
                                                    {
                                                        (post && post.content) &&
                                                        HTMLparser(`${post.content}`)
                                                    }
                                                </div>
                                            </Col>


                                            <Col xs={12} md={10} lg={9} className="row align-items-center mx-auto nd-sec">
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
                                                        {
                                                            post.features && HTMLparser(post.features)
                                                        }
                                                        {/* <p className="desc st-text-light mb-2">1. Customised, Easy and Effective Diet Plans </p>
                                                        <p className="desc st-text-light mb-2">2. Weight, Inch and Photo Trackers</p>
                                                        <p className="desc st-text-light mb-2">3. Arogya Access</p>
                                                        <p className="desc st-text-light mb-2">4. Periodic Calls with your nutritionist</p>
                                                        <p className="desc st-text-light mb-2">5. Unlimited queries on email</p>
                                                        <p className="desc st-text-light mb-2">6. 1500+ Healthy NW Recipes</p>
                                                        <p className="desc st-text-light mb-2">7. NW Wallet & Reward Points</p> */}
                                                    </div>
                                                </Col>
                                            </Col>
                                        </Row>
                                    </Container>
                                </section>

                                {/* PROGRAM PLANS SECTION */}
                                <ProgramPlans />
                            </>
                        )
                    }

                </section>

                {/* FOOTER TOP SEC */}
                <div id="footer-top-sec" className="st-bg-outer-space">
                    <FooterTopSec plansText={
                        post.disclaimer && post.disclaimer
                    } />
                </div>
            </>
        )
    }
}

const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken
    };
}

export default connect(getDataFromStore, null)(Programs)