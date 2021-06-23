import React, { Component } from 'react'

// bootstrap
import { Image, Col, Spinner, Alert } from 'react-bootstrap';

// icons : feather
import FeatherIcon from 'feather-icons-react';

// styles
import '../styles/authentication-styles.css'

// redux
import { connect } from 'react-redux';

// formik
import { Formik } from 'formik'
// yup
import * as Yup from 'yup'

// api: common
import { userLogin, getUserInfo } from 'utlis/apis/API_common'

// helpers
import { saveToLocalStorage } from 'utlis/helpers/Helpers_common'

// actions
import { saveCommonTokenToStore, saveCurrentUserToStore, authenticateUser } from 'redux/actions/actionAuth'

class Login extends Component {
    constructor(props) {
        super(props)

        // validation schema for the login form
        this.validationSchema = Yup.object({
            loginEmail: Yup.string().email('Invalid Email Address').required('This field is required'),
            loginPassword: Yup.string().required('This field is required').min(6, 'Password must be at least 6 characters long')
        })

        // state
        this.state = {
            loginFormInitialValues: {
                loginEmail: '', // sysadmin@admin.com
                loginPassword: '' // SysAdmin123
            },

            loginBtnDisabled: false,
            loginBtnLoading: false,
            loginBtnText: 'login',

            userMessage: {
                msgType: "", // danger or success
                msg: ""
            }
        }

        // function bindings
        this.onLoginFormSubmit = this.onLoginFormSubmit.bind(this)
    }

    // on login form submit
    onLoginFormSubmit = values => {
        if (values) {
            this.setState({
                loginBtnDisabled: true,
                loginBtnLoading: true,
            }, () => {
                // login api
                userLogin(values.loginEmail, values.loginPassword).then(res => {
                    const userRes = res

                    // getting user details
                    getUserInfo(res.data.token.toString()).then(res => {
                        const moreUserDetails = res.data

                        this.setState({
                            loginBtnDisabled: true,
                            loginBtnLoading: false,
                            userMessage: {
                                msgType: "success", // danger or success
                                msg: "Login Succesfull"
                            }
                        })

                        // refreshing the page
                        setTimeout(() => {
                            // SAVING TOKEN TO THE STORE
                            const currentUser = {
                                userToken: userRes.data.token.toString(),
                                userId: moreUserDetails && moreUserDetails.id,
                                userName: moreUserDetails && moreUserDetails.name,
                                isVerified: moreUserDetails && moreUserDetails.isVerified,
                                status: moreUserDetails && moreUserDetails.status,
                                profilePic: moreUserDetails && moreUserDetails.profilePic,

                            }

                            // storing details to global store
                            this.props.saveCommonTokenToStore(currentUser.userToken)
                            this.props.saveCurrentUserToStore(currentUser)
                            this.props.authenticateUser(true)

                            // saving user details to the local storage
                            saveToLocalStorage("__uu_dd", JSON.stringify(currentUser))
                            // reload
                            // window.location.reload()
                        }, 1000);
                    }).catch(err => {
                        console.log('error while fetching user details ', err.message);
                    })



                }).catch(err => {
                    console.log('error ', err.message)
                    this.setState({
                        loginBtnDisabled: false,
                        loginBtnLoading: false,
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
        const state = this.state
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
                            <p className="head font-family-secondary-medium font-size-20 st-text-secondary mb-3">Login</p>
                            <p className="desc st-text-gray font-size-14 mb-3">
                                Sign in to access your orders,
                                special offers, health tips and more!
                            </p>

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
                                initialValues={state.loginFormInitialValues}
                                validationSchema={this.validationSchema}
                                onSubmit={this.onLoginFormSubmit}>
                                {props => (
                                    <form
                                        action="#"
                                        onSubmit={props.handleSubmit}
                                        noValidate
                                        autoComplete="off">
                                        {/* form field */}
                                        <div className="st-form with-icon-left position-relative mb-3">
                                            <input
                                                type="text"
                                                name="loginEmail"
                                                id="loginEmail"
                                                className="form-control"
                                                placeholder="Email Address*"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.loginEmail}
                                            />
                                            <div className="icon position-absolute">
                                                <FeatherIcon
                                                    icon="mail"
                                                    size="15" />
                                            </div>
                                        </div>
                                        {
                                            /* message */
                                            (props.touched.loginEmail && props.errors.loginEmail) &&
                                            <div className="error text-danger font-size-14 position-relative">{props.touched.loginEmail && props.errors.loginEmail}</div>
                                        }
                                        {/* form field */}
                                        <div className="st-form with-icon-left position-relative mb-3">
                                            <input
                                                type="password"
                                                name="loginPassword"
                                                id="loginPassword"
                                                className="form-control"
                                                placeholder="Password*"
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                value={props.values.loginPassword}
                                            />
                                            <div className="icon position-absolute">
                                                <FeatherIcon
                                                    icon="lock"
                                                    size="15" />
                                            </div>
                                        </div>
                                        {
                                            /* message */
                                            (props.touched.loginPassword && props.errors.loginPassword) &&
                                            <div className="error text-danger font-size-14 position-relative">{props.touched.loginPassword && props.errors.loginPassword}</div>
                                        }

                                        {/* <div className="add-data">
                                            <a href="#"
                                                className="font-weight-600 font-size-14 st-text-secondary"
                                                onClick={(ev) => this.props.openForgotPasswordTab(ev)}>Forgot Password?</a>
                                        </div> */}

                                        <div className="btns mt-3">
                                            <button
                                                type="submit"
                                                className="btn btn-block st-btn st-btn-primary st-btn-lg st-btn-rounded-0 font-size-13 text-uppercase"
                                                disabled={state.loginBtnDisabled}>
                                                {
                                                    state.loginBtnLoading &&
                                                    <Spinner animation="border" size="sm" className="position-relative mr-2" style={{ top: 1 }} />
                                                }
                                                <span>{state.loginBtnText}</span>
                                            </button>
                                        </div>
                                    </form>

                                )}

                            </Formik>

                            {/* <div className="add-data text-center mt-3">
                                <a href="#"
                                    className="font-size-14 st-text-dark d-inline-block mb-1"
                                    onClick={(ev) => this.props.openRegisterTab(ev)}
                                >Create a new Account</a>
                            </div> */}
                        </div>
                    </div>
                </Col>
            </div>
        )
    }
}

const dispatchActionsToProps = dispatch => {
    return {
        saveCommonTokenToStore: comonToken => dispatch(saveCommonTokenToStore(comonToken)),
        saveCurrentUserToStore: currentUser => dispatch(saveCurrentUserToStore(currentUser)),
        authenticateUser: bool => dispatch(authenticateUser(bool))
    }
}


export default connect(null, dispatchActionsToProps)(Login)