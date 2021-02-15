import React, { Component } from 'react'

// styles
import '../styles/recipes-styles.css'

// bootstrap
import { Container, Row, Col, Image } from 'react-bootstrap'

// images
import recipeImg1 from 'assets/images/recipes/recipe-img1.jpg'
import recipeImg2 from 'assets/images/recipes/recipe-img2.jpg'
import recipeImg3 from 'assets/images/recipes/recipe-img3.jpg'
import recipeImg4 from 'assets/images/recipes/recipe-img4.jpg'

// router
import { Link } from 'react-router-dom'

export default class RecipesList extends Component {
    render() {
        return (
            <section id="recipes-list" className="st-bg-slate py-3 py-lg-5">
                <Container>
                    <Row className="recipes-list d-flex align-items-center justify-content-center">
                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg1} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        body transformation
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg2} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        BREAKFAST
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg3} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        CEREALS AND GRAINS
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg4} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        COOKIES
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg1} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        body transformation
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg2} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        BREAKFAST
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg3} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        CEREALS AND GRAINS
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg4} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        COOKIES
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg2} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        BREAKFAST
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg3} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        CEREALS AND GRAINS
                                    </p>
                                </div>
                            </Link>
                        </Col>

                        {/* recipe item */}
                        <Col xs={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                            <Link to="/recipe-details" className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                {/* img sec */}
                                <div className="img-sec text-center overflow-hidden">
                                    <Image src={recipeImg4} />
                                </div>
                                {/* text sec */}
                                <div className="text-sec py-3 text-center">
                                    <p className="text-uppercase font-size-17 font-weight-600">
                                        COOKIES
                                    </p>
                                </div>
                            </Link>
                        </Col>


                    </Row>
                </Container>
            </section>
        )
    }
}
