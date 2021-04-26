import React, { Component } from 'react'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'
import HealthMeter from 'components/CommonComponents/HealthMeter/HealthMeter'
import { Helmet } from 'react-helmet'

export default class HealthMeterPage extends Component {
    render() {
        return (
            <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Nutri Health Care | BMI Calculator</title>
                <link rel="canonical" href="" />
                <meta name="description" content="BMI Calculator" />
            </Helmet>
                {/* HEADER */}
                <Header />

                <section id="st-wrapper">
                    {/* PAGE BANNER */}
                    <PageBanner
                        pageTitle="Health Meter"
                        lastLinkName="Health Meter"
                        lastLinkPath="/health-meter"
                    />

                    {/* HEALTH METER SEC */}
                    <section
                        id="page-health-meter"
                        className="st-bg-slate">
                        <HealthMeter />
                    </section>

                    {/* FOOTER */}
                    <Footer />
                </section>
            </>
        )
    }
}
