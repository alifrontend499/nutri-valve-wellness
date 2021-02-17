import React, { Component } from 'react'

// bootstrap
import { Col, Container, Row } from 'react-bootstrap'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'
import HealthMeter from 'components/CommonComponents/HealthMeter/HealthMeter'

export default class HealthMeterPage extends Component {
    render() {
        return (
            <>
                {/* HEADER */}
                <Header />

                <section id="st-wrapper">
                    {/* PAGE BANNER */}
                    <PageBanner
                        pageTitle="Health Meter"
                        lastLinkName="Health Meter"
                        lastLinkPath="/health-meter"
                    />

                    {/* HEALTH METER SEC */}
                    <section
                        id="page-health-meter"
                        className="ST_def-pad-TB st-bg-slate">
                        <Container>
                            <Row className="page-health-meter">
                                <Col xs={12} md={10} lg={8} className="mx-auto">
                                    <HealthMeter />
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* FOOTER */}
                    <Footer />
                </section>
            </>
        )
    }
}