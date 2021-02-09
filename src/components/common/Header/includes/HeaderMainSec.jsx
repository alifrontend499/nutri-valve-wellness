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
import { Link } from 'react-router-dom'

// logo
import appLogo from 'assets/images/app-header-logo.jpg'

export default class HeaderMainSec extends Component {
    render() {
        return (
            <Container>
                <div className="header-main-sec">
                    <Navbar
                        expand="xl"
                        sticky="top"
                        className="p-0">
                        {/* logo */}
                        <Navbar.Brand
                            as={Link}
                            to="/home"
                            className="p-0">
                            <Image src={appLogo} fluid />
                        </Navbar.Brand>

                        {/* mobile menu toggle button */}
                        <Navbar.Toggle aria-controls="header-nav-navbar" />

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
                                        as={Link}
                                        to="/home"
                                        className=""
                                    >Weight Loss Challenge</NavDropdown.Item>

                                    {/* dropdown link */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/home"
                                        className=""
                                    >Battle PCOS</NavDropdown.Item>

                                    {/* dropdown link */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/home"
                                        className=""
                                    >Body Transformation</NavDropdown.Item>

                                    {/* dropdown link */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/home"
                                        className=""
                                    >Weight Gain</NavDropdown.Item>

                                    {/* dropdown link */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/home"
                                        className=""
                                    >Pregnancy and Motherhood</NavDropdown.Item>

                                    {/* dropdown link */}
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/home"
                                        className=""
                                    >Reshape Intermittent</NavDropdown.Item>
                                </NavDropdown>

                                {/* link */}
                                <Nav.Link
                                    as={Link}
                                    to="/home"
                                    className="font-weight-700"
                                >Success Story</Nav.Link>

                                {/* link */}
                                <Nav.Link
                                    as={Link}
                                    to="/home"
                                    className="font-weight-700"
                                >Recipes</Nav.Link>

                                {/* link */}
                                <Nav.Link
                                    as={Link}
                                    to="/home"
                                    className="font-weight-700"
                                >Blogs</Nav.Link>

                                {/* link */}
                                <Nav.Link
                                    as={Link}
                                    to="/home"
                                    className="font-weight-700"
                                >Heath Meter</Nav.Link>

                                {/* link */}
                                <Nav.Link
                                    as={Link}
                                    to="/home"
                                    className="font-weight-700"
                                >About Us</Nav.Link>

                                {/* link */}
                                <Nav.Link
                                    as={Link}
                                    to="/home"
                                    className="font-weight-700"
                                >Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        {/* button */}
                        <div className="menu-btns">
                            <a href="#"
                                className="btn st-btn st-btn-primary font-weight-700">Book Consultation</a>
                        </div>
                    </Navbar>
                </div>
            </Container>
        )
    }
}
