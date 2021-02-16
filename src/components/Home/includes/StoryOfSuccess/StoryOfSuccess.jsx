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
import secImg1 from 'assets/images/story-of-success/story-of-success-img1.png'
import secImg2 from 'assets/images/story-of-success/story-of-success-img2.jpg'
import secImg3 from 'assets/images/story-of-success/story-of-success-img3.jpg'
import secImg4 from 'assets/images/story-of-success/story-of-success-img4.jpg'
import secBg from 'assets/images/story-of-success/story-of-success-bg.jpg'

// SLICK SLIDER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons : feather
import FeatherIcon from 'feather-icons-react';

// router
import { Link } from 'react-router-dom';

export default class StoryOfSuccess extends Component {
    render() {
        // settings for slider
        const settings = {
            dots: true,
            autoplay: true,
            pauseOnHover: true,
            fade: true,
            speed: 500,
            autoplaySpeed: 2500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '10px'
        };

        return (
            <div id="story-of-sucess"
                className="ST_def-pad-TB"
                style={{ backgroundImage: `url('${secBg}')` }}>
                <Container>
                    <div className="story-of-sucess overflow-hidden">
                        <Slider {...settings}>
                            {/* slider-item */}
                            <div className="slider-item">
                                <Row className="slider-item-inner">
                                    {/* lt-sec */}
                                    <Col xs={12} lg={6} className="lt-sec">
                                        <div className="inner">
                                            <div className="st-heading-wrapper mb-3 mb-lg-4 pt-md-3">
                                                <p className="st-heading heading-xs font-family-sec font-family-secondary-bold">Story Of Success</p>
                                            </div>
                                            <p className="desc st-text-gray font-size-17 font-weight-600 mb-3">
                                                I feel super positive and energetic - the feeling that I did not know of before.
                                            </p>
                                            <p className="desc st-text-gray mb-3">
                                                She closely worked in the field of food industry & restaurant chains. She has been highly experience in the field of nutrition and dietetics as she had worked with one of the best gym, hospital and chain of clinics and helped countless amount of people to overcome diabetes, infertility and hormonal imbalance in women, pre-natal and post-natal diets, thyroid, kidney & liver diseases, cancer and obesity.
                                            </p>

                                            <Link to="/success-story" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-15">
                                                <span>View More</span>
                                                <FeatherIcon
                                                    icon="chevron-right"
                                                    className="ml-1"
                                                    size="17"
                                                />
                                            </Link>
                                            <p className="desc st-text-gray font-size-18 font-weight-600 mb-2 mt-4 mt-lg-5">
                                                Md. Mahedi Amin
                                            </p>
                                            <p className="desc st-text-gray font-size-13 text-uppercase">
                                                manager/client
                                            </p>
                                        </div>
                                    </Col>

                                    {/* rt-sec */}
                                    <Col xs={12} lg={6} className="rt-sec pt-3 pt-lg-0">
                                        <div className="inner">
                                            <Image src={secImg1} fluid className="w-100" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* slider-item */}
                            <div className="slider-item">
                                <Row className="slider-item-inner">
                                    {/* lt-sec */}
                                    <Col xs={12} lg={6} className="lt-sec">
                                        <div className="inner">
                                            <div className="st-heading-wrapper mb-3 mb-lg-4 pt-md-3">
                                                <p className="st-heading heading-xs font-family-sec font-family-secondary-bold">Story Of Success</p>
                                            </div>
                                            <p className="desc st-text-light font-size-17 font-weight-600 mb-3">
                                                I feel super positive and energetic - the feeling that I did not know of before.
                                                </p>
                                            <p className="desc st-text-light mb-3">
                                                She closely worked in the field of food industry & restaurant chains. She has been highly experience in the field of nutrition and dietetics as she had worked with one of the best gym, hospital and chain of clinics and helped countless amount of people to overcome diabetes, infertility and hormonal imbalance in women, pre-natal and post-natal diets, thyroid, kidney & liver diseases, cancer and obesity.
                                                </p>
                                            <Link to="/success-story" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-15">
                                                <span>View More</span>
                                                <FeatherIcon
                                                    icon="chevron-right"
                                                    className="ml-1"
                                                    size="17"
                                                />
                                            </Link>
                                            <p className="desc st-text-light font-size-18 font-weight-600 mb-2 mt-4 mt-lg-5">
                                                Md. Mahedi Amin
                                                </p>
                                            <p className="desc st-text-light font-size-13 text-uppercase">
                                                manager/client
                                                </p>
                                        </div>
                                    </Col>

                                    {/* rt-sec */}
                                    <Col xs={12} lg={6} className="rt-sec pt-3 pt-lg-0">
                                        <div className="inner">
                                            <Image src={secImg2} fluid className="w-100" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* slider-item */}
                            <div className="slider-item">
                                <Row className="slider-item-inner">
                                    {/* lt-sec */}
                                    <Col xs={12} lg={6} className="lt-sec">
                                        <div className="inner">
                                            <div className="st-heading-wrapper mb-3 mb-lg-4 pt-md-3">
                                                <p className="st-heading heading-xs font-family-sec font-family-secondary-bold">Story Of Success</p>
                                            </div>
                                            <p className="desc st-text-light font-size-17 font-weight-600 mb-3">
                                                I feel super positive and energetic - the feeling that I did not know of before.
                                                </p>
                                            <p className="desc st-text-light mb-3">
                                                She closely worked in the field of food industry & restaurant chains. She has been highly experience in the field of nutrition and dietetics as she had worked with one of the best gym, hospital and chain of clinics and helped countless amount of people to overcome diabetes, infertility and hormonal imbalance in women, pre-natal and post-natal diets, thyroid, kidney & liver diseases, cancer and obesity.
                                                </p>
                                            <Link to="/success-story" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-15">
                                                <span>View More</span>
                                                <FeatherIcon
                                                    icon="chevron-right"
                                                    className="ml-1"
                                                    size="17"
                                                />
                                            </Link>
                                            <p className="desc st-text-light font-size-18 font-weight-600 mb-2 mt-4 mt-lg-5">
                                                Md. Mahedi Amin
                                                </p>
                                            <p className="desc st-text-light font-size-13 text-uppercase">
                                                manager/client
                                                </p>
                                        </div>
                                    </Col>

                                    {/* rt-sec */}
                                    <Col xs={12} lg={6} className="rt-sec pt-3 pt-lg-0">
                                        <div className="inner">
                                            <Image src={secImg3} fluid className="w-100" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* slider-item */}
                            <div className="slider-item">
                                <Row className="slider-item-inner">
                                    {/* lt-sec */}
                                    <Col xs={12} lg={6} className="lt-sec">
                                        <div className="inner">
                                            <div className="st-heading-wrapper mb-3 mb-lg-4 pt-md-3">
                                                <p className="st-heading heading-xs font-family-sec font-family-secondary-bold">Story Of Success</p>
                                            </div>
                                            <p className="desc st-text-light font-size-17 font-weight-600 mb-3">
                                                I feel super positive and energetic - the feeling that I did not know of before.
                                                </p>
                                            <p className="desc st-text-light mb-3">
                                                She closely worked in the field of food industry & restaurant chains. She has been highly experience in the field of nutrition and dietetics as she had worked with one of the best gym, hospital and chain of clinics and helped countless amount of people to overcome diabetes, infertility and hormonal imbalance in women, pre-natal and post-natal diets, thyroid, kidney & liver diseases, cancer and obesity.
                                                </p>
                                            <Link to="/success-story" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-15">
                                                <span>View More</span>
                                                <FeatherIcon
                                                    icon="chevron-right"
                                                    className="ml-1"
                                                    size="17"
                                                />
                                            </Link>
                                            <p className="desc st-text-light font-size-18 font-weight-600 mb-2 mt-4 mt-lg-5">
                                                Md. Mahedi Amin
                                                </p>
                                            <p className="desc st-text-light font-size-13 text-uppercase">
                                                manager/client
                                                </p>
                                        </div>
                                    </Col>

                                    {/* rt-sec */}
                                    <Col xs={12} lg={6} className="rt-sec pt-3 pt-lg-0">
                                        <div className="inner">
                                            <Image src={secImg4} fluid className="w-100" />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                        </Slider>
                    </div>
                </Container>
            </div>
        )
    }
}
