import React, { Component } from 'react'

// bootstrap
import { Image, Col } from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// styles
import '../styles/authentication-styles.css'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() { }
    render() {
        return (
            <div className="d-flex flex-wrap auth-main">
                {/* lt sec */}
                <Col xs={12} lg={6} className="lt-sec px-0 d-none d-lg-block">
                    <div className="inner">
                        <Image src={this.props.authImg} fluid />
                    </div>
                </Col>

                {/* rt sec */}
                <Col xs={12} lg={6} className="rt-sec px-0">
                    <div className="inner bg-white h-100 d-flex align-items-center justify-content-center">
                        <div className="login-form w-100">
                            <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-3">Forgot Password</p>
                            <p className="desc st-text-gray font-size-14 mb-3">
                                We'll send you an email a link to reset your email
                            </p>

                            {/* form field */}
                            <div className="st-form with-icon-left position-relative mb-3">
                                <input type="text" className="form-control" placeholder="Email Address*" />
                                <div className="icon position-absolute">
                                    <FeatherIcon
                                        icon="mail"
                                        size="15" />
                                </div>
                            </div>

                            <div className="btns mt-3">
                                <button className="btn btn-block st-btn st-btn-primary st-btn-lg st-btn-rounded-0 font-size-13 text-uppercase">Retrieve Password</button>
                            </div>

                            <div className="add-data text-center mt-3">
                                <a href="#"
                                    className="font-size-14 st-text-dark d-inline-block mb-1"
                                    onClick={(ev) => this.props.openLoginTab(ev)}
                                >Sign In instead</a> <br />
                                <a href="#"
                                    className="font-size-14 st-text-dark d-inline-block"
                                    onClick={(ev) => this.props.openRegisterTab(ev)}
                                >Create a new Account</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </div>
        )
    }
}
