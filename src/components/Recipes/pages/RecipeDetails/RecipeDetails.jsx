import React, { Component } from 'react'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

import RecipesSerach from '../../includes/RecipesSerach'
import RecipeDetailsSec from './includes/RecipeDetailsSec'
import RelatedPosts from './includes/RelatedPosts'

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

                    {/* RECIPE DETAILS SECTION */}
                    <RecipeDetailsSec />

                    {/* RELATED POSTS SECTION */}
                    <RelatedPosts />

                    {/* FOOTER */}
                    <Footer />
                </section>
            </>
        )
    }
}
