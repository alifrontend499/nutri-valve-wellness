
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
import HTMLparser from "html-react-parser";

class DietPlan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isMobileMenuVisible: false,
            data: ""
        }

        // FUNCTIONS BINDINGS
        this.toggleSideMenu = this.toggleSideMenu.bind(this)
    }

    componentDidMount() {
        this.setState({data:this.props.currentUser.activeSession})
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
        const {data} = this.state;
        return (
            <>
                {/* HEADER */}
                {/* <Header /> */}

                {/* BANNER */}
                <PageBanner
                    pageTitle="My Account"
                    lastLinkName="My Account"
                    lastLinkPath="/my-account"
                    lastLinkName2="Diet Plan"
                    lastLinkPath2="/my-account/diet-plan"
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
                                        <p className="st-heading heading-xs st-text-primary font-family-sec font-family-secondary-medium">Diet Plan</p>
                                    </div>

                                    <div className="diet-plan-container d-flex flex-wrap">
                                        <div className="frac mb-2">
                                            <div className="st-heading-wrapper mb-3">
                                                <p className="st-heading heading-xs font-family-secondary-medium mb-3">{data && data.dietPlan && data.dietPlan.title}</p>
                                            </div>
                                            <p className="desc desc st-text-light font-size-15 mb-2">
                                            {HTMLparser(`${data && data.dietPlan && data.dietPlan.content}`)}
                                            </p>
                                            
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

export default connect(getDataFromStore, null)(DietPlan)