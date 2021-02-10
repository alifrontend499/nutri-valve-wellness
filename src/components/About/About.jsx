import React, { Component } from 'react'

// components
import Header from 'components/common/Header/Header'
import Footer from 'components/common/Footer/Footer'
import PageBanner from 'components/common/PageBanner/PageBanner'

// components
import AboutMain from './includes/AboutMain'
import AboutSec3 from './includes/AboutSec3'

export default class About extends Component {
    render() {
        return (
            <>
                <Header />

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="About Us"
                        lastLinkName="About Us"
                        lastLinkPath="/about-us"
                    />

                    <AboutMain />

                    <AboutSec3 />

                    <Footer />
                </section>
            </>
        )
    }
}
