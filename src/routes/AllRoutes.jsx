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
import BlogDetails from 'components/common/OurBlogs/pages/BlogDetails/BlogDetails'

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


                <Route path="**" component={PageNotFound} />
            </Switch>
        )
    }
}
