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

export default class Authentication extends Component {
    render() {
        return (
            <>
                <Header />

                <section id="st-wrapper">
                    {/* auth container */}
                    <section id="auth-container" className="ST_def-mar-TB">
                        <Container>
                            <Row className="auth-container">
                                <Col xs={12} className="item">
                                    <Tab.Container
                                        id="st-auth-tabs"
                                        defaultActiveKey="login"
                                        mountOnEnter={true}
                                        unmountOnExit={true}>
                                        {/* tab links */}
                                        <Nav variant="tabs">
                                            {/* nav item : Login */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="login">Login</Nav.Link>
                                            </Nav.Item>

                                            {/* nav item : Register */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="register">Register</Nav.Link>
                                            </Nav.Item>

                                            {/* nav item : ForgotPassword */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="forgot-password">Forgot Password</Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        {/* tab content */}
                                        <Tab.Content>
                                            {/* tab page : login */}
                                            <Tab.Pane eventKey="login">
                                                <LoginTab />
                                            </Tab.Pane>

                                            {/* tab page : register */}
                                            <Tab.Pane eventKey="register">
                                                <RegisterTab />
                                            </Tab.Pane>

                                            {/* tab page : forgot-password */}
                                            <Tab.Pane eventKey="forgot-password">
                                                <ForgotPasswordTab />
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
