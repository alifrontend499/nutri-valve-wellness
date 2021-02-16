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
    Spinner,
} from 'react-bootstrap'

// blog images
import blogImg1 from 'assets/images/our-blogs/img1.jpg'
import blogImg2 from 'assets/images/our-blogs/img2.jpg'
import blogImg3 from 'assets/images/our-blogs/img3.jpg'

// router
import { Link } from 'react-router-dom';

export default class OurBlogs extends Component {

    constructor(props) {
        super(props)

        // state
        this.state = {
            allBlogs: [],
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.limit) {
                this.setState({
                    loading: false,
                    allBlogs: [
                        {
                            id: 'blog-id1',
                            blogImg: blogImg1,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'how much do you really need to eat a day?',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id2',
                            blogImg: blogImg2,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: '7 Simply and Healthy glutan free cookies',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id3',
                            blogImg: blogImg3,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'Tips for staying helthy on vacations',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                    ]
                })
            } else {
                this.setState({
                    loading: false,
                    allBlogs: [
                        {
                            id: 'blog-id1',
                            blogImg: blogImg1,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'how much do you really need to eat a day?',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id2',
                            blogImg: blogImg2,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: '7 Simply and Healthy glutan free cookies',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id3',
                            blogImg: blogImg3,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'Tips for staying helthy on vacations',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id4',
                            blogImg: blogImg1,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'how much do you really need to eat a day?',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id5',
                            blogImg: blogImg2,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: '7 Simply and Healthy glutan free cookies',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id6',
                            blogImg: blogImg3,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'Tips for staying helthy on vacations',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id7',
                            blogImg: blogImg1,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'how much do you really need to eat a day?',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id8',
                            blogImg: blogImg2,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: '7 Simply and Healthy glutan free cookies',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id9',
                            blogImg: blogImg3,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'Tips for staying helthy on vacations',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id10',
                            blogImg: blogImg1,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'how much do you really need to eat a day?',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id11',
                            blogImg: blogImg2,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: '7 Simply and Healthy glutan free cookies',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                        {
                            id: 'blog-id12',
                            blogImg: blogImg3,
                            blogDate: 14,
                            BlogMonth: 'mar',
                            blogHeading: 'Tips for staying helthy on vacations',
                            blogCommentCount: '2',
                            blogAuther: 'alex',
                        },
                    ]
                })
            }
        }, 1000);
    }

    render() {
        const { includeHeading, limit } = this.props;
        return (
            <section id="our-blogs" className="ST_def-pad-TB st-bg-slate" >
                <Container>
                    <Row className="our-blogs">
                        {
                            /* heading */
                            includeHeading &&
                            <Col xs={12} className="st-heading-wrapper text-center mx-auto mb-3 mb-lg-5">
                                <p className="st-heading heading-sm font-family-sec font-family-secondary-bold mb-3 mb-lg-4">Our Blogs</p>
                                <p className="st-desc st-text-gray">
                                    top stories featured on Health & Medicine, Mind & Brain, and living Well sections. Your source for the latest research news
                            </p>
                            </Col>
                        }

                        {
                            this.state.loading ? (
                                <Spinner animation="border" className="mx-auto" />
                            ) : (
                                    /* blog items */
                                    this.state.allBlogs.map(item => (
                                        <Col xs={12} sm={6} lg={4} key={item.id} className="blog-item mb-3 mb-md-4 mb-lg-5">
                                            <div className="blog-item-inner bg-white">
                                                {/* IMG SEC */}
                                                <Link to="/blog-details" className="img-sec d-block position-relative">
                                                    <Image src={item.blogImg} fluid className="w-100" />
                                                    {/* caption */}
                                                    <div className="caption position-absolute blog-date-caption">
                                                        <div className="caption-inner">
                                                            <p className="text-center text-white">
                                                                <span className="d-block date font-size-19 mb-1">{item.blogDate}</span>
                                                                <span className="d-block month font-size-14">{item.BlogMonth}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>

                                                {/* text sec */}
                                                <div className="text-sec mt-3">
                                                    <Link to="/blog-details" className="head font-size-20 font-family-secondary-medium st-text-light text-decoration-none d-inline-block border-bottom st-border-gray pb-3 mb-3">
                                                        {item.blogHeading}
                                                    </Link>

                                                    <div className="links d-flex mb-2">
                                                        <Link to="/blog-details" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13 mr-3">
                                                            <FeatherIcon
                                                                icon="message-circle"
                                                                size="15"
                                                            />
                                                            <span className="ml-2">{item.blogCommentCount} comments</span>
                                                        </Link>
                                                        <Link to="/blog-details" className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13">
                                                            <FeatherIcon
                                                                icon="user"
                                                                size="15"
                                                            />
                                                            <span className="ml-2">{item.blogAuther}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    ))
                                )
                        }

                        {
                            /* button */
                            (limit && !this.state.loading) &&
                            <Col xs={12} className="btns text-center mt-3">
                                <Link to="/blogs" className="btn st-btn st-btn-primary font-weight-700">View All</Link>
                            </Col>
                        }
                    </Row>
                </Container>
            </section >
        )
    }
}
