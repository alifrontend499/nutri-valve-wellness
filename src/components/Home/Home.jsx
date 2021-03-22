import React, { Component } from 'react'

// styles
import './styles/home-styles.css'

// react bootstrap
import { Col, Container, Row } from 'react-bootstrap'

// components
import Header from 'components/CommonComponents/Header/Header'
import HomeSlider from './includes/HomeSlider/HomeSlider'
import WhatWeOffer from './includes/WhatWeOffer/WhatWeOffer'
import HomeAbout from './includes/HomeAbout/HomeAbout'
import StoryOfSuccess from './includes/StoryOfSuccess/StoryOfSuccess'
import HomeDailyTips from './includes/HomeDailyTips/HomeDailyTips'
import OurBlogs from 'components/CommonComponents/OurBlogs/OurBlogs'
import Footer from 'components/CommonComponents/Footer/Footer'
import HealthMeter from 'components/CommonComponents/HealthMeter/HealthMeter'

// images
import healthMeterBg from 'assets/images/homepage-health-meter-bg.jpg'

// api: common
import { checkUser } from 'utlis/apis/common'

export default class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // MAKING USER REQUEST
        checkUser('sysadmin@admin.com', 'SysAdmin123').then(res => {
            console.log('res  + ', res)
        })
    }

    render() {
        return (
            <div>
                <Header />

                <section id="st-wrapper">
                    <HomeSlider />

                    <WhatWeOffer />

                    {/* HOME HEALTH METER */}
                    <section
                        id="home-health-meter"
                        className="ST_def-pad-TB"
                        style={{ backgroundImage: `url("${healthMeterBg}")` }}>
                        <Container>
                            <Row className="home-health-meter">
                                <Col xs={12} md={8} lg={7} className="ml-auto">
                                    <div className="inner">
                                        <HealthMeter />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <HomeAbout />

                    <StoryOfSuccess />

                    <HomeDailyTips />

                    <OurBlogs includeHeading={true} limit={3} />

                    <Footer />
                </section>

            </div>
        )
    }
}
