import React, { Component } from 'react'

// styles
import '../styles/recipes-styles.css'

// bootstrap
import { Container } from 'react-bootstrap'

// icons : feather
import FeatherIcon from 'feather-icons-react';

export default class RecipesSerach extends Component {
    render() {
        return (
            <section id="recipes-search" className="st-bg-slate py-3 py-lg-5">
                <Container>
                    <div className="recipes-search d-flex align-items-center justify-content-center">
                        <div className="recipes-search-main d-inline-flex flex-wrap bg-white pl-md-2">
                            {/* field 1 */}
                            <div className="frac py-md-1 select">
                                <div className="inner pr-md-2 mr-md-2 st-form with-icon-left position-relative">
                                    <select className="form-control font-size-15" defaultValue="1">
                                        <option value="1">Food Group</option>
                                        <option value="2">Name</option>
                                        <option value="3">Cuisines</option>
                                        <option value="4">Ingredient</option>
                                    </select>
                                    <div className="icon position-absolute">
                                        <FeatherIcon
                                            icon="folder"
                                            size="14"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* field 2 */}
                            <div className="frac py-md-1 switch">
                                <div className="inner st-form d-flex align-items-center pr-md-2 mr-md-2 position-relative">
                                    <label className="d-flex align-items-center st-switch font-size-15 st-text-gray">
                                        <input type="checkbox" className="d-none" />
                                        <span className="bar d-block">
                                            <span className="round rounded-circle d-block"></span>
                                        </span>
                                        <span className="text d-block ml-2">Veg</span>
                                    </label>
                                </div>
                            </div>

                            {/* field 3 */}
                            <div className="frac py-md-1 input">
                                <div className="inner pr-md-2 mr-md-2 st-form with-icon-left position-relative">
                                    <input type="text" className="form-control font-size-15" placeholder="Search Recipe" />
                                    <div className="icon position-absolute">
                                        <FeatherIcon
                                            icon="help-circle"
                                            size="14"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* btns */}
                            <div className="btns">
                                <button className="btn st-btn st-btn-primary font-size-15 font-weight-600 h-100">Search Now</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}
