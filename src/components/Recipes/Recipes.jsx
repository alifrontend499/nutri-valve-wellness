import React, { Component } from 'react'

// styles
import './styles/recipes-styles.css'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

import RecipesSerach from './includes/RecipesSerach'
import RecipesList from './includes/RecipesList'
import { Helmet } from 'react-helmet'

export default class Blogs extends Component {
    render() {
        return (
            <>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nutri Health Care | Recipes</title>
                    <link rel="canonical" href="" />
                    <meta name="description" content="Recipes" />
                </Helmet>
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

                    {/* RECIPES LIST */}
                    <RecipesList />

                    {/* footer */}
                    <Footer />
                </section>
            </>
        )
    }
}
