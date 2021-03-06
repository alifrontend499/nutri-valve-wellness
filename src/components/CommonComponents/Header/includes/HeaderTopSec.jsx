import React, { Component } from 'react'

// header style
import '../styles/header-styles.css'

// bootstrap
import {
    Container,
} from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// icons : fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faLinkedinIn,
    faPinterest
} from '@fortawesome/free-brands-svg-icons'

// router
import { Link } from 'react-router-dom'

// redux
import { connect } from 'react-redux';

// common helpers
import { globalLogout } from 'utlis/helpers/Helpers_common'

class HeaderTopSec extends Component {

    constructor(props) {
        super(props)

        // bindings
        this.handleLogout = this.handleLogout.bind(this)
    }

    // logout 
    handleLogout = ev => {
        ev.preventDefault()
        console.log("logout")

        globalLogout()
    }

    render() {
        const props = this.props
        return (
            <Container>
                <div className="header-top-sec border-bottom st-border-gray d-flex flex-wrap align-items-center">
                    {/* lt-sec */}
                    <div className="lt-sec">
                        <div className="inner d-flex flex-wrap justify-content-between justify-content-md-start">
                            {/* link */}
                            <a href="callto:+91 816 9771 597"
                                className="ht-link-call link-with-icon d-flex align-items-center text-decoration-none st-text-light font-size-15 mr-3 mr-lg-5"
                                title="Call To: +91 816 9771 597">
                                <FeatherIcon
                                    icon="phone-call"
                                    size="18"
                                    className="mr-2 st-text-secondary d-none d-sm-block" />
                                <span>+91 816 9771 597</span>
                            </a>

                            {/* link */}
                            <a href="mailto:info@nutrivaluewellnes.com"
                                className="ht-link-email link-with-icon d-flex align-items-center text-decoration-none st-text-light font-size-15"
                                title="Mail To: info@nutrivaluewellnes.com">
                                <FeatherIcon
                                    icon="mail"
                                    size="18"
                                    className="mr-2 st-text-secondary d-none d-sm-block" />
                                <span>info@nutrivaluewellnes.com</span>
                            </a>
                        </div>
                    </div>

                    {/* rt-sec */}
                    <div className="rt-sec mt-md-0 ml-md-auto d-none d-md-block">
                        <div className="inner d-flex flex-wrap">
                            {/* social icons */}
                            <ul className="social-links-icons d-flex align-items-center mr-3 mr-lg-4">
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none st-text-light font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Facebook">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none st-text-light font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Instagram">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none st-text-light font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Twitter">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none st-text-light font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Youtube">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none st-text-light font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Linkedin">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        target="_blank"
                                        className="text-decoration-none st-text-light font-size-20 text-center d-flex align-items-center justify-content-center"
                                        title="Pinterest">
                                        <FontAwesomeIcon icon={faPinterest} />
                                    </a>
                                </li>
                            </ul>

                            {/* link */}
                            <div
                                className="ht-link-login-and-register link-with-icon d-flex align-items-center font-size-15 ml-auto ml-md-0">
                                {
                                    props.currentUser ? (
                                        <React.Fragment>
                                            <FeatherIcon
                                                icon="user"
                                                size="18"
                                                className="mr-2 st-text-secondary" />
                                            <Link to="/my-account" className="st-text-light">Account</Link>
                                            <a href="#" className="st-text-light" onClick={this.handleLogout}>Logout</a>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <FeatherIcon
                                                icon="lock"
                                                size="18"
                                                className="mr-2 st-text-secondary" />
                                            <Link to="/auth" className="st-text-light">Login</Link>
                                            {/* <Link to="/home" className="st-text-light">Register</Link> */}
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        )
    }
}

const getDataFromStore = state => {
    return {
        currentUser: state.auth.currentUser
    };

}

export default connect(getDataFromStore, null)(HeaderTopSec)