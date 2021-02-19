import React, { Component } from 'react'

// bootstrap
import { Container, Image } from 'react-bootstrap'

// styles
import '../../styles/my-account-styles.css'

// componetns
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// images
import mobileIcon from 'assets/images/icons/hamburger-menu-icon.png'

// router
import { Link } from 'react-router-dom'

export default class PersonalInformation extends Component {
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
                <Header />

                {/* BANNER */}
                <PageBanner
                    pageTitle="My Account"
                    lastLinkName="My Account"
                    lastLinkPath="/my-account"
                />


                {/* MY ACCOUT SECTION */}
                <section id="my-account" className="ST_def-pad-TB">
                    <Container>
                        <div className="my-account d-flex flex-wrap position-relative st-bg-slate overflow-hidden">
                            {/* mobile menu */}
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
                                            <li className="w-100 menu-item">
                                                <Link to="my-account" className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                                    <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                                    <span className="ml-2">Dashboard</span>
                                                </Link>
                                            </li>
                                            <li className="w-100 menu-item">
                                                <Link to="my-account" className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                                    <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                                    <span className="ml-2">Account Information</span>
                                                </Link>
                                            </li>
                                            <li className="w-100 menu-item active">
                                                <Link to="my-account" className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                                    <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                                    <span className="ml-2">Personal Information</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* CONTENT SECTION */}
                            <div className={`ma-content personal-information-content ${this.state.isMobileMenuVisible ? 'active' : ''}`}>
                                <div className="inner p-3 p-lg-5">
                                    <div className="st-heading-wrapper mb-3 mb-lg-4">
                                        <p className="st-heading heading-xs st-text-primary font-family-sec font-family-secondary-medium">Personal Information</p>
                                        <p className="desc mt-1">Edit Your personal Information here.</p>
                                    </div>

                                    <div className="ma-content-main d-flex flex-wrap">
                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pl-0 pr-0 pr-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">First Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Last Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pl-0 pr-0 pr-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Phone Number</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Post Code</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pl-0 pr-0 pr-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Address 1</label>
                                                <textarea rows="3" className="form-control"></textarea>
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Address 2</label>
                                                <textarea rows="3" className="form-control"></textarea>
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pl-0 pr-0 pr-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">City</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">State</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pl-0 pr-0 pr-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Country</label>
                                                <select className="form-control">
                                                    <option>India</option>
                                                    <option>Australia</option>
                                                    <option>America</option>
                                                    <option>Canada</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="btns col-12 px-0 mt-3">
                                            <button type="button" className="btn st-btn st-btn-primary rounded-0">Submit</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FOOTER */}
                <Footer />
            </>
        )
    }
}
