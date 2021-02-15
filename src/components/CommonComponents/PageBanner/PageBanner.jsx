import React, { Component } from 'react'

// styles
import './styles/page-banner-styles.css'

// bootstrap
import {
    Container,
    Image
} from 'react-bootstrap'

// default image
import defaultPath from 'assets/images/default-page-banner.png'

// router
import { Link } from 'react-router-dom';


export default class PageBanner extends Component {
    defaultBannerImgPath = defaultPath;
    constructor(props) {
        super(props)

    }

    render() {
        const { bannerImgPath, pageTitle, lastLinkName, lastLinkPath } = this.props;
        return (
            <section id="page-banner" style={{ backgroundImage: `url(${bannerImgPath ? bannerImgPath : this.defaultBannerImgPath})` }}>
                <Container fluid className="px-0">
                    <div className="page-banner position-relative">
                        <Container>
                            <div className="caption">
                                <div className="caption-inner text-center">
                                    <p className="name st-heading st-text-dark heading-sm font-family-secondary-bold mb-3">{pageTitle}</p>

                                    <ul className="st-breadcrumbs list-unstyled d-flex flex-wrap justify-content-center">
                                        <li>
                                            <Link to="/home" className="font-weight-600 text-decoration-none st-text-dark font-size-17">Home</Link>
                                        </li>
                                        <li>
                                            <Link to={lastLinkPath} className="font-weight-600 text-decoration-none st-text-dark font-size-17">{lastLinkName}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Container>
                    </div>
                </Container>
            </section>
        )
    }
}
