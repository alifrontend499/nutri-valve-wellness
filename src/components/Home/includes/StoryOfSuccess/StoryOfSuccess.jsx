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
import secBg from 'assets/images/story-of-success/story-of-success-bg.jpg'

// no data found image
import noImgFound from 'assets/images/no-image-found-logo.png'

// SLICK SLIDER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons : feather
import FeatherIcon from 'feather-icons-react';

// router
import { Link } from 'react-router-dom';

// stories api
import { getSuccessStories, cancelSuccessStoriesApi } from 'utlis/apis/API_successStories'

// helpers common
import { limitText, stripHTML } from 'utlis/helpers/Helpers_common'

export default class StoryOfSuccess extends Component {
    constructor(props) {
        super(props)

        this.STORY_TEXT_LIMIT = 300

        this.state = {
            loading: false,
            currentPage: 1,

            successStories: [],
        }
    }

    componentDidMount() {
        // CHECKING IF GLOBAL RECIPES DATA IS EMPTY
        this.setState({
            loading: true,
        })

        // GETTING INITIAL DATA
        getSuccessStories(this.props.commonToken, this.state.currentPage).then(res => {
            // console.log("getSuccessStories ", res);
            this.setState({
                loading: false,
                successStories: res.data.items ? res.data.items : []
            })
        }).catch(err => {
            console.log('error occured ', err.message)
        })
    }

    componentWillUnmount() {
        // canceling api
        cancelSuccessStoriesApi()
    }

    render() {
        const props = this.props;
        const state = this.state;

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

                            {
                                (state.successStories && state.successStories.length) ? state.successStories.map(item => (
                                    <div key={item.id} className="slider-item">
                                        <Row className="slider-item-inner">
                                            {/* lt-sec */}
                                            <Col xs={12} lg={6} className="lt-sec">
                                                <div className="inner">
                                                    <div className="st-heading-wrapper mb-3 mb-lg-4 pt-md-3">
                                                        <p className="st-heading heading-xs font-family-sec font-family-secondary-bold">Story Of Success</p>
                                                    </div>
                                                    {
                                                        // (stripHTML(item.content).length >= this.STORY_TEXT_LIMIT) ? (
                                                        (stripHTML(item.content).length >= this.STORY_TEXT_LIMIT) ? (
                                                            <React.Fragment>
                                                                <p className="desc st-text-light font-size-15 mb-3">
                                                                    {limitText(stripHTML(item.content), this.STORY_TEXT_LIMIT)}
                                                                </p>
                                                                <Link to="/success-story" className="link-with-icon d-inline-flex align-items-center st-text-primary font-family-secondary-bold font-size-15">
                                                                    <span>View More</span>
                                                                    <FeatherIcon
                                                                        icon="chevron-right"
                                                                        className="ml-1"
                                                                        size="17"
                                                                    />
                                                                </Link>
                                                            </React.Fragment>
                                                        ) : (
                                                            <p className="desc st-text-light font-size-15 mb-3">
                                                                {
                                                                    stripHTML(item.content)
                                                                }
                                                            </p>
                                                        )
                                                    }
                                                    <p className="desc st-text-gray font-size-18 font-weight-600 mb-2 mt-4 mt-lg-5">
                                                        Md. Mahedi Amin
                                                    </p>
                                                    <p className="desc st-text-gray font-size-13 text-uppercase">
                                                        Admin
                                                    </p>
                                                </div>
                                            </Col>

                                            {/* rt-sec */}
                                            <Col xs={12} lg={6} className="rt-sec pt-3 pt-lg-0">
                                                <div className="inner">
                                                    {
                                                        (item.frontImage === null) ? (
                                                            <Image src={noImgFound} fluid />
                                                        ) : (
                                                            <Image src={item.frontImage} fluid />
                                                        )
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )) : (
                                    <div className="no-data-found-p text-center">
                                        <p className="st-text-gray font-weight-600">No success stories found</p>
                                    </div>
                                )
                            }

                        </Slider>
                    </div>
                </Container>

            </div>
        )
    }
}
