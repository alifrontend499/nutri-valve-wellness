import React, { Component } from 'react'

// styles
import '../../../styles/recipes-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'

// images
import recipeBigImg from 'assets/images/recipes/recipe-big-img.jpg'
import recipeImgdescription from 'assets/images/recipes/right-img.jpg'

// icons : feather
import FeatherIcon from 'feather-icons-react';

export default class RecipeDetailsSec extends Component {
    render() {
        return (
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

                                {/* RECIPES DETAILS SEC 1 */}
                                <div className="recipe-details-sec-1 px-2 mt-3 mt-lg-4">
                                    <p className="name st-heading heading-xs font-family-secondary-medium text-center mb-3 mb-lg-4">Baked Teriyaki Chicken</p>
                                    <div className="d-flex justify-content-around align-items-center border-top border-bottom st-border-secondary py-3 mb-3 mb-lg-4">
                                        <div className="item px-2">
                                            <p className="st-text-primary font-weight-600 font-size-15">Energy (kcal)- 103</p>
                                        </div>
                                        <div className="item px-2">
                                            <p className="st-text-primary font-weight-600 font-size-15">Protein (g) - 11</p>
                                        </div>
                                        <div className="item px-2">
                                            <p className="st-text-primary font-weight-600 font-size-15">Carbohydrate (g)- 4</p>
                                        </div>
                                        <div className="item px-2">
                                            <p className="st-text-primary font-weight-600 font-size-15">Fat (g) - 6</p>
                                        </div>
                                    </div>
                                </div>

                                {/* RECIPES DETAILS SEC 2 */}
                                <div className="recipe-details-sec-2 px-2 mt-3 mt-lg-4">
                                    {/* top sec */}
                                    <div className="top-sec d-flex mb-3">
                                        <p className="name st-heading heading-xs font-family-secondary-medium text-center pr-2">Khyati's Health-O-Meter Says:</p>
                                        <p className="date d-flex align-items-center font-weight-600 font-size-13 ml-auto">
                                            <FeatherIcon
                                                icon="calendar"
                                                size="15"
                                            />
                                            <span className="ml-2">10 FEB 2020</span>
                                        </p>
                                    </div>
                                    {/* bottom sec */}
                                    <div className="bottom-sec">
                                        <p className="desc st-text-light">
                                            Chicken tikka masala, rich tomato-based curry with tender, flavorful chunks of boneless chicken. This recipe is low fat & you can relish it by preparing at home with minimum oil as you need not sacrifice the taste as you to trim the fat in your diet. It has a good amount of proteins, the tomatoes will add lycopene, a powerful carotenoid that may have an anti-inflammatory effect. This delicious recipe should be served with brown rice or roti.
                                                </p>
                                    </div>
                                </div>

                                {/* RECIPES DETAILS SEC 3 */}
                                <div className="recipe-details-sec-3 px-2 mt-3 mt-lg-4">
                                    <div className="d-flex">
                                        {/* lt-sec */}
                                        <div className="col-12 col-lg-6 lt-sec pl-0 pr-lg-2">
                                            <p className="name st-heading heading-xs font-family-secondary-medium mb-3">Ingredients</p>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Boneless chicken- 50 g</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Fresh coriander leaves (chopped)- 2 tsp</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Tomato puree- 50 g</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Fresh Yoghurt [hung curd]- 30 g</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Salt as per taste</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Black pepper (crushed) - a pinch</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Paprika- ¼ tsp</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Red chilli powder- a pinch</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Lemon juice - 2 tsp</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Tandoori masala- ½-1 tsp</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Coriander & cumin powder - 1 tsp</p>
                                                </div>
                                            </div>
                                            {/* item */}
                                            <div className="categories-list-item item-primary">
                                                <div className="d-flex align-items-center text-decoration-none categories-list-item-inner st-text-light mb-2">
                                                    <p className="position-relative">Oil- 1 tsp</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* rt-sec */}
                                        <div className="col-12 col-lg-6 rt-sec pr-0 pl-lg-2">
                                            <p className="name st-heading heading-xs font-family-secondary-medium mb-3">Directions</p>

                                            {/* item */}
                                            <div className="item mb-3">
                                                <p className="st-tag1 d-inline-block text-uppercase font-weight-600 font-size-14 text-white mb-1">
                                                    step 1
                                                        </p>
                                                <p className="st-text-light">Heat ½  Tsp. olive oil in the pan and add the chicken until become tender and become slightly browned. </p>
                                            </div>
                                            {/* item */}
                                            <div className="item mb-3">
                                                <p className="st-tag1 d-inline-block text-uppercase font-weight-600 font-size-14 text-white mb-1">
                                                    step 2
                                                        </p>
                                                <p className="st-text-light">Heat the remainder ½ Tsp. oil in another pan. </p>
                                            </div>
                                            {/* item */}
                                            <div className="item mb-3">
                                                <p className="st-tag1 d-inline-block text-uppercase font-weight-600 font-size-14 text-white mb-1">
                                                    step 3
                                                        </p>
                                                <p className="st-text-light">Add the garlic and ginger paste, salt, black pepper, half of the fresh coriander, paprika, red chilli powder, tandoori powder, coriander and cumin powder and fry on high heat for 15 seconds.</p>
                                            </div>
                                            {/* item */}
                                            <div className="item mb-3">
                                                <p className="st-tag1 d-inline-block text-uppercase font-weight-600 font-size-14 text-white mb-1">
                                                    step 4
                                                        </p>
                                                <p className="st-text-light">Add the tomato puree and cook on high heat for a minute.</p>
                                            </div>
                                            {/* item */}
                                            <div className="item mb-3">
                                                <p className="st-tag1 d-inline-block text-uppercase font-weight-600 font-size-14 text-white mb-1">
                                                    step 5
                                                        </p>
                                                <p className="st-text-light">Now add the yoghurt and simmer for 1-2 minutes.</p>
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
                                            <Image src={recipeImgdescription} fluid />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}
