import React, { Component } from 'react'

// styles
import './styles/recipes-styles.css'

// components
// import Header from 'components/CommonComponents/Header/Header'
// import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

import RecipesSerach from './includes/RecipesSerach'
import RecipesList from './includes/RecipesList'
import { Helmet } from 'react-helmet'

// redux
import { connect } from 'react-redux';

// redux actions
import { addRecipes, updateRecipes } from 'redux/actions/actionRecipes'

// recipes api
import { getRecipes } from 'utlis/apis/API_recipes'

class Recipes extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            loading: false,
            currentPage: 1,

            // recipes: [],
            lastPage: null,

            showMoreBtnDisabled: false,
            showMoreBtnLoading: false,
            showMoreBtnText: 'show more',
        }

        // bindings
        this.getMoreRecipes = this.getMoreRecipes.bind(this)
    }

    componentDidMount() {
        // CHECKING IF GLOBAL RECIPES DATA IS EMPTY
        if (this.props.recipes && this.props.recipes.length === 0) {
            this.setState({
                loading: true,
            })

            // GETTING INITIAL DATA
            getRecipes(this.props.commonToken, this.state.currentPage).then(res => {
                this.setState({
                    lastPage: res.data.lastPage,
                    // recipes: [...res.data.items],
                    loading: false
                })

                // adding recipes data to the redux store
                this.props.addRecipes(res.data.items)

            }).catch(err => {
                console.log('error occured ', err.message)
            })
        }

    }

    // GET MORE RECIPES
    getMoreRecipes = ev => {
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
                getRecipes(this.props.commonToken, this.state.currentPage).then(res => {
                    this.setState({
                        lastPage: res.data.lastPage,
                        // recipes: [...this.state.recipes, ...res.data.items],
                        showMoreBtnDisabled: false,
                        showMoreBtnLoading: false
                    })

                    // updating recipes data to the redux store
                    this.props.updateRecipes(res.data.items)
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
        const state = this.state
        return (
            <>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nutri Health Care | Recipes</title>
                    <link rel="canonical" href="" />
                    <meta name="description" content="Recipes" />
                </Helmet>
                {/* <Header /> */}

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Recipes"
                        lastLinkName="Recipes"
                        lastLinkPath="/recipes"
                    />

                    {/* RECIPES SEARCH */}
                    <RecipesSerach />

                    {/* RECIPES LIST */}
                    <RecipesList
                        loading={state.loading}

                        // recipes={this.props.recipes}
                        getMoreRecipes={ev => this.getMoreRecipes(ev)}

                        showMoreBtnDisabled={state.showMoreBtnDisabled}
                        showMoreBtnLoading={state.showMoreBtnLoading}
                        showMoreBtnText={state.showMoreBtnText}

                    />

                    {/* footer */}
                    {/* <Footer /> */}
                </section>
            </>
        )
    }
}


const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken,
        recipes: state.recipes.recipes,
    };
}

const dispatchActionsToProps = dispatch => {
    return {
        addRecipes: recipesArray => dispatch(addRecipes(recipesArray)),
        updateRecipes: updatedRecipesArray => dispatch(updateRecipes(updatedRecipesArray)),
    }
}

export default connect(getDataFromStore, dispatchActionsToProps)(Recipes)