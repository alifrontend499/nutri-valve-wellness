import React, { Component } from 'react'

// router
import {
    Switch,
    Route
} from 'react-router-dom'

// components
import Home from 'components/Home/Home'
import About from 'components/About/About'

import Blogs from 'components/Blogs/Blogs'
import BlogDetails from 'components/CommonComponents/OurBlogs/pages/BlogDetails/BlogDetails'

import ContactUs from 'components/ContactUs/ContactUs'

import Disclaimer from 'components/Disclaimer/Disclaimer'

import TermsAndPrivacyPolicies from 'components/TermsAndPrivacyPolicies/TermsAndPrivacyPolicies'

import SuccessStories from 'components/SuccessStories/SuccessStories'

import Authentication from 'components/Authentication/Authentication'

import Programs from 'components/Programs/Programs'

import Recipes from 'components/Recipes/Recipes'
import RecipeDetails from 'components/Recipes/pages/RecipeDetails/RecipeDetails'

import HealthMeterPage from 'components/HealthMeterPage/HealthMeterPage'
import MyAccount from 'components/MyAccount/MyAccount'

import PageNotFound from 'components/PageNotFound/PageNotFound'


export default class AllRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />

                <Route path="/about-us" component={About} />

                <Route path="/blogs" component={Blogs} />
                <Route path="/blog-details" component={BlogDetails} />

                <Route path="/contact-us" component={ContactUs} />

                <Route path="/disclaimer" component={Disclaimer} />

                <Route path="/tearms-and-privacy-policies" component={TermsAndPrivacyPolicies} />

                <Route path="/success-story" component={SuccessStories} />

                <Route path="/auth" component={Authentication} />

                <Route path="/programs" component={Programs} />
                <Route path="/program/:slug" component={Programs} />

                <Route path="/recipes" component={Recipes} />
                <Route path="/recipe-details" component={RecipeDetails} />

                <Route path="/health-meter" component={HealthMeterPage} />
                <Route path="/my-account" component={MyAccount} />


                <Route path="**" component={PageNotFound} />
            </Switch>
        )
    }
}
