import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Image
} from 'react-bootstrap';
import HTMLparser from "html-react-parser";

// home style
import '../../styles/home-styles.css'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// SLICK SLIDER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// slider images
import blankSpot from 'assets/images/program-girl-img.png'
// import sliderImg2 from 'assets/images/what-we-offer/slider-img2.jpg'
// import sliderImg3 from 'assets/images/what-we-offer/slider-img3.jpg'
// import sliderImg4 from 'assets/images/what-we-offer/slider-img4.jpg'
// import sliderImg5 from 'assets/images/what-we-offer/slider-img5.jpg'
import { getPosts } from 'utlis/apis/API_common';

// router
import { Link } from 'react-router-dom'

// local storage
import { getItemFromLocalStorage } from 'utlis/localStorage/localStorage'

// redux
import { connect } from 'react-redux';

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


class WhatWeOffer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: {}
        };
    }
    componentDidMount() {
        // let commonToken = getItemFromLocalStorage('commanToken')
        let commonToken = this.props.commonToken

        getPosts(commonToken, "program").then(res => {
            // console.log('program ', res)
            if (res) {
                this.setState({ posts: res.data.items });
            }
        }).catch(err => {
            console.log('Some error occured ', err.message)
        });
        // if (commonToken) {
        // } else {
        // }
    }
    render() {
        const { posts } = this.state;
        // settings for slider
        const settings = {
            autoplay: true,
            pauseOnHover: true,
            speed: 500,
            infinite: (posts && posts.length > 4) ? true : false,
            autoplaySpeed: 2500,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            prevArrow: <SliderNextArrow />,
            nextArrow: <SliderPrevArrow />,
            responsive: [
                {
                    infinite: (posts && posts.length > 5) ? true : false,
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    infinite: (posts && posts.length > 2) ? true : false,
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    infinite: (posts && posts.length > 1) ? true : false,
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    infinite: (posts && posts.length) ? true : false,
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
                            {
                                (posts && posts.length) ? (
                                    <Slider {...settings}>
                                        {/* slider-item */}
                                        {posts.map((post, index) =>
                                            <div key={index} className="slider-item pt-1">
                                                <div className="slider-item-inner px-2 px-lg-3">
                                                    {/* img sec */}
                                                    <Link to={`/program/${post.slug}`} className="img-sec d-flex align-items-center justify-content-center rounded-circle overflow-hidden mx-auto mb-3 mb-lg-4">

                                                        {post.coverImage ? (<Image src={post.fullUrlImage} fluid className="img-fluid-height" />) : <Image src={blankSpot} fluid className="img-fluid-height" />}
                                                    </Link>

                                                    {/* text sec */}
                                                    <div className="text-sec text-center">
                                                        <Link to={`/program/${post.slug}`} className="st-heading heading-xs font-family-sec d-inline-block text-decoration-none st-text-dark font-family-secondary-bold mb-3">
                                                            {post.title}
                                                        </Link>
                                                        <p className="desc st-text-gray mb-3">
                                                            {HTMLparser(`${post.content.substring(0, 100).replace(/(<([^>]+)>)/gi, "")}`)}
                                                        </p>
                                                        <Link to={`/program/${post.slug}`} className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-13">
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
                                        )}
                                    </Slider>
                                ) : (
                                    <div className="no-data-found-p text-center">
                                        <p className="st-text-gray font-weight-600">No programs found</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}


const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken
    };
}

export default connect(getDataFromStore, null)(WhatWeOffer)