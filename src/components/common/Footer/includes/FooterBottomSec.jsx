import React, { Component } from 'react'

// styles
import '../styles/footer-styles.css'

// icons : feather
import FeatherIcon from 'feather-icons-react';
// icons : fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faLinkedinIn,
    faPinterest
} from '@fortawesome/free-brands-svg-icons'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

// footer logo
import logoFooter from 'assets/images/logo-footer.png'

// router
import { Link } from 'react-router-dom';

export default class FooterBottomSec extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row className="footer-bottom-sec">
                        {/* footer item : one */}
                        <Col xs={12} md={4} lg={3} className="footer-item one">
                            {/* logo */}
                            <div className="img-sec pb-3 mb-3 border-bottom st-border-outer-space">
                                <Image src={logoFooter} fluid className="logo-footer" />
                            </div>

                            {/* links */}
                            <div className="links">
                                {/* link */}
                                <a href="mailto:info@nutrivaluewellnes.com"
                                    className="ht-link-email link-with-icon d-flex align-items-center text-decoration-none text-white font-size-15 mb-3"
                                    title="Mail To: info@nutrivaluewellnes.com">
                                    <FeatherIcon
                                        icon="mail"
                                        size="18"
                                        className="mr-2 st-text-secondary" />
                                    <span>info@nutrivaluewellnes.com</span>
                                </a>

                                {/* link */}
                                <a href="callto:+91 816 9771 597"
                                    className="ht-link-call link-with-icon d-flex align-items-center text-decoration-none text-white font-size-15"
                                    title="Call To: +91 816 9771 597">
                                    <FeatherIcon
                                        icon="phone-call"
                                        size="18"
                                        className="mr-2 st-text-secondary" />
                                    <span>+91 816 9771 597</span>
                                </a>
                            </div>

                            {/* social icons */}
                            <ul className="social-links-icons d-flex align-items-center mt-3 mt-lg-4">
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none text-white font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Facebook">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none text-white font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Instagram">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none text-white font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none text-white font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Youtube">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none text-white font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Linkedin">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none text-white font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Pinterest">
                                        <FontAwesomeIcon icon={faPinterest} />
                                    </a>
                                </li>
                            </ul>
                        </Col>

                        {/* footer item : two */}
                        <Col className="footer-item two">
                            <div className="inner">
                                <p className="heading text-white text-capitalize font-family-secondary-medium font-size-24 mb-3 mb-lg-4">quick links</p>

                                {/* footer links */}
                                <div className="footer-links">
                                    <a href="#" className="d-block mb-2 font-size-14">Nurvi’s Article</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Diabetes</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Superfoods</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Clinical Reads</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Weight Loss</a>
                                </div>
                            </div>
                        </Col>

                        {/* footer item : three */}
                        <Col className="footer-item three">
                            <div className="inner">
                                <p className="heading text-white text-capitalize font-family-secondary-medium font-size-24 mb-3 mb-lg-4">Programs</p>

                                {/* footer links */}
                                <div className="footer-links">
                                    <a href="#" className="d-block mb-2 font-size-14">Weight Loss Challenge</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Weight Loss Challenge</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Battle PCOS</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Body Transformation</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Weight Gain</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Pregnancy and Motherhood</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Reshape Intermittent</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Plateau Breaker</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Cleanse & Detox</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Bridal Diet Plan</a>
                                </div>
                            </div>
                        </Col>

                        {/* footer item : four */}
                        <Col className="footer-item four">
                            <div className="inner">
                                <p className="heading text-white text-capitalize font-family-secondary-medium font-size-24 mb-3 mb-lg-4">About Nutrivalve</p>

                                {/* footer links */}
                                <div className="footer-links">
                                    <Link to="/about-us" className="d-block mb-2 font-size-14">About Us</Link>
                                    <a href="#" className="d-block mb-2 font-size-14">Our Journey</a>
                                    <a href="#" className="d-block mb-2 font-size-14">How We Work</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Arogya</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Work With Us</a>
                                </div>
                            </div>
                        </Col>

                        {/* footer item : five */}
                        <Col className="footer-item five">
                            <div className="inner">
                                <p className="heading text-white text-capitalize font-family-secondary-medium font-size-24 mb-3 mb-lg-4">Help & Legal</p>

                                {/* footer links */}
                                <div className="footer-links">
                                    <a href="#" className="d-block mb-2 font-size-14">Help & Legal</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Terms & Privacy Policy</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Faq’s</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Disclaimer</a>
                                    <a href="#" className="d-block mb-2 font-size-14">Contact Us</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
