import React, { Component } from 'react'

// styles
import './styles/contact-us-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

// components
import Header from 'components/common/Header/Header'
import Footer from 'components/common/Footer/Footer'
import PageBanner from 'components/common/PageBanner/PageBanner'

// icons : feather
import FeatherIcon from 'feather-icons-react';


export default class ContactUs extends Component {
    render() {
        return (
            <>
                <Header />

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Contact Us"
                        lastLinkName="Contact Us"
                        lastLinkPath="/contact-us"
                    />

                    {/* contact us section */}
                    <div id="contact-us" className="ST_def-pad-TB st-bg-slate">
                        <Container>
                            <Row className="contact-us">
                                <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-5">
                                    <p className="st-heading heading-sm font-family-secondary-bold mb-3">Contacts Info</p>
                                    <p className="desc font-size-15 st-text-gray">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni saepe velit deleniti a quam aliquam porro placeat consectetur dolores maxime quidem eaque perspiciatis, officia commodi autem totam nam aspernatur tempore.
                                    </p>
                                </Col>

                                {/* contact item */}
                                <Col xs={12} md={4} className="contact-item">
                                    <div className="contact-item-inner bg-white py-4 px-2">
                                        <div className="icon mb-3 text-center d-flex align-items-center justify-content-center mx-auto rounded-circle border">
                                            <FeatherIcon
                                                icon="user"
                                                size="30"
                                            />
                                        </div>
                                        <div className="text text-center">
                                            <p className="font-family-secondary-medium font-size-17">15, Sorjini Rd, LIC Colony, Suresh Colony, Ville Parle West, Mumbai, Maharashtra 400056</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* contact item */}
                                <Col xs={12} md={4} className="contact-item">
                                    <div className="contact-item-inner bg-white py-4 px-2">
                                        <div className="icon mb-3 text-center d-flex align-items-center justify-content-center mx-auto rounded-circle border">
                                            <FeatherIcon
                                                icon="mail"
                                                size="30"
                                            />
                                        </div>
                                        <div className="text text-center">
                                            <p className="font-family-secondary-medium font-size-17">info@nutrivalurwellness.com</p>
                                        </div>
                                    </div>
                                </Col>

                                {/* contact item */}
                                <Col xs={12} md={4} className="contact-item">
                                    <div className="contact-item-inner bg-white py-4 px-2">
                                        <div className="icon mb-3 text-center d-flex align-items-center justify-content-center mx-auto rounded-circle border">
                                            <FeatherIcon
                                                icon="phone"
                                                size="30"
                                            />
                                        </div>
                                        <div className="text text-center">
                                            <p className="font-family-secondary-medium font-size-17">
                                                +91 816 9771 907 <br />
                                                +1 (337)-829-7788
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>


                    <Footer />
                </section>
            </>
        )
    }
}
