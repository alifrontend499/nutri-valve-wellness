import React, { Component } from 'react'

// bootstrap
import { Container, Image } from 'react-bootstrap'

// styles
import '../../styles/my-account-styles.css'

// componetns
// import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// images
import mobileIcon from 'assets/images/icons/hamburger-menu-icon.png'
// images
import addressBookIcon from 'assets/images/icons/address-book-icon.png'
import accountSettingsIcon from 'assets/images/icons/account-setting-icon.png'

// router
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
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
                                        {/* user details */}
                                        <div className="ma-leftbar-user-details border-bottom p-3 d-flex mb-3">
                                            {/* img sec */}
                                            <div className="img-sec border rounded-circle overflow-hidden bg-white">
                                                <Image
                                                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                                                    height="45"
                                                    width="45"
                                                    fluid
                                                />
                                            </div>

                                            {/* text sec */}
                                            <div className="text-sec media-body pl-3">
                                                <p className="sm-text font-size-13">Welcome,</p>
                                                <p className="user-name font-family-secondary-medium font-size-17 st-text-primary">Deep Dive Media</p>
                                            </div>
                                        </div>

                                        {/* user menu */}
                                        <div className="ma-leftbar-menu mb-3 mb-lg-4">
                                            <ul className="list-unstyled">
                                                <li className="w-100 menu-item active">
                                                    <Link to="my-account" className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                                        <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                                        <span className="ml-2">Dashboard</span>
                                                    </Link>
                                                </li>
                                                <li className="w-100 menu-item">
                                                    <Link to="my-account" className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                                        <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                                        <span className="ml-2">Session</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT SECTION */}
                                <div className={`ma-content dashboard-content ${this.state.isMobileMenuVisible ? 'active' : ''}`}>
                                    <div className="inner p-3 p-lg-5">
                                        <div className="st-heading-wrapper mb-3 mb-lg-4">
                                            <p className="st-heading heading-xs st-text-primary font-family-sec font-family-secondary-medium">Welcome Deep Dive Media</p>
                                            <p className="desc mt-1">Welcome to your customer area. Use left menu to navigate around.</p>
                                        </div>

                                        <div className="ma-content-main">
                                            {/* frac */}
                                            <div className="frac mb-3">
                                                <Link to="/" className="inner d-flex align-items-center border bg-white text-decoration-none st-text-dark p-2">
                                                    <div className="img-sec">
                                                        <Image src={addressBookIcon} fluid height="70" width="70" className="" />
                                                    </div>
                                                    <div className="text-sec media-body pl-2 pl-md-4">
                                                        <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-2">Account Information</p>
                                                        <p className="desc font-family-secondary-light">Manage your account details, update your email address or change your password.</p>
                                                    </div>
                                                </Link>
                                            </div>

                                            {/* frac */}
                                            <div className="frac mb-3">
                                                <Link to="/" className="inner d-flex align-items-center border bg-white text-decoration-none st-text-dark p-2">
                                                    <div className="img-sec">
                                                        <Image src={accountSettingsIcon} fluid height="70" width="70" className="" />
                                                    </div>
                                                    <div className="text-sec media-body pl-2 pl-md-4">
                                                        <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-2">Personal Information</p>
                                                        <p className="desc font-family-secondary-light">Create new addresses and edit or delete existing addresses.</p>
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
