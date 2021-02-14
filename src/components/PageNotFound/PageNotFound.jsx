import React, { Component } from 'react'

// components
import Header from 'components/common/Header/Header'
import Footer from 'components/common/Footer/Footer'

// bootstrap
import {
    Container,
    Image,
} from 'react-bootstrap'

// images
import Img404 from 'assets/images/404.png'

// router
import { Link } from 'react-router-dom'

export default class PageNotFound extends Component {
    render() {
        return (
            <div>
                <Header />

                <section id="st-wrapper">
                    <section id="page-not-found" className="ST_def-pad-TB st-bg-slate">
                        <Container>
                            <div className="page-not-found text-center">
                                <Image src={Img404} fluid className="mx-auto mb-4 mb-lg-5" />
                                <p className="st-heading heading-xs font-family-sec font-family-secondary-bold mb-3">Something is wrong</p>
                                <p className="desc">
                                    Sorry we can't find the page you are looking for but relax, go to home
                                </p>

                                <Link to="/home" className="btn st-btn st-btn-secondary font-size-14 mt-3 mt-lg-5">Go to Home Page</Link>
                            </div>
                        </Container>
                    </section>

                    <Footer />
                </section>

            </div>
        )
    }
}
