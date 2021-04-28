import React, { Component } from 'react'

// components
// import Header from 'components/CommonComponents/Header/Header'
// import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'
import OurBlogs from 'components/CommonComponents/OurBlogs/OurBlogs'
import { Helmet } from 'react-helmet'

export default class Blogs extends Component {
    render() {
        return (
            <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Nutri Health Care | Blogs</title>
                <link rel="canonical" href="" />
                <meta name="description" content="Blogs" />
            </Helmet>
                {/* <Header /> */}

                <section id="st-wrapper">
                    {/* page banner */}
                    <PageBanner
                        pageTitle="Blogs"
                        lastLinkName="Our Blogs"
                        lastLinkPath="/blogs"
                    />

                    <OurBlogs />

                    {/* <Footer /> */}
                </section>
            </>
        )
    }
}
