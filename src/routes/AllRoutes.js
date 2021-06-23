import React, { Component } from "react";

// router
import { Switch, Route } from "react-router-dom";

// components
import Home from "components/Home/Home";
import About from "components/About/About";

import Blogs from "components/Blogs/Blogs";
import BlogDetails from "components/CommonComponents/OurBlogs/pages/BlogDetails/BlogDetails";

import ContactUs from "components/ContactUs/ContactUs";

import Disclaimer from "components/Disclaimer/Disclaimer";

import TermsAndPrivacyPolicies from "components/TermsAndPrivacyPolicies/TermsAndPrivacyPolicies";

import SuccessStories from "components/SuccessStories/SuccessStories";

import Authentication from "components/Authentication/Authentication";

import Programs from "components/Programs/Programs";

import Recipes from "components/Recipes/Recipes";
import RecipeDetails from "components/Recipes/pages/RecipeDetails/RecipeDetails";

import HealthMeterPage from "components/HealthMeterPage/HealthMeterPage";
import FinalResult from "components/CommonComponents/HealthMeter/includes/FinalResult";
import PageNotFound from "components/PageNotFound/PageNotFound";

import MyAccount from "components/MyAccount/MyAccount";

import LoginInfo from "components/MyAccount/pages/LoginInformation/LoginInformation";
import PersonalInfo from "components/MyAccount/pages/PersonalInformation/PersonalInformation";
import Sessions from "components/MyAccount/pages/Sessions/Sessions";
import DietPlan from "components/MyAccount/pages/DietPlan/DietPlan";

import ProtectedRoute from "./ProtectedRoute";

export default class AllRoutes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />

                <Route path="/about-us" component={About} />

                <Route path="/blogs" component={Blogs} />
                <Route path="/blog-details/:slug" component={BlogDetails} />

                <Route path="/contact-us" component={ContactUs} />

                <Route path="/disclaimer" component={Disclaimer} />

                <Route
                    path="/tearms-and-privacy-policies"
                    component={TermsAndPrivacyPolicies}
                />

                <Route path="/success-story" component={SuccessStories} />

                <Route path="/auth" component={Authentication} />

                <Route path="/programs" component={Programs} />
                <Route path="/program/:slug" component={Programs} />

                <Route path="/recipes" component={Recipes} />
                <Route path="/recipe-details/:slug" component={RecipeDetails} />

                <Route path="/health-meter" component={HealthMeterPage} />
                <Route path="/bmi-result" component={FinalResult} />

                <ProtectedRoute
                    authLoading={props.authLoading}
                    path="/my-account/"
                    component={MyAccount}
                    exact
                />
                <ProtectedRoute
                    authLoading={props.authLoading}
                    path="/my-account/edit/login-info"
                    component={LoginInfo}
                    exact
                />
                <ProtectedRoute
                    authLoading={props.authLoading}
                    path="/my-account/edit/personal-info"
                    component={PersonalInfo}
                    exact
                />
                <ProtectedRoute
                    authLoading={props.authLoading}
                    path="/my-account/sessions"
                    component={Sessions}
                    exact
                />
                <ProtectedRoute
                    authLoading={props.authLoading}
                    path="/my-account/diet-plan"
                    component={DietPlan}
                    exact
                />

                <Route path="**" component={PageNotFound} />
            </Switch>
        );
    }
}
