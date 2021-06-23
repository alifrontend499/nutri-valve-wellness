import React, { Component } from 'react'

// redux
import { connect } from 'react-redux';

// bootstrap
import { Container, Image } from 'react-bootstrap'

// styles
import '../../styles/my-account-styles.css'

// componetns
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// images
import mobileIcon from 'assets/images/icons/hamburger-menu-icon.png'

// router
import { Link } from 'react-router-dom'

// account left menu
import AccountLeftMenu from '../../includes/AccountLeftMenu';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobileMenuVisible: false
        }

        // FUNCTIONS BINDINGS
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }


    // for mobile side menu
    toggleSideMenu = () => {
        // checking Window Width for mobile menu
        if (window && window.innerWidth < 768) {
            this.setState({
                isMobileMenuVisible: !this.state.isMobileMenuVisible
            })
        }
    }


    render() {
        return (
            <>
                {/* HEADER */}
                {/* <Header /> */}

                {/* BANNER */}
                <PageBanner
                    pageTitle="My Account"
                    lastLinkName="My Account"
                    lastLinkPath="/my-account"
                />

                {/* WRAPPER */}
                <section id="wrapper">

                    {/* MY ACCOUT SECTION */}
                    <section id="my-account" className="ST_def-pad-TB">
                        <Container>
                            <div className="my-account d-flex flex-wrap position-relative st-bg-slate overflow-hidden">
                                <div className={`ma-mobile-icon position-absolute d-md-none ${this.state.isMobileMenuVisible ? 'active' : ''}`}>
                                    <Image src={mobileIcon} fluid width="25"
                                        onClick={this.toggleSideMenu}
                                    />
                                </div>

                                {/* LEFT SECTION */}
                                <div className={`ma-leftbar position-absolute h-100 ${this.state.isMobileMenuVisible ? 'active' : ''}`}>
                                    <div className="inner border-right st-bg-slate overflow-auto h-100">
                                        <AccountLeftMenu isMobileMenuVisible={this.state.isMobileMenuVisible} />
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className={`ma-content dashboard-content ${this.state.isMobileMenuVisible ? 'active' : ''}`}>
                                    <div className="inner p-3 p-lg-5">
                                        <div className="st-heading-wrapper mb-3 mb-lg-4">
                                            <p className="st-heading heading-xs st-text-primary font-family-sec font-family-secondary-medium">Welcome {this.props.currentUser.userName}</p>
                                            <p className="desc mt-1">Welcome to your customer area. Use left menu to navigate around.</p>
                                        </div>

                                        <div className="ma-content-main">
                                            {/* frac */}
                                            <div className="frac mb-3">
                                                <Link to="/my-account/edit/login-info" className="inner d-flex align-items-center border bg-white text-decoration-none st-text-dark p-2 px-3">
                                                    <div className="text-sec media-body">
                                                        <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-2">Login Information</p>
                                                        <p className="desc font-family-secondary-light">Welcome to your customer area. Use left menu to navigate around.</p>
                                                    </div>
                                                </Link>
                                            </div>

                                            {/* frac */}
                                            <div className="frac mb-3">
                                                <Link to="/my-account/edit/personal-info" className="inner d-flex align-items-center border bg-white text-decoration-none st-text-dark p-2 px-3">
                                                    <div className="text-sec media-body">
                                                        <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-2">Personal Information</p>
                                                        <p className="desc font-family-secondary-light">Edit Your personal Information here.</p>
                                                    </div>
                                                </Link>
                                            </div>

                                            {/* frac */}
                                            <div className="frac mb-3">
                                                <Link to="/my-account/sessions" className="inner d-flex align-items-center border bg-white text-decoration-none st-text-dark p-2 px-3">
                                                    <div className="text-sec media-body">
                                                        <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-2">Sessions</p>
                                                        <p className="desc font-family-secondary-light">Check your ongoing sessions.</p>
                                                    </div>
                                                </Link>
                                            </div>

                                            {/* frac */}
                                            <div className="frac mb-3">
                                                <Link to="/my-account/diet-plan" className="inner d-flex align-items-center border bg-white text-decoration-none st-text-dark p-2 px-3">
                                                    <div className="text-sec media-body">
                                                        <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-2">Diet Plan</p>
                                                        <p className="desc font-family-secondary-light">Make sure to follow your diet plan.</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>

                    {/* FOOTER */}
                    {/* <Footer /> */}
                </section>
            </>
        )
    }
}


const getDataFromStore = state => {
    return {
        currentUser: state.auth.currentUser
    };

}

export default connect(getDataFromStore, null)(Dashboard)