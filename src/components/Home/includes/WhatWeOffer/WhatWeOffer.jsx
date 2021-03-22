import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Image
} from 'react-bootstrap';

// home style
import '../../styles/home-styles.css'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// SLICK SLIDER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slider images
import sliderImg1 from 'assets/images/what-we-offer/slider-img1.jpg'
import sliderImg2 from 'assets/images/what-we-offer/slider-img2.jpg'
import sliderImg3 from 'assets/images/what-we-offer/slider-img3.jpg'
import sliderImg4 from 'assets/images/what-we-offer/slider-img4.jpg'
import sliderImg5 from 'assets/images/what-we-offer/slider-img5.jpg'
import { getPosts } from 'utlis/apis/common';

// router
import { Link } from 'react-router-dom'

// local storage
import { getItemFromLocalStorage } from 'utlis/localStorage/localStorage'

function SliderNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} d-flex align-items-center justify-content-center rounded-circle`}
            style={{ ...style }}
            onClick={onClick}
        >
            <FeatherIcon icon="chevron-left" />
        </div>
    );
}

function SliderPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} d-flex align-items-center justify-content-center rounded-circle`}
            style={{ ...style }}
            onClick={onClick}
        >
            <FeatherIcon icon="chevron-right" />
        </div>
    );
}



export default class WhatWeOffer extends Component {
    componentDidMount() {
        let commonToken = getItemFromLocalStorage('commanToken')
        if (commonToken) {
            getPosts(commonToken, "program").then(res => {
                console.log('res ', res)
            });
        } else {
            console.log('no token from the local storage')
        }
    }
    render() {
        // settings for slider
        const settings = {
            infinite: true,
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            autoplaySpeed: 2500,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            prevArrow: <SliderNextArrow />,
            nextArrow: <SliderPrevArrow />,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 567,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        };
        return (
            <div id="what-we-offer" className="ST_def-pad-TB">
                <Container fluid>
                    <div className="what-we-offer">
                        {/* slider heading */}
                        <div className="st-heading-wrapper text-center mb-3 mb-lg-5">
                            <p className="st-line-heading line-secondary d-inline-block font-family-primary-bold st-text-secondary position-relative mb-2">what we offer</p>
                            <p className="st-heading heading-sm font-family-sec font-family-secondary-bold">
                                Programs
                            </p>
                        </div>

                        {/* slider container */}
                        <div className="slider-container px-lg-2">
                            <Slider {...settings}>
                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg1} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Personal Coaching
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Picking out the session matches your goals and getting.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg2} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Weight Loss
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Physical exercise is also for your health & beauty.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg3} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Bridal Diet Plan
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Physical exercise is also for your health & beauty.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg4} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Balanced Diet
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Eating habits should be regulated & controlled for body.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg5} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Child Nutrition
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                What better time to take the kids out to the playground.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg1} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Personal Coaching
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Picking out the session matches your goals and getting.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg2} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Weight Loss
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Physical exercise is also for your health & beauty.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg3} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Bridal Diet Plan
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Physical exercise is also for your health & beauty.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg4} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Balanced Diet
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                Eating habits should be regulated & controlled for body.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* slider-item */}
                                <div className="slider-item pt-1">
                                    <div className="slider-item-inner px-2 px-lg-3">
                                        {/* img sec */}
                                        <Link to="/programs" className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">
                                            <Image src={sliderImg5} fluid className="img-fluid-height" />
                                        </Link>

                                        {/* text sec */}
                                        <div className="text-sec text-center">
                                            <Link to="/programs" className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                Child Nutrition
                                            </Link>
                                            <p className="desc st-text-gray mb-3">
                                                What better time to take the kids out to the playground.
                                            </p>
                                            <Link to="/programs" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
                                                <span>MORE</span>
                                                <FeatherIcon
                                                    icon="arrow-right-circle"
                                                    className="ml-2"
                                                    size="18"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
