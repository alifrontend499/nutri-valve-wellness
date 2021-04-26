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
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// icons : feather
import FeatherIcon from 'feather-icons-react';
import { Helmet } from 'react-helmet'


export default class ContactUs extends Component {
    render() {
        return (
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nutri Health Care | Contact Us</title>
                <link rel="canonical" href="" />
                <meta name="description" content="Contact Us" />
            </Helmet>
                {/* header */}
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
                                <Col xs={12} lg={4} className="contact-item mb-3 mb-lg-0">
                                    <div className="contact-item-inner bg-white st-block-box-shadow py-4 px-2">
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
                                <Col xs={12} lg={4} className="contact-item mb-3 mb-lg-0">
                                    <div className="contact-item-inner bg-white st-block-box-shadow py-4 px-2">
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
                                <Col xs={12} lg={4} className="contact-item mb-3 mb-lg-0">
                                    <div className="contact-item-inner bg-white st-block-box-shadow py-4 px-2">
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

                    {/* contact us section 2 */}
                    <div id="contact-us-sec-2" className="ST_def-pad-TB st-bg-slate">
                        <Container>
                            <Row className="contact-us-sec-2">
                                <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-5">
                                    <p className="st-heading font-family-secondary-bold">
                                        Have a Question for Us?
                                    </p>
                                </Col>

                                {/* form field */}
                                <Col xs={12} md={4} className="form-item mb-3 mb-lg-4">
                                    <div className="st-form">
                                        <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Name</label>
                                        <input type="text" className="form-control bg-transparent" />
                                    </div>
                                </Col>

                                {/* form field */}
                                <Col xs={12} md={4} className="form-item mb-3 mb-lg-4">
                                    <div className="st-form">
                                        <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Mobile Number</label>
                                        <input type="text" className="form-control bg-transparent" />
                                    </div>
                                </Col>

                                {/* form field */}
                                <Col xs={12} md={4} className="form-item mb-3 mb-lg-4">
                                    <div className="st-form">
                                        <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Email Address</label>
                                        <input type="text" className="form-control bg-transparent" />
                                    </div>
                                </Col>

                                {/* form field */}
                                <Col xs={12} className="form-item mb-3 mb-lg-4">
                                    <div className="st-form">
                                        <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Message Here</label>
                                        <textarea rows="5" className="form-control bg-transparent"></textarea>
                                    </div>
                                </Col>

                                {/* form field */}
                                <Col xs={12} className="btns mb-3 mb-lg-4 text-center pt-2">
                                    <button className="btn st-btn st-btn-primary st-btn-lg font-size-13 font-weight-800 text-uppercase">
                                        Send Now
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    </div>


                    {/* contact us section map */}
                    <div id="contact-us-sec-map">
                        <Container fluid className="px-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.63621230567483!2d72.84103749314559!3d19.0997842794111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b747057737%3A0xed3360204966eb7d!2s15%2C%20Sarojini%20Rd%2C%20LIC%20Colony%2C%20Suresh%20Colony%2C%20Vile%20Parle%20West%2C%20Mumbai%2C%20Maharashtra%20400056!5e0!3m2!1sen!2sin!4v1613288859670!5m2!1sen!2sin"
                                width="100%"
                                height="480"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"></iframe>
                        </Container>
                    </div>

                    {/* footer */}
                    <Footer />
                </section>
            </>
        )
    }
}
