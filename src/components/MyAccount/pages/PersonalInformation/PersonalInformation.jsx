import React, { Component } from 'react'

// bootstrap
import { Container, Image } from 'react-bootstrap'

// styles
import '../../styles/my-account-styles.css'

// componetns
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// images
import mobileIcon from 'assets/images/icons/hamburger-menu-icon.png'

// redux
import { connect } from 'react-redux';

// account left menu
import AccountLeftMenu from '../../includes/AccountLeftMenu';

class PersonalInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobileMenuVisible: false
        }

        // FUNCTIONS BINDINGS
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    componentDidMount() {
        console.log("current User ", this.props.currentUser);
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
                    lastLinkName2="Personal Information"
                    lastLinkPath2="/my-account/edit/personal-info"
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
                                                <select className="form-control" defaultValue="1">
                                                    <option value="1">India</option>
                                                    <option value="2">Australia</option>
                                                    <option value="3">America</option>
                                                    <option value="4">Canada</option>
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
                {/* <Footer /> */}
            </>
        )
    }
}


const getDataFromStore = state => {
    return {
        currentUser: state.auth.currentUser
    };

}

export default connect(getDataFromStore, null)(PersonalInformation)