import React, { Component } from 'react'

// styles
import './styles/success-stories-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image,
    Spinner,
    Modal
} from 'react-bootstrap'

import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// section img
import sec1Img from 'assets/images/story-of-success/sec1-right-img.jpg'
// no data found image
import noImgFound from 'assets/images/no-image-found-logo.png'

// router
import { Helmet } from 'react-helmet'

// redux
import { connect } from 'react-redux';

// redux actions
import { addSuccessStories, updateSuccessStories } from 'redux/actions/actionSuccessStories'

// stories api
import { getSuccessStories, cancelSuccessStoriesApi } from 'utlis/apis/API_successStories'

// helpers common
import { limitText, stripHTML } from 'utlis/helpers/Helpers_common'


class SuccessStories extends Component {

    constructor(props) {
        super(props)

        this.STORY_TEXT_LIMIT = 300

        this.state = {
            loading: false,
            currentPage: 1,

            lastPage: null,

            showMoreBtnDisabled: false,
            showMoreBtnLoading: false,
            showMoreBtnText: 'show more',

            selectedStory: null,

            readMoreModalVisibility: false
        }

        // bindings
        this.getMoreSuccessStories = this.getMoreSuccessStories.bind(this)

        this.handleModalOpening = this.handleModalOpening.bind(this)
        this.handleModalClosing = this.handleModalClosing.bind(this)
        this.onModalClose = this.onModalClose.bind(this)
    }

    componentDidMount() {
        // CHECKING IF GLOBAL RECIPES DATA IS EMPTY
        if (this.props.successStories && this.props.successStories.length === 0) {
            this.setState({
                loading: true,
            })

            // GETTING INITIAL DATA
            getSuccessStories(this.props.commonToken, this.state.currentPage).then(res => {
                this.setState({
                    lastPage: res.data.lastPage,
                    loading: false
                })

                // adding recipes data to the redux store
                this.props.addSuccessStories(res.data.items)

            }).catch(err => {
                console.log('error occured ', err.message)
            })
        }

    }

    componentWillUnmount() {
        // canceling api
        cancelSuccessStoriesApi()
    }

    // GET MORE RECIPES
    getMoreSuccessStories = ev => {
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
                getSuccessStories(this.props.commonToken, this.state.currentPage).then(res => {
                    this.setState({
                        lastPage: res.data.lastPage,
                        // recipes: [...this.state.recipes, ...res.data.items],
                        showMoreBtnDisabled: false,
                        showMoreBtnLoading: false
                    })

                    // updating recipes data to the redux store
                    this.props.updateSuccessStories(res.data.items)
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

    // opening modal
    handleModalOpening = (ev, selectedStory) => {
        ev.preventDefault()
        this.setState({
            readMoreModalVisibility: true,
            selectedStory
        })
    }

    // closing modal
    handleModalClosing = ev => {
        ev.preventDefault()
        this.setState({
            readMoreModalVisibility: false
        })
    }

    // execute when modal closes
    onModalClose = () => {
        this.setState({
            readMoreModalVisibility: false
        })
    }

    render() {
        const props = this.props
        const state = this.state
        return (
            <React.Fragment>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nutri Health Care | Success Stories</title>
                    <link rel="canonical" href="" />
                    <meta name="description" content="Success Stories" />
                </Helmet>
                {/* header */}
                {/* <Header /> */}

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Success Story"
                        lastLinkName="Success Story"
                        lastLinkPath="/success-story"
                    />

                    {/* success-stories section 1 */}
                    <div id="success-stories-sec1" className="ST_def-pad-TB">
                        <Container>
                            <Row className="success-stories-sec1">
                                {/* lt-sec */}
                                <Col xs={12} md={8} className="lt-sec pr-md-4">
                                    <div className="inner">
                                        <div className="st-heading-wrapper mb-3 mb-lg-4">
                                            <p className="st-line-heading line-secondary d-inline-block font-family-primary-bold st-text-secondary position-relative mb-2">Change Your Life</p>
                                            <p className="st-heading heading-xs2 font-family-sec font-family-secondary-bold">Dr. Nurvi Kanani Succes Story</p>
                                        </div>
                                        <p className="desc font-size-17 st-text-gray mb-3">
                                            Influenced by the dream to improve maximum lives with good health and food, Dr Nurvi pursued “Post-Graduation in Clinical Nutrition” and “Obesity Management”. To gain excellence in her field she further specialized herself in “Bachelors in Yogic Science and Naturopathy” followed by MD in Alternative Medicines which gave her immense knowledge about medical and alternative approaches to improve an individual’s health.
                                        </p>
                                        <p className="desc font-size-17 st-text-gray mb-3">
                                            She closely worked in the field of food industry & restaurant chains. She has been highly experience in the field of nutrition and dietetics as she had worked with one of the best gym, hospital and chain of clinics and helped countless amount of people to overcome diabetes, infertility and hormonal imbalance in women, pre-natal and post-natal diets, thyroid, kidney & liver diseases, cancer and obesity.
                                        </p>
                                        <p className="desc font-size-17 st-text-gray mb-3">
                                            She further flourished herself as a young and renowned nutritionist in wellness industry after creating nutrivalvewellness.com which is now helping more than 10,000+ people globally to manage their weight and fight all kinds of medical conditions.
                                        </p>
                                        <p className="desc font-size-17 st-text-gray mb-3">
                                            The online customized diet plans, recipes, various guides are being appreciated by all our clients globally and by many institutions.
                                        </p>
                                    </div>
                                </Col>

                                {/* rt-sec */}
                                <Col xs={12} md={4} className="rt-sec pt-3 pt-lg-5">
                                    <div className="inner position-relative">
                                        <Image src={sec1Img} fluid />
                                        <div className="exp position-absolute">
                                            <p className="text-white font-size-15">
                                                <span className="font-weight-600 d-block">15 years</span>
                                                Experience
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* success-stories section 2 */}
                    <div id="success-stories-sec2" className="ST_def-pad-TB st-bg-slate">
                        <Container>
                            <Row className="success-stories-sec2">
                                <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-5">
                                    <p className="st-heading heading-sm font-family-secondary-bold mb-3">All Success Stories</p>
                                    <p className="desc font-size-15 st-text-gray">The online customized diet plans, recipes, various guides are being appreciated by all our clients globally and by many institutions.</p>
                                </Col>

                                {
                                    (props.loading) ? (
                                        <Spinner animation="border" />
                                    ) : (
                                        /* ss2 item */
                                        <React.Fragment>
                                            {
                                                (props.successStories && props.successStories.length) ? props.successStories.map((item, key) => (
                                                    <React.Fragment key={item.id}>
                                                        <Col xs={12} className="ss2-item mb-3 mb-lg-5">
                                                            <div className="inner ss2-item-inner bg-white st-block-box-shadow p-3 d-flex flex-wrap">
                                                                <div className="img-sec">
                                                                    {
                                                                        (item.frontImage === null) ? (
                                                                            <Image src={noImgFound} fluid />
                                                                        ) : (
                                                                            <Image src={item.frontImage} fluid />
                                                                        )
                                                                    }
                                                                </div>
                                                                <div className="text-sec media-body pl-md-3 pt-3 pt-md-0">
                                                                    {/* top sec */}
                                                                    <div className="top-sec d-flex border-bottom st-border-gray pb-2 mb-2">
                                                                        <p className="head font-weight-600 font-size-20">
                                                                            <span className="st-text-secondary d-block font-size-14 mb-2">Lost {item.weightLose && item.weightLose} KG</span>
                                                                            {item.clientName}
                                                                        </p>
                                                                    </div>

                                                                    {/* bottom sec */}
                                                                    <div className="bottom-sec">
                                                                        <div className="inner">
                                                                            {
                                                                                // (stripHTML(item.content).length >= this.STORY_TEXT_LIMIT) ? (
                                                                                (stripHTML(item.content).length >= this.STORY_TEXT_LIMIT) ? (
                                                                                    <React.Fragment>
                                                                                        <p className="desc st-text-light font-size-15 mb-2">
                                                                                            {limitText(stripHTML(item.content), this.STORY_TEXT_LIMIT)}
                                                                                        </p>
                                                                                        <a href="/" className="font-weight-600 st-text-light font-size-14 text-capitalize" onClick={ev => this.handleModalOpening(ev, item)}>read more</a>
                                                                                    </React.Fragment>
                                                                                ) : (
                                                                                    <p className="desc st-text-light font-size-15 mb-2">
                                                                                        {
                                                                                            stripHTML(item.content)
                                                                                        }
                                                                                    </p>
                                                                                )
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </React.Fragment>
                                                )) : (
                                                    <Col xs={12} className="no-data-found-p text-center">
                                                        <p className="st-text-gray font-weight-600">No success stories found</p>
                                                    </Col>
                                                )

                                            }
                                        </React.Fragment>
                                    )
                                }

                                {
                                    /* SHOW MORE BTN */
                                    (props.successStories && props.successStories.length) ?
                                        <Col xs={12} className="show-more-btn text-center pt-md-4 pt-lg-5">
                                            <button
                                                onClick={this.getMoreSuccessStories}
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
                            </Row>
                        </Container>

                        {/* MODALS */}
                        <Modal
                            size="lg"
                            show={state.readMoreModalVisibility}
                            onHide={this.onModalClose}
                            centered
                            keyboard>
                            <Modal.Header
                                closeButton
                                className="st-heading heading-xs font-family-secondary-bold">
                                <Modal.Title>
                                    {
                                        (state.selectedStory && state.selectedStory.clientName) ? (
                                            state.selectedStory.clientName + "'s Success Story"
                                        ) : "Success Story"
                                    }
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {
                                    state.selectedStory ? (
                                        <div className="ss2-item">
                                            <div className="inner ss2-item-inner bg-white st-block-box-shadow p-3 d-flex flex-wrap">
                                                <div className="img-sec" style={{ width: 150 }}>
                                                    {
                                                        (state.selectedStory.frontImage === null) ? (
                                                            <Image src={noImgFound} fluid />
                                                        ) : (
                                                            <Image src={state.selectedStory.frontImage} fluid />
                                                        )
                                                    }
                                                </div>
                                                <div className="text-sec media-body pl-md-3 pt-3 pt-md-0">
                                                    {/* top sec */}
                                                    <div className="top-sec d-flex border-bottom st-border-gray pb-2 mb-2">
                                                        <p className="head font-weight-600 font-size-20">
                                                            <span className="st-text-secondary d-block font-size-14 mb-2">Lost {state.selectedStory.weightLose && state.selectedStory.weightLose} KG</span>
                                                            {state.selectedStory.clientName}
                                                        </p>
                                                    </div>

                                                    {/* bottom sec */}
                                                    <div className="bottom-sec">
                                                        <div className="inner">
                                                            <p className="desc st-text-light font-size-15 mb-2">
                                                                {stripHTML(state.selectedStory.content)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null
                                }


                            </Modal.Body>
                        </Modal>
                    </div>

                    {/* footer */}
                    {/* <Footer /> */}
                </section>
            </React.Fragment>
        )
    }
}


const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken,
        successStories: state.successStories.successStories,
    };
}

const dispatchActionsToProps = dispatch => {
    return {
        addSuccessStories: successStoriesArray => dispatch(addSuccessStories(successStoriesArray)),
        updateSuccessStories: updatedSuccessStories => dispatch(updateSuccessStories(updatedSuccessStories)),
    }
}

export default connect(getDataFromStore, dispatchActionsToProps)(SuccessStories)