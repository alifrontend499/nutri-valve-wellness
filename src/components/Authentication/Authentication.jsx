import React, { Component } from 'react'

// styles
import './styles/authentication-styles.css'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'


import LoginTab from './includes/Login'
import RegisterTab from './includes/Register'
import ForgotPasswordTab from './includes/ForgotPassword'

// bootstrap
import {
    Container,
    Row,
    Col,
    Nav,
    Tab
} from 'react-bootstrap'

// img
import authImg from 'assets/images/auth/auth-page-left-img.jpg'

export default class Authentication extends Component {

    constructor(props) {
        super(props)

        // tabs refs
        this.loginTabRef = React.createRef()
        this.registerTabRef = React.createRef()
        this.forgotPasswordTabRef = React.createRef()

        // functions binding
        this.openLoginTab = this.openLoginTab.bind(this)
        this.openRegisterTab = this.openRegisterTab.bind(this)
        this.openForgotPasswordTab = this.openForgotPasswordTab.bind(this)
    }

    // opening login tab
    openLoginTab = (ev) => {
        ev.preventDefault()
        window.scrollTo({
            top: 50,
            left: 50,
            behavior: 'smooth'
        });
        this.loginTabRef.click()
    }

    // opening register tab
    openRegisterTab = (ev) => {
        ev.preventDefault()
        window.scrollTo({
            top: 50,
            left: 50,
            behavior: 'smooth'
        });
        this.registerTabRef.click()
    }

    // opening forgot password tab
    openForgotPasswordTab = (ev) => {
        ev.preventDefault()
        window.scrollTo({
            top: 50,
            left: 50,
            behavior: 'smooth'
        });
        this.forgotPasswordTabRef.click()
    }

    render() {
        return (
            <>
                <Header />

                <section id="st-wrapper">
                    {/* auth container */}
                    <section id="auth-container" className="ST_def-pad-TB st-bg-slate">
                        <Container>
                            <Row className="auth-container">
                                <Col xs={12} lg={9} className="item mx-auto">
                                    <Tab.Container
                                        id="st-auth-tabs"
                                        defaultActiveKey="login"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        {/* tab links */}
                                        <Nav variant="tabs" className='d-none'>
                                            {/* nav item : Login */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="login" ref={tab => this.loginTabRef = tab}>Login</Nav.Link>
                                            </Nav.Item>

                                            {/* nav item : Register */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="register" ref={tab => this.registerTabRef = tab}>Register</Nav.Link>
                                            </Nav.Item>

                                            {/* nav item : ForgotPassword */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="forgot-password" ref={tab => this.forgotPasswordTabRef = tab}>Forgot Password</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        {/* tab content */}
                                        <Tab.Content>
                                            {/* tab page : login */}
                                            <Tab.Pane eventKey="login">
                                                <LoginTab
                                                    openLoginTab={(ev) => this.openLoginTab(ev)}
                                                    openRegisterTab={(ev) => this.openRegisterTab(ev)}
                                                    openForgotPasswordTab={(ev) => this.openForgotPasswordTab(ev)}
                                                    authImg={authImg}
                                                />
                                            </Tab.Pane>

                                            {/* tab page : register */}
                                            <Tab.Pane eventKey="register">
                                                <RegisterTab
                                                    openLoginTab={(ev) => this.openLoginTab(ev)}
                                                    openRegisterTab={(ev) => this.openRegisterTab(ev)}
                                                    openForgotPasswordTab={(ev) => this.openForgotPasswordTab(ev)}
                                                    authImg={authImg}
                                                />
                                            </Tab.Pane>

                                            {/* tab page : forgot-password */}
                                            <Tab.Pane eventKey="forgot-password">
                                                <ForgotPasswordTab
                                                    openLoginTab={(ev) => this.openLoginTab(ev)}
                                                    openRegisterTab={(ev) => this.openRegisterTab(ev)}
                                                    openForgotPasswordTab={(ev) => this.openForgotPasswordTab(ev)}
                                                    authImg={authImg}
                                                />

                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    {/* footer */}
                    <Footer />
                </section>
            </>
        )
    }
}
