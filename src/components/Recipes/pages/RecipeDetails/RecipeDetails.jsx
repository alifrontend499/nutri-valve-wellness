import React, { Component } from 'react'

// styles
import '../../styles/recipes-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

import RecipesSerach from '../../includes/RecipesSerach'

// images
import recipeBigImg from 'assets/images/recipes/recipe-big-img.jpg'
import recipeImgdescription from 'assets/images/our-blogs/banner-description-img.jpg'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// router
import { Link } from 'react-router-dom';

export default class recipes extends Component {
    render() {
        return (
            <>
                <Header />

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Recipes"
                        lastLinkName="Recipes"
                        lastLinkPath="/recipes"
                    />

                    {/* RECIPES SEARCH */}
                    <RecipesSerach />

                    {/* recipe details section */}
                    <section id="recipe-details" className="ST_def-pad-TB">
                        <Container>
                            <Row className="recipe-details">
                                {/* lt-sec */}
                                <Col xs={12} md={8} lg={9} className="lt-sec">
                                    <div className="inner">
                                        {/* IMG SEC */}
                                        <div className="recipe-details-img position-relative">
                                            <Image src={recipeBigImg} fluid className="w-100" />
                                            <div className="caption position-absolute w-100">
                                                <div className="caption-inner text-center">
                                                    <button className="btn st-btn st-btn-white d-inline-flex align-items-center font-weight-600 font-size-14">
                                                        <FeatherIcon
                                                            icon="eye"
                                                            size="15"
                                                        />
                                                        <span className="ml-2">Views 1529</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* RECIPES ALL DETAILS */}
                                        <div className="recipe-all-details px-2 mt-3">

                                        </div>
                                    </div>
                                </Col>

                                {/* rt-sec */}
                                <Col xs={12} md={4} lg={3} className="rt-sec">
                                    <div className="inner">
                                        {/* FRAC 1 */}
                                        <div className="frac mb-3 mb-lg-4">
                                            <div className="frac-inner st-bg-slate p-4">
                                                {/* categories list*/}
                                                <div className="categories-list">
                                                    <p className="st-heading heading-xs font-weight-600 position-relative mb-3 mb-lg-4">
                                                        All Categories
                                                    </p>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Body Transformation</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Breakfast</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Cereals And Grains</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Cookies</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Dals Kadhis And Pulses</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Body Transformation</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Breakfast</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Cereals And Grains</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Cookies</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Dals Kadhis And Pulses</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Body Transformation</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Breakfast</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Cereals And Grains</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Cookies</p>
                                                        </a>
                                                    </div>
                                                    {/* item */}
                                                    <div className="categories-list-item">
                                                        <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                            <p className="position-relative font-weight-600">Dals Kadhis And Pulses</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* FRAC 1 */}
                                        <div className="frac mb-3 mb-lg-4">
                                            <div className="frac-inner">
                                                <p className="st-heading heading-xs font-weight-600 position-relative mb-2">
                                                    Most Read
                                                </p>
                                                <a href="#" className="d-block text-decoration-none">
                                                    <Image src={recipeImgdescription} fluid />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <Footer />
                </section>
            </>
        )
    }
}
