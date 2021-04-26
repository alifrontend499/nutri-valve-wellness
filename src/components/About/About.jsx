import React, { Component } from 'react'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// components
import AboutMain from './includes/AboutMain'
import AboutSec3 from './includes/AboutSec3'
import { Helmet } from 'react-helmet'

export default class About extends Component {
    render() {
        return (
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nutri Health Care | About Us</title>
                <link rel="canonical" href="" />
                <meta name="description" content="About Us" />
            </Helmet>
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
