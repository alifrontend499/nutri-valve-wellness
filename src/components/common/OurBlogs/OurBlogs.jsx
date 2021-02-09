import React, { Component } from 'react'

// styles
import './styles/our-blogs-styles.css'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// bootstrap
import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap'

// blog images
import blogImg1 from 'assets/images/our-blogs/img1.jpg'
import blogImg2 from 'assets/images/our-blogs/img2.jpg'
import blogImg3 from 'assets/images/our-blogs/img3.jpg'

export default class OurBlogs extends Component {
    render() {
        return (
            <section id="our-blogs" className="ST_def-pad-TB st-bg-slate">
                <Container>
                    <Row className="our-blogs">
                        {/* heading */}
                        <Col xs={12} className="st-heading-wrapper text-center mx-auto mb-3 mb-lg-5">
                            <p className="st-heading heading-sm font-family-sec font-family-secondary-bold mb-3 mb-lg-4">Our Blogs</p>
                            <p className="st-desc st-text-gray">
                                top stories featured on Health & Medicine, Mind & Brain, and living Well sections. Your source for the latest research news
                            </p>
                        </Col>

                        {/* blog item */}
                        <Col xs={12} sm={6} lg={4} className="blog-item">
                            <div className="blog-item-inner bg-white">
                                {/* img sec */}
                                <a href="" className="img-sec d-block position-relative">
                                    <Image src={blogImg1} fluid />
                                    {/* caption */}
                                    <div className="caption position-absolute">
                                        <div className="caption-inner">
                                            <p className="text-center text-white">
                                                <span className="d-block date font-size-19 mb-1">14</span>
                                                <span className="d-block month font-size-14">MAR</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                {/* text sec */}
                                <div className="text-sec mt-3">
                                    <a href="#" className="head font-size-20 font-family-secondary-medium st-text-light text-decoration-none d-inline-block border-bottom st-border-gray pb-3 mb-3">
                                        how much do you really need to eat a day?
                                    </a>

                                    <div className="links d-flex mb-2">
                                        <a href="#" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13 mr-3">
                                            <FeatherIcon
                                                icon="message-circle"
                                                size="15"
                                            />
                                            <span className="ml-2">2 comments</span>
                                        </a>
                                        <a href="#" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13">
                                            <FeatherIcon
                                                icon="user"
                                                size="15"
                                            />
                                            <span className="ml-2">Alex</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* blog item */}
                        <Col xs={12} sm={6} lg={4} className="blog-item">
                            <div className="blog-item-inner bg-white">
                                {/* img sec */}
                                <a href="" className="img-sec d-block position-relative">
                                    <Image src={blogImg2} fluid />
                                    {/* caption */}
                                    <div className="caption position-absolute">
                                        <div className="caption-inner">
                                            <p className="text-center text-white">
                                                <span className="d-block date font-size-19 mb-1">14</span>
                                                <span className="d-block month font-size-14">MAR</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                {/* text sec */}
                                <div className="text-sec mt-3">
                                    <a href="#" className="head font-size-20 font-family-secondary-medium st-text-light text-decoration-none d-inline-block border-bottom st-border-gray pb-3 mb-3">
                                        7 Simply and Healthy glutan free cookies
                                    </a>

                                    <div className="links d-flex mb-2">
                                        <a href="#" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13 mr-3">
                                            <FeatherIcon
                                                icon="message-circle"
                                                size="15"
                                            />
                                            <span className="ml-2">2 comments</span>
                                        </a>
                                        <a href="#" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13">
                                            <FeatherIcon
                                                icon="user"
                                                size="15"
                                            />
                                            <span className="ml-2">Alex</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* blog item */}
                        <Col xs={12} sm={6} lg={4} className="blog-item">
                            <div className="blog-item-inner bg-white">
                                {/* img sec */}
                                <a href="" className="img-sec d-block position-relative">
                                    <Image src={blogImg3} fluid />
                                    {/* caption */}
                                    <div className="caption position-absolute">
                                        <div className="caption-inner">
                                            <p className="text-center text-white">
                                                <span className="d-block date font-size-19 mb-1">14</span>
                                                <span className="d-block month font-size-14">MAR</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>

                                {/* text sec */}
                                <div className="text-sec mt-3">
                                    <a href="#" className="head font-size-20 font-family-secondary-medium st-text-light text-decoration-none d-inline-block border-bottom st-border-gray pb-3 mb-3">
                                        Tips for staying helthy on vacations
                                    </a>

                                    <div className="links d-flex mb-2">
                                        <a href="#" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13 mr-3">
                                            <FeatherIcon
                                                icon="message-circle"
                                                size="15"
                                            />
                                            <span className="ml-2">2 comments</span>
                                        </a>
                                        <a href="#" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13">
                                            <FeatherIcon
                                                icon="user"
                                                size="15"
                                            />
                                            <span className="ml-2">Alex</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* button */}
                        <Col xs={12} className="btns text-center mt-3 mt-lg-5">
                            <a href="#" className="btn st-btn st-btn-primary font-weight-700">View All</a>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
