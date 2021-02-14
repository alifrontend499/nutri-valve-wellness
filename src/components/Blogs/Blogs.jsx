import React, { Component } from 'react'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'
import OurBlogs from 'components/CommonComponents/OurBlogs/OurBlogs'

export default class Blogs extends Component {
    render() {
        return (
            <>
                <Header />

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Blogs"
                        lastLinkName="Our Blogs"
                        lastLinkPath="/blogs"
                    />

                    <OurBlogs />

                    <Footer />
                </section>
            </>
        )
    }
}
