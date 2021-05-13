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

// no data found image
import noImgFound from 'assets/images/no-image-found-logo.png'

// router
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// redux actions
import { addBlogs, updateBlogs } from 'redux/actions/actionBlogs'

// stories api
import { getBlogs } from 'utlis/apis/API_blogs'

// moment
import Moment from 'react-moment';

// helpers common
import { stripHTML } from 'utlis/helpers/Helpers_common'

class OurBlogs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            currentPage: 1,

            lastPage: null,

            showMoreBtnDisabled: false,
            showMoreBtnLoading: false,
            showMoreBtnText: 'show more',
        }

        // bindings
        this.getMoreBlogs = this.getMoreBlogs.bind(this)
    }

    componentDidMount() {
        // CHECKING IF GLOBAL RECIPES DATA IS EMPTY
        if (this.props.blogs && this.props.blogs.length === 0) {
            this.setState({
                loading: true,
            })

            // GETTING INITIAL DATA
            getBlogs(this.props.commonToken, this.state.currentPage).then(res => {
                console.log('blogs res ', res)
                this.setState({
                    lastPage: res.data.lastPage,
                    loading: false
                })

                // adding recipes data to the redux store
                this.props.addBlogs(res.data.items)

            }).catch(err => {
                console.log('error occured ', err.message)
            })
        }

    }

    // GET MORE RECIPES
    getMoreBlogs = ev => {
        ev.preventDefault()

        // button loading action
        this.setState({
            showMoreBtnLoading: true,
        })

        // if more data exist in the database
        if (this.state.currentPage < this.state.lastPage) {
            this.setState({
                showMoreBtnDisabled: true,
                currentPage: this.state.currentPage + 1
            }, () => {
                // GETTING MORE DATA
                getBlogs(this.props.commonToken, this.state.currentPage).then(res => {
                    console.log('blogs more res ', res)
                    this.setState({
                        lastPage: res.data.lastPage,
                        showMoreBtnDisabled: false,
                        showMoreBtnLoading: false
                    })

                    // updating recipes data to the redux store
                    this.props.updateBlogs(res.data.items)
                }).catch(err => {
                    console.log('error occured ', err.message)
                })
            })
        } else {
            this.setState({
                showMoreBtnText: 'end of the data',
                showMoreBtnDisabled: true,
                showMoreBtnLoading: false,
            })
        }

    }

    render() {
        const props = this.props
        const state = this.state
        const { includeHeading, limit } = props;

        return (
            <section id="our-blogs" className="ST_def-pad-TB st-bg-slate" >
                <Container>
                    <Row className="our-blogs">
                        {
                            /* heading */
                            <Col xs={12} className="st-heading-wrapper text-center mx-auto mb-3 mb-lg-5">
                                <p className="st-heading heading-sm font-family-sec font-family-secondary-bold mb-3 mb-lg-4">Our Blogs</p>
                                <p className="st-desc st-text-gray">
                                    top stories featured on Health & Medicine, Mind & Brain, and living Well sections. Your source for the latest research news
                                </p>
                            </Col>
                            // includeHeading &&
                        }

                        {
                            this.state.loading ? (
                                <Spinner animation="border" className="mx-auto" />
                            ) : (
                                /* blog items */
                                (props.blogs && props.blogs.length) ? props.blogs.map((item, key) => (
                                    <React.Fragment key={item.id}>
                                        <Col xs={12} sm={6} lg={4} className="blog-item mb-3 mb-md-4 mb-lg-5">
                                            <div className="blog-item-inner bg-white">
                                                {/* IMG SEC */}
                                                <Link to={'/blog-details/' + item.slug} className="img-sec d-block position-relative">
                                                    {/* <Image src={item.blogImg} fluid  /> */}
                                                    {
                                                        (item.coverImage === null) ? (
                                                            <Image src={noImgFound} fluid />
                                                        ) : (
                                                            <Image src={item.fullUrlImage} className="w-100" />
                                                        )
                                                    }
                                                    {/* caption */}
                                                    <div className="caption position-absolute blog-date-caption">
                                                        <div className="caption-inner">
                                                            <p className="text-center text-white">
                                                                <span className="d-block date font-size-19 mb-1">
                                                                    {
                                                                        <Moment format="DD">{item.createdAt.date}</Moment>
                                                                    }
                                                                </span>
                                                                <span className="d-block month font-size-14">
                                                                    {<Moment format="MMM">{item.createdAt.date}</Moment>}
                                                                </span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>

                                                {/* text sec */}
                                                <div className="text-sec mt-3">
                                                    <Link to={'/blog-details/' + item.slug} className="head font-size-20 font-family-secondary-medium st-text-light text-decoration-none d-inline-block border-bottom st-border-gray pb-3 mb-3">
                                                        {item.heading}
                                                    </Link>

                                                    <div className="links d-flex mb-2">
                                                        {/* <Link to={'/blog-details/' + item.slug} className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13 mr-3">
                                                            <FeatherIcon
                                                                icon="message-circle"
                                                                size="15"
                                                            />
                                                            <span className="ml-2">{item.blogCommentCount} comments</span>
                                                        </Link> */}
                                                        <Link to={'/blog-details/' + item.slug} className="link-with-icon d-inline-flex align-items-center st-text-secondary font-family-secondary-medium font-size-13">
                                                            <FeatherIcon
                                                                icon="user"
                                                                size="15"
                                                            />
                                                            <span className="ml-2">{item.auther.firstName + " " + item.auther.lastName}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </React.Fragment>
                                )) : (
                                    <Col xs={12} className="no-data-found-p text-center">
                                        <p className="st-text-gray font-weight-600">No Blogs added yet</p>
                                    </Col>
                                )
                            )
                        }

                        {
                            /* SHOW MORE BTN */
                            (props.blogs && props.blogs.length) ?
                                <Col xs={12} className="show-more-btn text-center pt-md-4 pt-lg-5">
                                    <button
                                        onClick={this.getMoreBlogs}
                                        disabled={state.showMoreBtnDisabled}
                                        className="btn font-size-17 h-100 st-btn st-btn-lg st-btn-primary text-capitalize">
                                        {
                                            state.showMoreBtnLoading &&
                                            <Spinner animation="border" size="sm" className="position-relative mr-2" style={{ top: -2 }} />
                                        }
                                        <span>{state.showMoreBtnText}</span>
                                    </button>
                                </Col> : null
                        }

                        {
                            /* button */
                            // (limit && !this.state.loading) &&
                            // <Col xs={12} className="btns text-center mt-3">
                            //     <Link to="/blogs" className="btn st-btn st-btn-primary font-weight-700">View All</Link>
                            // </Col>
                        }
                    </Row>
                </Container>
            </section >
        )
    }
}

const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken,
        blogs: state.blogs.blogs,
    };
}

const dispatchActionsToProps = dispatch => {
    return {
        addBlogs: blogsArray => dispatch(addBlogs(blogsArray)),
        updateBlogs: updatedBlogs => dispatch(updateBlogs(updatedBlogs)),
    }
}

export default connect(getDataFromStore, dispatchActionsToProps)(OurBlogs)