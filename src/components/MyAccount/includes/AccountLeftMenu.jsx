import React, { Component } from 'react'

// redux
import { connect } from 'react-redux';

// bootstrap
import { Image } from 'react-bootstrap'

// icons : feather
import FeatherIcon from 'feather-icons-react';

// router
import { NavLink, Link } from 'react-router-dom'

class AccountLeftMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                {/* LEFT SECTION */}
                < div className={`ma-leftbar position-absolute h-100 ${this.props.isMobileMenuVisible ? 'active' : ''}`
                }>
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
                                <p className="user-name font-family-secondary-medium font-size-17 st-text-primary">{this.props.currentUser.userName}</p>
                            </div>
                        </div>

                        {/* user menu */}
                        <div className="ma-leftbar-menu mb-3 mb-lg-4">
                            <ul className="list-unstyled">
                                <li className="w-100 menu-item">
                                    <Link
                                        to="/my-account/"
                                        className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                        <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                        <span className="ml-2">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="w-100 menu-item">
                                    <NavLink activeClassName="active"
                                        to="/my-account/edit/login-info"
                                        className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                        <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                        <span className="ml-2">Login Information</span>
                                    </NavLink>
                                </li>
                                <li className="w-100 menu-item">
                                    <NavLink activeClassName="active"
                                        to="/my-account/edit/personal-info"
                                        className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                        <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                        <span className="ml-2">Personal Information</span>
                                    </NavLink>
                                </li>
                                <li className="w-100 menu-item">
                                    <NavLink activeClassName="active"
                                        to="/my-account/sessions"
                                        className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                        <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                        <span className="ml-2">Sessions</span>
                                    </NavLink>
                                </li>
                                <li className="w-100 menu-item">
                                    <NavLink activeClassName="active"
                                        to="/my-account/diet-plan"
                                        className="menu-link d-flex text-decoration-none border-bottom py-2 px-3">
                                        <FeatherIcon icon="chevron-right" size="17" className="mt-1" />
                                        <span className="ml-2">Diet Plan</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
            </React.Fragment>
        )
    }
}


const getDataFromStore = state => {
    return {
        currentUser: state.auth.currentUser
    };

}

export default connect(getDataFromStore, null)(AccountLeftMenu)