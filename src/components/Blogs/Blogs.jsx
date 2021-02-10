import React, { Component } from 'react'

// components
import Header from 'components/common/Header/Header'
import Footer from 'components/common/Footer/Footer'
import PageBanner from 'components/common/PageBanner/PageBanner'
import OurBlogs from 'components/common/OurBlogs/OurBlogs'

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
