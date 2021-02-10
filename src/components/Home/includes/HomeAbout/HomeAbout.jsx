import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

// home style
import '../../styles/home-styles.css'

// section img
import secImg from 'assets/images/about-us-img.png'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// router
import { Link } from 'react-router-dom';

export default class HomeAbout extends Component {
    render() {
        return (
            <div id="home-about-us" className="ST_def-pad-TB">
                <Container>
                    <Row className="home-about-us flex-column-reverse flex-md-row">
                        {/* lt-sec */}
                        <Col xs={12} md={5} className="lt-sec pt-3 pt-lg-5">
                            <div className="inner pr-lg-3">
                                <Image src={secImg} fluid />
                            </div>
                        </Col>

                        {/* rt-sec */}
                        <Col xs={12} md={7} className="rt-sec">
                            <div className="inner">
                                <div className="st-heading-wrapper mb-3 mb-lg-4">
                                    <p className="st-line-heading line-secondary d-inline-block font-family-primary-bold st-text-secondary position-relative mb-2">About Us</p>
                                    <p className="st-heading heading-sm font-family-sec font-family-secondary-bold">Dr. Nurvi Kanani</p>
                                </div>
                                <p className="desc font-size-17 st-text-gray mb-3">
                                    Influenced by the dream to improve maximum lives with good health and food, Dr Nurvi pursued “Post-Graduation in Clinical Nutrition” and “Obesity Management”. To gain excellence in her field she further specialized herself in “Bachelors in Yogic Science and Naturopathy” followed by MD in Alternative Medicines which gave her immense knowledge about medical and alternative approaches to improve an individual’s health.
                                </p>
                                <p className="desc font-size-17 st-text-gray mb-3">
                                    She closely worked in the field of food industry & restaurant chains. She has been highly experience in the field of nutrition and dietetics as she had worked with one of the best gym, hospital and chain of clinics and helped countless amount of people to overcome diabetes, infertility and hormonal imbalance in women, pre-natal and post-natal diets, thyroid, kidney & liver diseases, cancer and obesity.
                                </p>
                                <p className="desc font-size-17 st-text-gray mb-3">
                                    She further flourished herself as a young and renowned nutritionist in wellness industry after creating nutrivalvewellness.com which is now helping more than 10,000+ people globally to manage their weight and fight all kinds of medical conditions.
                                </p>
                                <p className="desc font-size-17 st-text-gray mb-3">
                                    The online customized diet plans, recipes, various guides are being appreciated by all our clients globally and by many institutions.
                                </p>
                                <Link to="/about-us" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-15">
                                    <span>View More</span>
                                    <FeatherIcon
                                        icon="chevron-right"
                                        className="ml-1"
                                        size="17"
                                    />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
