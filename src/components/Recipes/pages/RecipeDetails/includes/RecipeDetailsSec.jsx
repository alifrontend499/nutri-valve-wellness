import React, { Component } from 'react'

// styles
import '../../../styles/recipes-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image,
    Spinner
} from 'react-bootstrap'

// images
import recipeBigImg from 'assets/images/recipes/recipe-big-img.jpg'
import recipeImgdescription from 'assets/images/recipes/right-img.jpg'
// no data found image
import noImgFound from 'assets/images/no-image-found-logo.png'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// redux
import { connect } from 'react-redux';

// recipes api
import { getRecipe } from 'utlis/apis/API_recipes'

// moment
import Moment from 'react-moment';

class RecipeDetailsSec extends Component {
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
        this.setState({
            loading: true,
        })
        const props = this.props
        const recipeSlug = props.parentProps.match.params.slug ?? null
        if (recipeSlug) {
            getRecipe(props.commonToken, recipeSlug).then(res => {
                this.setState({
                    recipe: res.data,
                    loading: false
                })
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.parentProps !== prevProps.parentProps) {
            this.setState({
                loading: true,
            })
            const props = this.props
            const recipeSlug = props.parentProps.match.params.slug ?? null
            if (recipeSlug) {
                getRecipe(props.commonToken, recipeSlug).then(res => {
                    this.setState({
                        recipe: res.data,
                        loading: false
                    })
                })
            }
        }
    }


    render() {
        const props = this.props
        const state = this.state
        return (
            <section id="recipe-details" className="ST_def-pad-TB">
                <Container>
                    <Row className="recipe-details">
                        {/* lt-sec */}
                        <Col xs={12} md={8} lg={9} className="lt-sec">
                            <div className="inner">

                                {
                                    (state.loading) ? (
                                        <div className="d-flex justify-content-center">
                                            <Spinner animation="border" />
                                        </div>
                                    ) : (
                                        state.recipe && (
                                            <React.Fragment>
                                                {/* IMG SEC */}
                                                <div className="recipe-details-img position-relative">
                                                    {
                                                        (state.recipe.coverImage === null) ? (
                                                            <Image src={noImgFound} fluid className="d-block mx-auto" />
                                                        ) : (
                                                            <Image src={state.recipe.fullUrlImage} fluid className="w-100" />
                                                        )
                                                    }
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

                                                {/* RECIPES DETAILS SEC 1 */}
                                                <div className="recipe-details-sec-1 px-2 mt-3 mt-lg-4">
                                                    <p className="name st-heading heading-xs font-family-secondary-medium text-center mb-3 mb-lg-4">{state.recipe.title}</p>
                                                    <div className="d-flex flex-wrap align-items-center border-top border-bottom st-border-secondary py-3 mb-3 mb-lg-4">
                                                        <div className="col-6 col-lg-4 item px-2 mb-3 mb-lg-0">
                                                            <p className="st-text-primary font-weight-600 font-size-15">Energy (kcal)- 103</p>
                                                        </div>
                                                        <div className="col-6 col-lg-4 item px-2 mb-3 mb-lg-0">
                                                            <p className="st-text-primary font-weight-600 font-size-15">Protein (g) - 11</p>
                                                        </div>
                                                        <div className="col-6 col-lg-4 item px-2">
                                                            <p className="st-text-primary font-weight-600 font-size-15">Carbohydrate (g)- 4</p>
                                                        </div>
                                                        <div className="col-6 col-lg-4 item px-2">
                                                            <p className="st-text-primary font-weight-600 font-size-15">Fat (g) - 6</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* RECIPES DETAILS SEC 2 */}
                                                <div className="recipe-details-sec-2 px-2 mt-3 mt-lg-4">
                                                    {/* top sec */}
                                                    <div className="top-sec d-flex mb-3">
                                                        <p className="name st-heading heading-xs font-family-secondary-medium text-center pr-2">{state.recipe.title}</p>
                                                        <p className="date d-flex align-items-center font-weight-600 font-size-13 ml-auto">
                                                            <FeatherIcon
                                                                icon="calendar"
                                                                size="15"
                                                            />
                                                            {/* <span className="ml-2">10 FEB 2020</span> */}
                                                            <span className="ml-2">
                                                                <Moment format="DD MMM YYYY">
                                                                    {state.recipe.createdAt.date}
                                                                </Moment>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    {/* bottom sec */}
                                                    <div className="bottom-sec">
                                                        <p className="desc st-text-light">
                                                            {state.recipe.content.replace(/(<([^>]+)>)/ig, '')}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* RECIPES DETAILS SEC 3 */}
                                                <div className="recipe-details-sec-3 px-2 mt-3 mt-lg-4">
                                                    <div className="d-flex flex-wrap">
                                                        {/* lt-sec */}
                                                        <div className="col-12 col-lg-6 lt-sec pl-0 pr-0 pr-lg-2">
                                                            <p className="name st-heading heading-xs font-family-secondary-medium mb-3">Ingredients</p>
                                                            {
                                                                state.recipe.ingredients && state.recipe.ingredients.length ? state.recipe.ingredients.map(ing => (
                                                                    /* item */
                                                                    <div key={ing.id} className="categories-list-item item-primary">
                                                                        <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                                            <p className="position-relative">{ing.content}</p>
                                                                        </div>
                                                                    </div>
                                                                )) : <p className="not-found-text st-text-gray">No Ingredients Found</p>
                                                            }
                                                        </div>

                                                        {/* rt-sec */}
                                                        <div className="col-12 col-lg-6 rt-sec pr-0 pl-0 pl-lg-2">
                                                            <p className="name st-heading heading-xs font-family-secondary-medium mb-3">Directions</p>

                                                            {
                                                                state.recipe.directions && state.recipe.directions.length ? state.recipe.directions.map(dir => (
                                                                    /* item */
                                                                    <div key={dir.id} className="item mb-3">
                                                                        <p className="st-tag1 d-inline-block text-uppercase font-weight-600 font-size-14 text-white mb-1">
                                                                            {dir.steps}
                                                                        </p>
                                                                        <p className="st-text-light">{dir.content}</p>
                                                                    </div>
                                                                )) : <p className="not-found-text st-text-gray">No Directions Found</p>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </React.Fragment>
                                        )
                                    )
                                }

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
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Body Transformation</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Breakfast</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Cereals And Grains</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Cookies</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Dals Kadhis And Pulses</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Body Transformation</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Breakfast</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Cereals And Grains</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Cookies</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Dals Kadhis And Pulses</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Body Transformation</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Breakfast</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Cereals And Grains</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <a href="#" className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-dark font-size-15 mb-3">
                                                    <p className="position-relative font-weight-600">Cookies</p>
                                                </a>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
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
                                            <Image src={recipeImgdescription} fluid className="w-100" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        )
    }
}


const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken
    };
}

export default connect(getDataFromStore, null)(RecipeDetailsSec)