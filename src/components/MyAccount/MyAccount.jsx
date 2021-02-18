import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'

// styles
import './styles/my-account-styles.css'

// componetns
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'
import PageBanner from 'components/CommonComponents/PageBanner/PageBanner'

// router
import { Link } from 'react-router-dom'

// icons : feather
import FeatherIcon from 'feather-icons-react';

export default class MyAccount extends Component {
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

                {/* WRAPPER */}
                <section id="wrapper">

                    {/* MY ACCOUT SECTION */}
                    <section id="my-account" className="ST_def-pad-TB">
                        <Container>
                            <div className="d-flex flex-wrap position-relative st-bg-slate">
                                {/* LEFT SECTION */}
                                <div className="ma-leftbar position-absolute">
                                    <div className="inner border-right st-bg-slate h-100 overflow-auto">
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
                                                <li className="w-100">
                                                    <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-3">
                                                        <FeatherIcon icon="chevron-right" size="17" />
                                                        <span className="ml-2">Dashboard</span>
                                                    </Link>
                                                </li>
                                                <li className="w-100">
                                                    <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-3">
                                                        <FeatherIcon icon="chevron-right" size="17" />
                                                        <span className="ml-2">Account Information</span>
                                                    </Link>
                                                    <ul>
                                                        <li className="dropdown-menu-item">
                                                            <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-5">
                                                                <FeatherIcon icon="corner-down-right" size="17" />
                                                                <span className="ml-2">Login Information</span>
                                                            </Link>
                                                        </li>
                                                        <li className="dropdown-menu-item">
                                                            <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-5">
                                                                <FeatherIcon icon="corner-down-right" size="17" />
                                                                <span className="ml-2">Personal Information</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="w-100">
                                                    <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-3">
                                                        <FeatherIcon icon="chevron-right" size="17" />
                                                        <span className="ml-2">Address Book</span>
                                                    </Link>
                                                    <ul>
                                                        <li className="dropdown-menu-item">
                                                            <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-5">
                                                                <FeatherIcon icon="corner-down-right" size="17" />
                                                                <span className="ml-2">Billing Address</span>
                                                            </Link>
                                                        </li>
                                                        <li className="dropdown-menu-item">
                                                            <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-5">
                                                                <FeatherIcon icon="corner-down-right" size="17" />
                                                                <span className="ml-2">Delivery Address</span>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="w-100">
                                                    <Link to="my-account" className="menu-item d-block text-decoration-none py-2 px-3">
                                                        <FeatherIcon icon="chevron-right" size="17" />
                                                        <span className="ml-2">My Orders</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                {/* ACOUNT CONTENT SECTION */}
                                <div className="ma-content">
                                    <div className="inner p-3">

                                    </div>
                                </div>
                            </div>
                        </Container>
                    </section>


                    <Footer />
                </section>
            </>
        )
    }
}
