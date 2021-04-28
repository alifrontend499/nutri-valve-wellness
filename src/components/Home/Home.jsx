import React, { Component } from 'react'
import { Helmet } from "react-helmet";

// styles
import './styles/home-styles.css'

// react bootstrap
import { Col, Container, Row } from 'react-bootstrap'

// components
// import Header from 'components/CommonComponents/Header/Header'
// import Footer from 'components/CommonComponents/Footer/Footer'
import HomeSlider from './includes/HomeSlider/HomeSlider'
import WhatWeOffer from './includes/WhatWeOffer/WhatWeOffer'
import HomeAbout from './includes/HomeAbout/HomeAbout'
import StoryOfSuccess from './includes/StoryOfSuccess/StoryOfSuccess'
import HomeDailyTips from './includes/HomeDailyTips/HomeDailyTips'
import OurBlogs from 'components/CommonComponents/OurBlogs/OurBlogs'
import HealthMeter from 'components/CommonComponents/HealthMeter/HealthMeter'

// images
import healthMeterBg from 'assets/images/homepage-health-meter-bg.jpg'

export default class Home extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nutri Health Care</title>
                    <link rel="canonical" href="" />
                    <meta name="description" content="Nutri Health Care" />
                </Helmet>

                <section id="st-wrapper" className="wrapper__homepage">
                    <HomeSlider />

                    <WhatWeOffer />

                    {/* HOME HEALTH METER */}
                    <section
                        id="home-health-meter"
                        className="ST_def-pad-TB"
                        style={{ backgroundImage: `url("${healthMeterBg}")` }}>
                        <Container>
                            <Row className="home-health-meter">
                                <Col xs={12} className="ml-auto">
                                    <div className="inner">
                                        <HealthMeter fromHeader />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <HomeAbout />

                    <StoryOfSuccess />

                    <HomeDailyTips />

                    <OurBlogs includeHeading={true} limit={3} />
                </section>
            </React.Fragment>
        )
    }
}
