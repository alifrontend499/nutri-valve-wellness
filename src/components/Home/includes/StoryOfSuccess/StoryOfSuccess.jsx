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
import secImg from 'assets/images/story-of-success-img.png'
import secBg from 'assets/images/story-of-success-bg.jpg'

// SLICK SLIDER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class StoryOfSuccess extends Component {
    render() {
        // settings for slider
        const settings = {
            dots: true,
            autoplay: false,
            // fade: true,
            speed: 2000,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div id="story-of-sucess"
                className="ST_def-pad-TB"
                style={{ backgroundImage: `url('${secBg}')` }}>
                <Container>
                    <div className="story-of-sucess">
                        <Slider {...settings}>
                            {/* slider-item */}
                            <div className="slider-item">
                                <Row className="slider-item-inner">
                                    {/* lt-sec */}
                                    <Col xs={12} md={6} className="lt-sec">
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

                                            <p className="desc st-text-light font-size-18 font-weight-600 mb-2 mt-4 mt-lg-5">
                                                Md. Mahedi Amin
                                                </p>
                                            <p className="desc st-text-light font-size-13 text-uppercase">
                                                manager/client
                                                </p>
                                        </div>
                                    </Col>

                                    {/* rt-sec */}
                                    <Col xs={12} md={6} className="rt-sec pt-3 pt-md-0">
                                        <div className="inner">
                                            <Image src={secImg} fluid />
                                        </div>
                                    </Col>
                                </Row>
                            </div>

                            {/* slider-item */}
                            <div className="slider-item">
                                <Row className="slider-item-inner">
                                    {/* lt-sec */}
                                    <Col xs={12} md={6} className="lt-sec">
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

                                            <p className="desc st-text-light font-size-18 font-weight-600 mb-2 mt-4 mt-lg-5">
                                                Md. Mahedi Amin
                                                </p>
                                            <p className="desc st-text-light font-size-13 text-uppercase">
                                                manager/client
                                                </p>
                                        </div>
                                    </Col>

                                    {/* rt-sec */}
                                    <Col xs={12} md={6} className="rt-sec pt-3 pt-md-0">
                                        <div className="inner">
                                            <Image src={secImg} fluid />
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
