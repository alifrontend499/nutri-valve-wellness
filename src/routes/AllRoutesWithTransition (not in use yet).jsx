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

import PageNotFound from 'components/PageNotFound/PageNotFound'

// react transition
import { TransitionGroup, Transition } from "react-transition-group";

const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5
    let timeline

    if (pathname === '/')
        timeline = getHomeTimeline(node, delay)
    else
        timeline = getDefaultTimeline(node, delay)

    timeline.play()
}

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const texts = node.querySelectorAll('h1 > div');

    timeline
        .from(node, 0, { display: 'none', autoAlpha: 0, delay })
        .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

    return timeline
}


export default class AllRoutes extends Component {
    render() {
        return (
            <Route render={(location) => {
                const { pathname, key } = location
                return (
                    <TransitionGroup component={null}>
                        <Transition
                            key={key}
                            appear={true}
                            onEnter={(node, appears) => play(pathname, node, appears)}
                            timeout={{ enter: 750, exit: 0 }}
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route path="/home" component={Home} />

                                <Route path="/about-us" component={About} />

                                <Route path="/blogs" component={Blogs} />
                                <Route path="/blog-details" component={BlogDetails} />

                                <Route path="/contact-us" component={ContactUs} />

                                <Route path="**" component={PageNotFound} />
                            </Switch>
                        </Transition>
                    </TransitionGroup>
                )
            }} />
        )
    }
}
