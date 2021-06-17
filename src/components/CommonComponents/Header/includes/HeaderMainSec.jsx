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
    Modal,
    Spinner,
    Alert
} from 'react-bootstrap';

// router
import { Link, NavLink } from 'react-router-dom'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// logo
import appLogo from 'assets/images/app-header-logo.jpg'

// formik
import { Formik } from 'formik'
// yup
import * as Yup from 'yup'

// api: common
import { bookConsultation } from 'utlis/apis/API_common'

import { getPosts } from 'utlis/apis/API_common';

export default class HeaderMainSec extends Component {
    constructor(props) {
        super(props)

        // STATE
        this.state = {
            menuVisibility: false,
            consultationModalVisibility: false,

            consultationFormInitialValues: {
                cons_name: '',
                cons_email: '',
                cons_dob: '',
                cons_mobile: '',
            },

            consultationBtnDisabled: false,
            consultationBtnLoading: false,
            consultationBtnText: 'Book Now',

            userMessage: {
                msgType: "", // danger or success
                msg: ""
            },

            programsLinks: []
        }

        // BINDINGS
        this.onToggleMenu = this.onToggleMenu.bind(this)

        this.handleModalOpening = this.handleModalOpening.bind(this)
        this.handleModalClosing = this.handleModalClosing.bind(this)
        this.onModalClose = this.onModalClose.bind(this)

        this.onConsultationFormSubmit = this.onConsultationFormSubmit.bind(this)

        // REFS
        this.menuToggleBtnRef = React.createRef()

        // validation schema for the login form
        this.validationSchema = Yup.object({
            cons_name: Yup.string().required('This field is required').min(3, 'The name should atleast 3 chracters long'),
            cons_email: Yup.string().email('Invalid Email Address').required('This field is required'),
            cons_dob: Yup.string().matches(/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/, "Make sure you add the right DOB format i.e., ").required('This field is required'),
            cons_mobile: Yup.string().matches(/^\+[1-9]{1}[0-9]{11,11}$/, "Make sure you add the country code before the mobile number ").required('This field is required'),
        })
    }

    componentDidMount() {
        getPosts().then(res => {
            // console.log('program ', res)
            if (res) {
                const programsData = res.data
                if (programsData) {
                    let linksData = []

                    programsData.items.forEach(item => {
                        linksData.push({
                            title: item.title,
                            slug: item.slug,
                        })
                    });
                    this.setState({
                        programsLinks: linksData
                    });
                }
            }
        }).catch(err => {
            console.log('Some error occured ', err.message)
        });
    }

    // EXECUTES WHEN MENU TOGGLES
    onToggleMenu = () => {
        this.setState({
            menuVisibility: !this.state.menuVisibility
        }, () => {
            // console.log(this.state.menuVisibility);
        })
    }

    // HANDLING CLICK ON THE OVERLAY WHEN MENU IS OPEN
    handleOverlayClick = () => {
        this.menuToggleBtnRef.click()
    }

    // opening modal
    handleModalOpening = ev => {
        ev.preventDefault()
        this.setState({
            consultationModalVisibility: true
        })
    }

    // closing modal
    handleModalClosing = ev => {
        ev.preventDefault()
        this.setState({
            consultationModalVisibility: false
        })
    }

    // execute when modal closes
    onModalClose = () => {
        this.setState({
            consultationModalVisibility: false
        })
    }

    // on login form submit
    onConsultationFormSubmit = values => {
        if (values) {
            this.setState({
                consultationBtnDisabled: true,
                consultationBtnLoading: true,
            }, () => {
                console.log("values ", values)
                // book Consultation api
                bookConsultation(
                    values.cons_name,
                    values.cons_email,
                    values.cons_dob,
                    values.cons_mobile,
                ).then(res => {
                    console.log("object ", res)

                    this.setState({
                        consultationBtnDisabled: true,
                        consultationBtnLoading: false,
                        userMessage: {
                            msgType: "success", // danger or success
                            msg: "We successfully recieved your details and will call you soon."
                        }
                    })


                    // closing the modal
                    setTimeout(() => {
                        this.setState({
                            consultationModalVisibility: false
                        })
                    }, 3000);
                }).catch(err => {
                    console.log('error ', err.message)
                    this.setState({
                        consultationBtnDisabled: false,
                        consultationBtnLoading: false,
                        userMessage: {
                            msgType: "danger", // danger or success
                            msg: "Some error occured. Please try again"
                        }
                    })
                })
            })
        }
    }

    render() {
        const state = this.state;

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
                                        {
                                            (state.programsLinks && state.programsLinks.length) ? state.programsLinks.map((item, key) => (
                                                // dropdown link
                                                <NavDropdown.Item
                                                    key={key}
                                                    as={NavLink}
                                                    activeClassName="active"
                                                    to={"/program/" + item.slug}
                                                    className=""
                                                >{item.title}</NavDropdown.Item>
                                            )) : (
                                                <div className="nav-dropdown-loading text-center py-3">
                                                    <Spinner animation="border" size="sm" className="position-relative mr-2" style={{ top: 1 }} />
                                                </div>
                                            )
                                        }
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
                                    className="btn st-btn st-btn-primary font-weight-700"
                                    onClick={this.handleModalOpening}>Book Consultation</a>
                            </div>

                        </Navbar>
                    </div>
                </Container>

                <Modal
                    show={state.consultationModalVisibility}
                    onHide={this.onModalClose}
                    centered
                    keyboard>
                    <Modal.Header
                        closeButton
                        className="st-heading heading-xs font-family-secondary-bold">
                        <Modal.Title>Book Consultation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="buy-plan-form">
                            {
                                /* user message error or success */
                                (state.userMessage.msg && state.userMessage.msg.length) && (
                                    <div className="message">
                                        <Alert variant={state.userMessage.msgType}>
                                            {state.userMessage.msg}
                                        </Alert>
                                    </div>
                                )
                            }
                            <Formik
                                initialValues={state.consultationFormInitialValues}
                                validationSchema={this.validationSchema}
                                onSubmit={this.onConsultationFormSubmit}>
                                {props => (
                                    <form
                                        action="#"
                                        onSubmit={props.handleSubmit}
                                        noValidate
                                        autoComplete="off">
                                        {/* form field */}
                                        <div className="st-form mb-3">
                                            <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Name</label>
                                            <input
                                                type="text"
                                                name="cons_name"
                                                id="cons_name"
                                                className="form-control bg-transparent"
                                                placeholder="Your Name"

                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.cons_name}
                                            />
                                        </div>
                                        {
                                            /* message */
                                            (props.touched.cons_name && props.errors.cons_name) &&
                                            <div className="error text-danger font-size-14 position-relative">{props.touched.cons_name && props.errors.cons_name}</div>
                                        }

                                        {/* form field */}
                                        <div className="st-form mb-3">
                                            <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Email</label>
                                            <input
                                                type="email"
                                                name="cons_email"
                                                id="cons_email"
                                                className="form-control bg-transparent"
                                                placeholder="Your Email"

                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.cons_email}
                                            />
                                        </div>
                                        {
                                            /* message */
                                            (props.touched.cons_email && props.errors.cons_email) &&
                                            <div className="error text-danger font-size-14 position-relative">{props.touched.cons_email && props.errors.cons_email}</div>
                                        }

                                        {/* form field */}
                                        <div className="st-form mb-3">
                                            <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">DOB (mm/dd/yyyy)</label>
                                            <input
                                                type="email"
                                                name="cons_dob"
                                                id="cons_dob"
                                                className="form-control bg-transparent"
                                                placeholder="example: mm/dd/yyyy"

                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.cons_dob}
                                            />
                                        </div>
                                        {
                                            /* message */
                                            (props.touched.cons_dob && props.errors.cons_dob) &&
                                            <div className="error text-danger font-size-14 position-relative">{props.touched.cons_dob && props.errors.cons_dob}</div>
                                        }

                                        {/* form field */}
                                        <div className="st-form mb-3">
                                            <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Mobile no.</label>
                                            <input
                                                type="email"
                                                name="cons_mobile"
                                                id="cons_mobile"
                                                className="form-control bg-transparent"
                                                placeholder="e.g., +91 0123456789"

                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.cons_mobile}
                                            />
                                        </div>
                                        {
                                            /* message */
                                            (props.touched.cons_mobile && props.errors.cons_mobile) &&
                                            <div className="error text-danger font-size-14 position-relative">{props.touched.cons_mobile && props.errors.cons_mobile}</div>
                                        }



                                        <div className="btns d-flex justify-content-center pt-2">
                                            <button
                                                type="submit"
                                                className="btn st-btn st-btn-primary st-btn-lg font-size-13 font-weight-800 text-uppercase"
                                                disabled={state.consultationBtnDisabled}>
                                                {
                                                    state.consultationBtnLoading &&
                                                    <Spinner animation="border" size="sm" className="position-relative mr-2" style={{ top: 1 }} />
                                                }
                                                <span>{state.consultationBtnText}</span>
                                            </button>
                                        </div>
                                    </form>

                                )}
                            </Formik>
                        </div>
                    </Modal.Body>
                </Modal>
            </>

        )
    }
}
