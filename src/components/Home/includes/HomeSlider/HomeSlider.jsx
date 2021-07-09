import React, { Component } from 'react'

// bootstrap
import {
    Container, Spinner
} from 'react-bootstrap';

// home style
import '../../styles/home-styles.css'

// SLICK SLIDER
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HTMLparser from "html-react-parser";

// api: common
import { getSliders } from 'utlis/apis/API_common'

export default class HomeSlider extends Component {

    constructor(props) {
        super(props)

        // STATE
        this.state = {
            slidersData: [],
            loading: false
        }
    }


    componentDidMount() {
        if (!this.state.slidersData.length) {
            this.setState({ loading: true })
            getSliders().then(res => {

                this.setState({
                    loading: false,
                    slidersData: [...res.data]
                }, () => {
                    console.log(this.state.slidersData);
                })
            }).catch(err => {
                console.log("erroro ", err.message);
            })
        }
    }


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
                        {
                            this.state.loading &&
                            <div className="my-3 text-center">
                                <Spinner animation="border" />
                            </div>
                        }
                        <Slider {...settings}>
                            {
                                /* slider-item */
                                this.state?.slidersData?.length && this.state.slidersData.map((item, id) => (
                                    <>
                                        <div className="slider-item" key={id}>
                                            <div
                                                className="slider-item-inner"
                                                style={{ backgroundImage: `url(${item.image})` }}>
                                                <Container>
                                                    {/* slider caption */}
                                                    <div className="caption">
                                                        <p className="st-line-heading line-secondary font-family-primary-bold st-text-secondary position-relative mb-2 mb-lg-3">
                                                            Welcome to Nutri Valve
                                                        </p>
                                                        <p className="st-heading font-family-secondary-bold">
                                                            {HTMLparser(`${item.title}`)}
                                                        </p>
                                                    </div>
                                                </Container>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </Slider>
                    </div>
                </Container>
            </div>
        )
    }
}
