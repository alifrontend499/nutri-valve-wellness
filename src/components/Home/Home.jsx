import React, { Component } from 'react'

// components
import Header from 'components/common/Header/Header'
import HomeSlider from './includes/HomeSlider/HomeSlider'
import WhatWeOffer from './includes/WhatWeOffer/WhatWeOffer'
import HomeAbout from './includes/HomeAbout/HomeAbout'
import StoryOfSuccess from './includes/StoryOfSuccess/StoryOfSuccess'
import HomeDailyTips from './includes/HomeDailyTips/HomeDailyTips'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />

                <section id="st-wrapper">
                    <HomeSlider />

                    <WhatWeOffer />

                    <HomeAbout />

                    <StoryOfSuccess />

                    <HomeDailyTips />
                </section>

            </div>
        )
    }
}
