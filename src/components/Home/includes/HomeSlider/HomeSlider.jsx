import React, { Component } from 'react'

// bootstrap
import {
    Container
} from 'react-bootstrap';

// home style
import '../../styles/home-styles.css'

// SLICK SLIDER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slider images
import sliderImg1 from 'assets/images/homeslider/slider-img1.jpg'
import sliderImg2 from 'assets/images/homeslider/slider-img2.jpg'
import sliderImg3 from 'assets/images/homeslider/slider-img3.jpg'

export default class HomeSlider extends Component {
    render() {
        // settings for slider
        const settings = {
            infinite: true,
            autoplay: true,
            fade: true,
            speed: 2000,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div id="home-slider" className="overflow-hidden">
                <Container fluid className="px-0">
                    <div className="home-slider">
                        <Slider {...settings}>
                            {/* slider-item */}
                            <div className="slider-item">
                                <div
                                    className="slider-item-inner"
                                    style={{ backgroundImage: `url(${sliderImg1})` }}>
                                    <Container>
                                        {/* slider caption */}
                                        <div className="caption">
                                            <p className="st-line-heading line-secondary font-family-primary-bold st-text-secondary position-relative mb-2 mb-lg-3">
                                                Welcome to Nutri Valve
                                            </p>
                                            <p className="st-heading font-family-secondary-bold">
                                                Loss The <span className="underline-it underline-secondary position-relative st-text-secondary">Fat!</span> <br />
                                                Eat Right, Be Bright!
                                            </p>
                                        </div>
                                    </Container>
                                </div>
                            </div>

                            {/* slider-item */}
                            <div className="slider-item">
                                <div
                                    className="slider-item-inner"
                                    style={{ backgroundImage: `url(${sliderImg2})` }}>
                                    <Container>
                                        {/* slider caption */}
                                        <div className="caption">
                                            <p className="st-line-heading line-secondary font-family-primary-bold st-text-secondary position-relative mb-3">
                                                Welcome to Nutri Valve
                                            </p>
                                            <p className="st-heading font-family-secondary-bold">
                                                Loss The <span className="underline-it underline-secondary position-relative st-text-secondary">Fat!</span> <br />
                                                Eat Right, Be Bright!
                                            </p>
                                        </div>
                                    </Container>
                                </div>
                            </div>

                            {/* slider-item */}
                            <div className="slider-item">
                                <div
                                    className="slider-item-inner"
                                    style={{ backgroundImage: `url(${sliderImg3})` }}>
                                    <Container>
                                        {/* slider caption */}
                                        <div className="caption">
                                            <p className="st-line-heading line-secondary font-family-primary-bold st-text-secondary position-relative mb-3">
                                                Welcome to Nutri Valve
                                            </p>
                                            <p className="st-heading font-family-secondary-bold">
                                                Loss The <span className="underline-it underline-secondary position-relative st-text-secondary">Fat!</span> <br />
                                                Eat Right, Be Bright!
                                            </p>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </div>
        )
    }
}
