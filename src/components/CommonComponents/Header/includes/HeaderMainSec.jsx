import React, { Component } from 'react'

// header style
import '../styles/header-styles.css'

// bootstrap
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Image,
} from 'react-bootstrap';

// router
import { Link, NavLink } from 'react-router-dom'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// logo
import appLogo from 'assets/images/app-header-logo.jpg'

export default class HeaderMainSec extends Component {
    constructor(props) {
        super(props)

        // STATE
        this.state = {
            menuVisibility: false
        }

        // BINDINGS
        this.onToggleMenu = this.onToggleMenu.bind(this)

        // REFS
        this.menuToggleBtnRef = React.createRef()
    }

    // EXECUTES WHEN MENU TOGGLES
    onToggleMenu = () => {
        this.setState({
            menuVisibility: !this.state.menuVisibility
        }, () => {
            console.log(this.state.menuVisibility);
        })
    }

    // HANDLING CLICK ON THE OVERLAY WHEN MENU IS OPEN
    handleOverlayClick = () => {
        this.menuToggleBtnRef.click()
    }

    render() {
        return (
            <>
                <Container>

                    {/* MENU FOR LARGE SCREENS */}
                    <div className="header-main-sec">
                        <Navbar
                            expand="lg"
                            sticky="top"
                            className="p-0"
                            onToggle={this.onToggleMenu}>
                            {/* logo */}
                            <Navbar.Brand
                                as={NavLink}
                                activeClassName="active"
                                to="/home"
                                className="p-0">
                                <Image src={appLogo} fluid />
                            </Navbar.Brand>

                            {
                                // overlay for menu
                                (this.state.menuVisibility) ?
                                    <div className="mobile-menu-overlay" onClick={this.handleOverlayClick}></div>
                                    : null
                            }

                            {/* mobile menu toggle button */}
                            <Navbar.Toggle aria-controls="header-nav-navbar" className={`${(this.state.menuVisibility) ? 'not-visible' : 'visible'}`} ref={toggleBtn => this.menuToggleBtnRef = toggleBtn} />

                            {/* menu */}
                            <Navbar.Collapse id="header-nav-navbar">
                                <Nav className="ml-auto">
                                    {/* dropdown menu */}
                                    <NavDropdown
                                        title="Programs"
                                        className="font-weight-700"
                                        id="header-nav-dropdown">
                                        {/* dropdown link */}
                                        <NavDropdown.Item
                                            as={NavLink}
                                            activeClassName="active"
                                            to="/programs"
                                            className=""
                                        >Weight Loss Challenge</NavDropdown.Item>

                                        {/* dropdown link */}
                                        <NavDropdown.Item
                                            as={NavLink}
                                            activeClassName="active"
                                            to="/programs"
                                            className=""
                                        >Battle PCOS</NavDropdown.Item>

                                        {/* dropdown link */}
                                        <NavDropdown.Item
                                            as={NavLink}
                                            activeClassName="active"
                                            to="/programs"
                                            className=""
                                        >Body Transformation</NavDropdown.Item>

                                        {/* dropdown link */}
                                        <NavDropdown.Item
                                            as={NavLink}
                                            activeClassName="active"
                                            to="/programs"
                                            className=""
                                        >Weight Gain</NavDropdown.Item>

                                        {/* dropdown link */}
                                        <NavDropdown.Item
                                            as={NavLink}
                                            activeClassName="active"
                                            to="/programs"
                                            className=""
                                        >Pregnancy and Motherhood</NavDropdown.Item>

                                        {/* dropdown link */}
                                        <NavDropdown.Item
                                            as={NavLink}
                                            activeClassName="active"
                                            to="/programs"
                                            className=""
                                        >Reshape Intermittent</NavDropdown.Item>
                                    </NavDropdown>

                                    {/* link */}
                                    <Nav.Link
                                        as={NavLink}
                                        activeClassName="active"
                                        to="/success-story"
                                        className="font-weight-700"
                                    >Success Story</Nav.Link>

                                    {/* link */}
                                    <Nav.Link
                                        as={NavLink}
                                        activeClassName="active"
                                        to="/recipes"
                                        className="font-weight-700"
                                    >Recipes</Nav.Link>

                                    {/* link */}
                                    <Nav.Link
                                        as={NavLink}
                                        activeClassName="active"
                                        to="/blogs"
                                        className="font-weight-700"
                                    >Blogs</Nav.Link>

                                    {/* link */}
                                    <Nav.Link
                                        as={NavLink}
                                        activeClassName="active"
                                        to="/health-meter"
                                        className="font-weight-700"
                                    >Heath Meter</Nav.Link>

                                    {/* link */}
                                    <Nav.Link
                                        as={NavLink}
                                        activeClassName="active"
                                        to="/about-us"
                                        className="font-weight-700"
                                    >About Us</Nav.Link>

                                    {/* link */}
                                    <Nav.Link
                                        as={NavLink}
                                        activeClassName="active"
                                        to="/contact-us"
                                        className="font-weight-700"
                                    >Contact Us</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>

                            {/* LOGIN BUTTON FOR MOBILE */}
                            <div
                                className="ht-link-login-and-register link-with-icon d-flex align-items-center font-size-15 d-md-none">
                                <FeatherIcon
                                    icon="lock"
                                    size="18"
                                    className="mr-2 st-text-secondary" />
                                <Link to="/auth" className="st-text-light">Login</Link>
                                {/* <Link to="/home" className="st-text-light">Register</Link> */}
                            </div>

                            {/* button */}
                            <div className="menu-btns">
                                <a href="#"
                                    className="btn st-btn st-btn-primary font-weight-700">Book Consultation</a>
                            </div>

                        </Navbar>
                    </div>
                </Container>

                {/* mobile header */}
            </>

        )
    }
}
