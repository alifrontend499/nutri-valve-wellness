import React, { Component } from 'react'

// styles
import '../styles/recipes-styles.css'

// bootstrap
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'

// router
import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux';

// images
import recipeImg1 from 'assets/images/recipes/recipe-img1.jpg'


class RecipesList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const props = this.props
        return (
            <section id="recipes-list" className="st-bg-slate py-3 py-lg-5">
                <Container>
                    <Row className="recipes-list d-flex align-items-start justify-content-center">
                        {
                            (props.loading) ? (
                                <Spinner animation="border" />
                            ) : (
                                <React.Fragment>
                                    {
                                        (props.recipes && props.recipes.length) ? props.recipes.map((item, key) => (
                                            /* RECIPE ITEM */
                                            <React.Fragment key={item.id}>
                                                <Col xs={12} sm={6} md={4} lg={3} className="recipe-item mb-3 mb-lg-5">
                                                    <Link to={'/recipe-details/' + item.id} className="inner d-block text-decoration-none bg-white st-block-box-shadow overflow-hidden">
                                                        {/* img sec */}
                                                        <div className="img-sec text-center overflow-hidden">
                                                            {
                                                                (item.coverImage === null) ? (
                                                                    <Image src={recipeImg1} />
                                                                ) : (
                                                                    <Image src={item.fullUrlImage} />
                                                                )
                                                            }

                                                        </div>
                                                        {/* text sec */}
                                                        <div className="text-sec py-3 px-1 text-center">
                                                            <p className="text-uppercase font-size-17 font-weight-600">
                                                                {item.title}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </Col>
                                            </React.Fragment>
                                        )) : (
                                            <React.Fragment>
                                                <p>No recipes found</p>
                                            </React.Fragment>
                                        )
                                    }

                                    {/* SHOW MORE BTN */}
                                    <Col xs={12} className="show-more-btn text-center">
                                        <button
                                            onClick={props.getMoreRecipes}
                                            disabled={props.showMoreBtnDisabled}
                                            className="btn font-size-17 h-100 st-btn st-btn-lg st-btn-primary text-capitalize">
                                            {
                                                props.showMoreBtnLoading &&
                                                <Spinner animation="border" size="sm" className="position-relative mr-2" style={{ top: -2 }} />
                                            }
                                            <span>{props.showMoreBtnText}</span>
                                        </button>
                                    </Col>
                                </React.Fragment>
                            )
                        }

                    </Row>
                </Container>
            </section >
        )
    }
}


const getDataFromStore = state => {
    return {
        recipes: state.recipes.recipes,
    };
}

export default connect(getDataFromStore, null)(RecipesList)