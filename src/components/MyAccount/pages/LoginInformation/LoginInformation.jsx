import React, { Component } from 'react'

// bootstrap
import { Container, Image } from 'react-bootstrap'

// styles
import '../../styles/my-account-styles.css'

// componetns
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// images
import mobileIcon from 'assets/images/icons/hamburger-menu-icon.png'

// account left menu
import AccountLeftMenu from '../../includes/AccountLeftMenu';

export default class LoginInformation extends Component {
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
                    lastLinkName2="Login Information"
                    lastLinkPath2="/my-account/edit/login-info"
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
                                    <AccountLeftMenu isMobileMenuVisible={this.state.isMobileMenuVisible} />
                                </div>
                            </div>

                            {/* CONTENT SECTION */}
                            <div className={`ma-content login-information-content ${this.state.isMobileMenuVisible ? 'active' : ''}`}>
                                <div className="inner p-3 p-lg-5">
                                    <div className="st-heading-wrapper mb-3 mb-lg-4">
                                        <p className="st-heading heading-xs st-text-primary font-family-sec font-family-secondary-medium">Login Information</p>
                                        <p className="desc mt-1">Welcome to your customer area. Use left menu to navigate around.</p>
                                    </div>

                                    <div className="ma-content-main d-flex flex-wrap">
                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pl-0 pr-0 pr-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Email Address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Confirm Email Address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pl-0 pr-0 pr-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>

                                        {/* form field */}
                                        <div className="form-item col-12 col-md-6 pr-0 pl-0 pl-md-2 mb-3">
                                            <div className="st-form">
                                                <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Confirm Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="btns mt-3">
                                            <button type="button" className="btn st-btn st-btn-primary rounded-0">Submit</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FOOTER */}
                {/* <Footer /> */}
            </>
        )
    }
}
