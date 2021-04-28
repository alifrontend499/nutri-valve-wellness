import React, { Component } from 'react'

// styles
import './styles/disclaimer-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

// components
// import Header from 'components/CommonComponents/Header/Header'
// import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'


export default class Disclaimer extends Component {
    render() {
        return (
            <>
                {/* header */}
                {/* <Header /> */}

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Disclaimer"
                        lastLinkName="Disclaimer"
                        lastLinkPath="/disclaimer"
                    />

                    {/* disclaimer section */}
                    <div id="disclaimer-sec" className="ST_def-pad-TB st-bg-slate">
                        <Container>
                            <Row className="disclaimer-sec">
                                <Col xs={12} className="item mb-3 mb-lg-5">
                                    <p className="desc font-size-17 mb-3 mb-lg-4">
                                        NUTRIVALVE WELLNESS, hereby clarify that results may vary from person to person depending upon age, gender, basal metabolic rate, medical history, family history, lifestyle and physical activity. All treatments and after care are suggested by experts and customized as per individual requirement to give best possible results.
                                    </p>
                                    <p className="desc font-size-17 mb-3 mb-lg-4">
                                        The information shared on this website is general information provided by NUTRIVALVE WELLNESS and while we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any on such information is therefore strictly at your own risk.
                                        In no event will shall NUTRIVALVE WELLNESS be liable for any loss or damage including without limitation, direct, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits or any loss or damage arising out of, or in connection with the use of this website.
                                    </p>
                                    <p className="desc font-size-17 mb-3 mb-lg-4">
                                        You are aware that you may be re-directed to third party websites for whatsoever reasons. You hereby indemnify NUTRIVALVE WELLNESS from loss or damage of whatsoever nature caused to you or any other person from the use of such third-party websites which may or may not be controlled by NUTRIVALVE WELLNESS. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, NUTRIVALVE WELLNESS takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond the control of NUTRIVALVE WELLNESS
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* footer */}
                    {/* <Footer /> */}
                </section>
            </>
        )
    }
}
