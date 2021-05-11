import React, { Component } from 'react'

// styles
import '../../styles/our-blogs-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

// components
// import Header from 'components/CommonComponents/Header/Header'
// import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// images
import blogBigImg from 'assets/images/our-blogs/blog-big-img.jpg'
import blogImgdescription from 'assets/images/our-blogs/banner-description-img.jpg'
import userImg from 'assets/images/our-blogs/user-img.jpg'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// router
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';

// blogs api
import { getBlog } from 'utlis/apis/API_blogs'


class BlogDetails extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            loading: true,
            recipe: null,
            recipeSlug: ''
        }
    }

    componentDidMount() {
        const props = this.props
        const recipeSlug = props.match.params.slug ?? null
        if (recipeSlug) {
            getBlog(props.commonToken, recipeSlug).then(res => {

                console.log("asd res", res)
                this.setState({
                    recipe: res.data,
                    loading: false
                })
            })
        } else {

        }
    }
    render() {
        const props = this.props
        const state = this.state

        return (
            <>
                {/* <Header /> */}

                {/* site wrapper */}
                <section id="st-wrapper">
                    <PageBanner
                        pageTitle="Our Blog"
                        lastLinkName="Our Blog"
                        lastLinkPath="/blogs"
                    />

                    {/* blog details section */}
                    <section id="blog-details" className="ST_def-pad-TB">
                        <Container>
                            <Row className="blog-details">
                                {/* lt-sec */}
                                <Col xs={12} md={8} lg={9} className="lt-sec">
                                    <div className="inner">
                                        {/* IMG SEC */}
                                        <div className="blog-details-img position-relative">
                                            <Image src={blogBigImg} fluid className="w-100" />
                                            <div className="caption position-absolute blog-date-caption">
                                                <div className="caption-inner">
                                                    <p className="text-center text-white">
                                                        <span className="d-block date font-size-19 mb-1">14</span>
                                                        <span className="d-block month font-size-14">mar</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* BLOGS ALL DETAILS */}
                                        <div className="blog-all-details px-2 mt-3">
                                            {/* blog details sec 1 */}
                                            <div className="blog-details-sec-one border-bottom pb-2">
                                                <Link to="/blog-details" className="link-with-icon d-inline-flex align-items-center st-text-light font-family-secondary-medium font-size-13 border-right pr-2 mr-2">
                                                    <FeatherIcon
                                                        icon="user"
                                                        size="15"
                                                        className="st-text-secondary"
                                                    />
                                                    <span className="ml-2">Alex</span>
                                                </Link>
                                                <Link to="/blog-details" className="link-with-icon d-inline-flex align-items-center st-text-light font-family-secondary-medium font-size-13 border-right pr-2 mr-2">
                                                    <FeatherIcon
                                                        icon="message-circle"
                                                        size="15"
                                                        className="st-text-secondary"
                                                    />
                                                    <span className="ml-2">3 comments</span>
                                                </Link>
                                                <Link to="/blog-details" className="link-with-icon d-inline-flex align-items-center st-text-light font-family-secondary-medium font-size-13 pr-2 mr-2">
                                                    <FeatherIcon
                                                        icon="thumbs-up"
                                                        size="15"
                                                        className="st-text-secondary"
                                                    />
                                                    <span className="ml-2">Fitness</span>
                                                </Link>
                                            </div>

                                            {/* blog details sec 2 */}
                                            <div className="blog-details-sec-two mt-3 mt-lg-4">
                                                <p className="font-size-15 st-text-gray mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum?
                                                </p>
                                                <p className="font-size-15 st-text-gray mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum?
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum?
                                                </p>
                                                <p className="font-size-15 st-text-gray mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum?
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum?
                                                    <Image src={blogImgdescription} fluid className="ml-3 mt-3" style={{ float: 'right' }} />
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum?
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum?
                                                </p>
                                                <p className="font-size-15 st-text-gray mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum? <br />
                                                    1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quae deleniti. <br />
                                                    2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                                    3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem <br />
                                                    4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem <br />
                                                </p>

                                                <p className="font-size-24 mb-3">
                                                    Why follow nutrition diet?
                                                </p>
                                                <p className="font-size-15 st-text-gray mb-3">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem impedit quae minus. Iure qui beatae incidunt, repudiandae atque quisquam nihil quos eos quo, assumenda voluptatum? <br />
                                                    1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quae deleniti. <br />
                                                    2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                                                    3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem <br />
                                                    4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non ea excepturi voluptas aperiam exercitationem <br />
                                                </p>
                                            </div>

                                            {/* blog btns */}
                                            <div className="blog-prev-next-btns border-top border-bottom d-flex py-3 py-4">
                                                <Link to="/blogs" className="btn st-btn st-btn-primary d-flex justify-content-center font-weight-700 btn-prev">
                                                    <FeatherIcon
                                                        icon="chevrons-left"
                                                        size="19"
                                                        className="position-relative"
                                                        style={{ top: 1 }}
                                                    />
                                                    <span className="ml-1">Previous</span>
                                                </Link>
                                                <Link to="/blogs" className="btn st-btn st-btn-primary d-flex justify-content-center font-weight-700 btn-next ml-auto">
                                                    <span className="mr-1">Next</span>
                                                    <FeatherIcon
                                                        icon="chevrons-right"
                                                        size="19"
                                                        className="position-relative"
                                                        style={{ top: 1 }}
                                                    />
                                                </Link>
                                            </div>

                                            {/* blog comments */}
                                            <div className="blog-prev-next-comments mt-3 mt-lg-5">
                                                <p className="head font-size-24 font-weight-600">2 replies to "7 Simple and Healthy Gluten Free Cookie"</p>

                                                <div className="user-comment d-flex mt-3 mt-lg-4">
                                                    {/* img-sec */}
                                                    <div className="img-sec" style={{ width: 80 }}>
                                                        <Image src={userImg} fluid />
                                                    </div>
                                                    {/* text-sec */}
                                                    <div className="text-sec media-body pl-3">
                                                        <div className="inner st-bg-slate p-3">
                                                            <div className="top-sec d-flex mb-3">
                                                                <p className="pr-2 font-size-17">
                                                                    Alex
                                                                    <span className="d-block font-size-13 st-text-light mt-1">
                                                                        13 April 2019 at 4:49 am
                                                                    </span>
                                                                </p>
                                                                <Link to="/blogs" className="btn st-btn st-btn-primary st-btn-xs d-flex justify-content-center font-size-13 btn-next ml-auto align-self-start">
                                                                    <span className="mr-1">Reply</span>
                                                                    <FeatherIcon
                                                                        icon="chevron-right"
                                                                        size="15"
                                                                        className="position-relative"
                                                                        style={{ top: 1 }}
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <p className="st-text-gray font-size-15">
                                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro voluptas ea blanditiis nisi iusto. Ipsam in illo mollitia delectus ut, a doloremque officia vero rem aliquam quasi ipsa, maxime quis.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* blog form */}
                                            <div className="blog-form mt-3 mt-lg-5">
                                                <p className="head font-size-24 font-weight-600 mb-3 mb-lg-4">Leave a Reply</p>
                                                <p className="desc mb-2 st-text-gray">Your email address will be not published</p>
                                                <div className="d-flex flex-wrap st-form-container">
                                                    {/* input field */}
                                                    <div className="st-form form-group w-100">
                                                        <textarea rows="10" className="form-control font-size-14 border rounded-0" placeholder="Comment"></textarea>
                                                    </div>
                                                    {/* input field */}
                                                    <div className="st-form form-group three-in-one-line left">
                                                        <input type="text" className="form-control font-size-14 border rounded-0" placeholder="Name (Required)" />
                                                    </div>
                                                    <div className="st-form form-group three-in-one-line center">
                                                        <input type="text" className="form-control font-size-14 border rounded-0" placeholder="Email (Required)" />
                                                    </div>
                                                    <div className="st-form form-group three-in-one-line right">
                                                        <input type="text" className="form-control font-size-14 border rounded-0" placeholder="Website" />
                                                    </div>
                                                    <label className="st-form form-group w-100">
                                                        <input type="checkbox" name="" id="" />
                                                        <span className="ml-1 st-text-gray font-size-13">Save my name, email, password in this browser for the next time I comment</span>
                                                    </label>
                                                    <div className="st-btns mt-3">
                                                        <Link to="/" className="btn st-btn st-btn-primary st-btn-lg d-flex justify-content-center font-weight-700 btn-next ml-auto">
                                                            <span className="mr-1">Post Comment</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                {/* rt-sec */}
                                <Col xs={12} md={4} lg={3} className="rt-sec">
                                    <div className="inner">
                                        {/* FRAC 1 */}
                                        <div className="frac mb-3 mb-lg-4">
                                            <div className="frac-inner st-bg-slate p-4">
                                                {/* FIELD */}
                                                <div className="st-form with-icon-right position-relative mb-3 mb-lg-4">
                                                    <input type="text" className="form-control" placeholder="Search.." />
                                                    <div className="icon position-absolute">
                                                        <FeatherIcon
                                                            icon="search"
                                                            size="20"
                                                        />
                                                    </div>
                                                </div>

                                                {/* latest news list */}
                                                <div className="latest-news-list">
                                                    <p className="st-heading heading-underline heading-xs font-weight-500 position-relative mb-3 mb-lg-4">
                                                        Latest News
                                                    </p>

                                                    {/* news item */}
                                                    <div className="latest-news-list-item mb-3 mb-lg-4">
                                                        <a href="#" className="latest-news-list-item-inner d-flex text-decoration-none st-text-dark">
                                                            <div className="img-sec" style={{ width: 55 }}>
                                                                <Image src={blogImgdescription} fluid />
                                                            </div>
                                                            <div className="text-sec media-body pl-3">
                                                                <p className="date d-flex font-size-13 st-text-gray mb-1">
                                                                    <FeatherIcon
                                                                        icon="calendar"
                                                                        size="15"
                                                                        className="st-text-secondary"
                                                                    />
                                                                    <span className="ml-1">20 April, 2008</span>
                                                                </p>
                                                                <p className="desc font-size-15">
                                                                    How much you really need to eat a day?
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    {/* news item */}
                                                    <div className="latest-news-list-item mb-3 mb-lg-4">
                                                        <a href="#" className="latest-news-list-item-inner d-flex text-decoration-none st-text-dark">
                                                            <div className="img-sec" style={{ width: 55 }}>
                                                                <Image src={blogImgdescription} fluid />
                                                            </div>
                                                            <div className="text-sec media-body pl-3">
                                                                <p className="date d-flex font-size-13 st-text-gray mb-1">
                                                                    <FeatherIcon
                                                                        icon="calendar"
                                                                        size="15"
                                                                        className="st-text-secondary"
                                                                    />
                                                                    <span className="ml-1">20 April, 2008</span>
                                                                </p>
                                                                <p className="desc font-size-15">
                                                                    7 Simple and Healthy gluten free cookie
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>

                                                    {/* news item */}
                                                    <div className="latest-news-list-item mb-3 mb-lg-4">
                                                        <a href="#" className="latest-news-list-item-inner d-flex text-decoration-none st-text-dark">
                                                            <div className="img-sec" style={{ width: 55 }}>
                                                                <Image src={blogImgdescription} fluid />
                                                            </div>
                                                            <div className="text-sec media-body pl-3">
                                                                <p className="date d-flex font-size-13 st-text-gray mb-1">
                                                                    <FeatherIcon
                                                                        icon="calendar"
                                                                        size="15"
                                                                        className="st-text-secondary"
                                                                    />
                                                                    <span className="ml-1">14 Mar, 2008</span>
                                                                </p>
                                                                <p className="desc font-size-15">
                                                                    7 Simple and Healthy gluten free cookie
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* categories list*/}
                                                <div className="categories-list">
                                                    <p className="st-heading heading-underline heading-xs font-weight-500 position-relative mb-3 mb-lg-4">
                                                        Categories
                                                    </p>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-14 border-bottom pb-2 mb-2">
                                                            <p className="position-relative">Diet</p>
                                                            <span className="badge st-badge st-badge-secondary rounded-circle d-flex align-items-center justify-content-center ml-auto">1</span>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-14 border-bottom pb-2 mb-2">
                                                            <p className="position-relative">Fitness</p>
                                                            <span className="badge st-badge st-badge-secondary rounded-circle d-flex align-items-center justify-content-center ml-auto">1</span>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-14 border-bottom pb-2 mb-2">
                                                            <p className="position-relative">Health</p>
                                                            <span className="badge st-badge st-badge-secondary rounded-circle d-flex align-items-center justify-content-center ml-auto">1</span>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-14 border-bottom pb-2 mb-2">
                                                            <p className="position-relative">Protien</p>
                                                            <span className="badge st-badge st-badge-secondary rounded-circle d-flex align-items-center justify-content-center ml-auto">1</span>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-14 border-bottom pb-2 mb-2">
                                                            <p className="position-relative">Weight Loss</p>
                                                            <span className="badge st-badge st-badge-secondary rounded-circle d-flex align-items-center justify-content-center ml-auto">1</span>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        {/* FRAC 1 */}
                                        <div className="frac mb-3 mb-lg-4">
                                            <div className="frac-inner">
                                                <a href="#" className="d-block text-decoration-none">
                                                    <Image src={blogImgdescription} fluid />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* <Footer /> */}
                </section>
            </>

        )
    }
}


const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken
    };
}

export default connect(getDataFromStore, null)(BlogDetails)