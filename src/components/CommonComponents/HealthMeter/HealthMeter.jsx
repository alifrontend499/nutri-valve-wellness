import React, { Component } from 'react'

// REACT ROUTER
import { Redirect } from 'react-router'

// styles
import './styles/health-meter-styles.css'

// bootstrap
import {
    Nav,
    Tab,
    Col,
    Container,
    Row,
    Spinner,
    Modal
} from 'react-bootstrap'

// includes
import HealthMeterStep1 from './includes/HealthMeterStep1'
import HealthMeterStep2 from './includes/HealthMeterStep2'
import HealthMeterStep3 from './includes/HealthMeterStep3'
import HealthMeterStep4 from './includes/HealthMeterStep4'
import HealthMeterStep5 from './includes/HealthMeterStep5'

import { getBMIResult } from 'utlis/apis/API_common';

// redux
import { connect } from 'react-redux';

class HealthMeter extends Component {

    constructor(props) {
        super(props)
        // state
        this.state = {
            step1Data: {},
            step2Data: {},
            step3Data: {},
            step4Data: {},
            step5Data: {},
            result: {},
            sectionLoading: false,

            userDetailsModalVisibility: false,

            userDetails__userName: '',
            userDetails__userEmail: '',
            userDetails__userNumber: '',
        }

        // tabs refs
        this.step1Ref = React.createRef()
        this.step2Ref = React.createRef()
        this.step3Ref = React.createRef()
        this.step4Ref = React.createRef()
        this.step5Ref = React.createRef()

        // functions binding
        this.openStep1Tab = this.openStep1Tab.bind(this)
        this.openStep2Tab = this.openStep2Tab.bind(this)
        this.openStep3Tab = this.openStep3Tab.bind(this)
        this.openStep4Tab = this.openStep4Tab.bind(this)
        this.openStep5Tab = this.openStep5Tab.bind(this)

        this.handleModalOpening = this.handleModalOpening.bind(this)
        this.handleModalClosing = this.handleModalClosing.bind(this)
        this.onModalClose = this.onModalClose.bind(this)

        // getting data | one
        this.gettingDataFromStep1 = this.gettingDataFromStep1.bind(this)

        // getting data | two
        this.gettingDataFromStep2 = this.gettingDataFromStep2.bind(this)

        // getting data | three
        this.gettingDataFromStep3 = this.gettingDataFromStep3.bind(this)

        // getting data | four
        this.gettingDataFromStep4 = this.gettingDataFromStep4.bind(this)

        // getting data | five
        this.gettingDataFromStep5 = this.gettingDataFromStep5.bind(this)

        // getting final result
        this.handleGetResult = this.handleGetResult.bind(this)
    }

    // opening step1 tab
    openStep1Tab = (ev) => {
        ev.preventDefault()
        this.step1Ref.click()
    }

    // opening step2 tab
    openStep2Tab = () => {
        // ev.preventDefault()
        this.step2Ref.click()
    }

    // opening step3 tab
    openStep3Tab = (ev) => {
        ev.preventDefault()
        this.step3Ref.click()
    }

    // opening step4 tab
    openStep4Tab = (ev) => {
        ev.preventDefault()
        this.step4Ref.click()
    }

    // opening step5 tab
    openStep5Tab = (ev) => {
        ev.preventDefault()
        this.step5Ref.click()
    }


    // getting data from form step 1
    gettingDataFromStep1(userData) {
        if (userData) {
            this.setState({
                step1Data: { ...userData }
            }, () => {
            })
        }
    }

    // getting data from form step 2
    gettingDataFromStep2(userData) {
        if (userData) {
            this.setState({
                step2Data: { ...userData }
            }, () => {
            })
        }
    }

    // getting data from form step 3
    gettingDataFromStep3(userData) {
        if (userData) {
            this.setState({
                step3Data: { ...userData }
            }, () => {
            })
        }
    }

    // getting data from form step 4
    gettingDataFromStep4(userData) {
        if (userData) {
            this.setState({
                step4Data: { ...userData }
            }, () => {
            })
        }
    }

    // getting data from form step 5
    gettingDataFromStep5(userData) {
        if (userData) {
            this.setState({
                step5Data: { ...userData }
            }, () => {
            })
        }
    }

    // getting result
    handleGetResult() {
        this.setState({
            result: '',
            sectionLoading: true
        });
        const step1DataList = this.state.step1Data

        const step2DataList = this.state.step2Data

        const step3DataList = this.state.step3Data

        const step4DataList = this.state.step4Data

        const step5DataList = this.state.step5Data


        getBMIResult(
            // localStorage.getItem('commanToken'),
            this.props.commonToken,
            step1DataList.weightKg + '.' + step1DataList.weightGm,
            step1DataList.heightFt + '.' + step1DataList.heightIn,
            step2DataList.bodyType,
            step3DataList.healthIssue,
            step4DataList.sleepDuration,
            step4DataList.alcoholConsumption,
            step5DataList.fruitConsumption,
            step5DataList.waterConsumption,
            step4DataList.smoking,
            step4DataList.dailyActivityLevel,

            this.state.userDetails__userName,
            this.state.userDetails__userEmail,
            this.state.userDetails__userNumber,
        ).then(res => {

            console.log("eres ", res);

            // scrolling window to top
            window.scrollTo(0, 0)

            this.setState({
                result: res.data,
                sectionLoading: false
            });
        });
    }

    meter = () => {
        const { result } = this.state;
        if (result.body) {
            if (result.weight.kg < 18.5) {
                return 'Red';
            } else if (result.weight.kg >= 18.5 && result.weight.kg <= 24.9) {
                return "Green";
            } else if (result.weight.kg >= 25 && result.weight.kg <= 29.9) {
                return "Yellow";
            } else if (result.weight.kg >= 30) {
                return "Red";
            }
        }
    }

    // opening modal
    handleModalOpening = ev => {
        ev.preventDefault()
        this.setState({
            userDetailsModalVisibility: true
        })
    }

    // closing modal
    handleModalClosing = ev => {
        ev.preventDefault()
        this.setState({
            userDetailsModalVisibility: false
        })
    }

    // execute when modal closes
    onModalClose = () => {
        this.setState({
            userDetailsModalVisibility: false
        })
    }

    render() {
        const state = this.state;
        const props = this.props;
        const { result } = this.state;
        return (
            (result.body) ? (
                // <FinalResult
                //     meter={this.meter()}
                //     result={result}
                // />
                <Redirect to={{
                    pathname: '/bmi-result',
                    state: {
                        result,
                        step1Data: this.state.step1Data
                    }
                }} />
            ) : (

                <React.Fragment>
                    <Container>
                        <Row className="page-health-meter ST_def-pad-TB">
                            <Col xs={12} md={10} lg={8} className={`${this.props.fromHeader ? "ml-auto px-0" : "mx-auto"}`}>
                                <div id="health-meter-main" className="position-relative">
                                    <div className="health-meter-main-inner bg-white px-3 px-lg-4 py-4 py-lg-5">
                                        <Tab.Container
                                            id="st-auth-tabs"
                                            defaultActiveKey="step1"
                                            mountOnEnter={true}
                                            unmountOnExit={true}>
                                            {/* tab links */}
                                            <Nav variant="tabs" className='d-none'>
                                                {/* nav item : Step 1 */}
                                                <Nav.Item>
                                                    <Nav.Link eventKey="step1" ref={tab => this.step1Ref = tab}>Step 1</Nav.Link>
                                                </Nav.Item>

                                                {/* nav item : Step 2 */}
                                                <Nav.Item>
                                                    <Nav.Link eventKey="step2" ref={tab => this.step2Ref = tab}>Step 2</Nav.Link>
                                                </Nav.Item>

                                                {/* nav item : Step 3 */}
                                                <Nav.Item>
                                                    <Nav.Link eventKey="step3" ref={tab => this.step3Ref = tab}>Step 3</Nav.Link>
                                                </Nav.Item>

                                                {/* nav item : Step 4 */}
                                                <Nav.Item>
                                                    <Nav.Link eventKey="step4" ref={tab => this.step4Ref = tab}>Step 4</Nav.Link>
                                                </Nav.Item>

                                                {/* nav item : Step 5 */}
                                                <Nav.Item>
                                                    <Nav.Link eventKey="step5" ref={tab => this.step5Ref = tab}>Step 5</Nav.Link>
                                                </Nav.Item>
                                            </Nav>

                                            {/* tab content */}
                                            <Tab.Content>
                                                {/* tab page : step1 */}
                                                <Tab.Pane eventKey="step1">
                                                    <HealthMeterStep1
                                                        openStep1Tab={(ev) => this.openStep1Tab(ev)}
                                                        openStep2Tab={this.openStep2Tab}
                                                        openStep3Tab={(ev) => this.openStep3Tab(ev)}
                                                        openStep4Tab={(ev) => this.openStep4Tab(ev)}
                                                        openStep5Tab={(ev) => this.openStep5Tab(ev)}

                                                        // getting data
                                                        gettingDataFromStep1={data => this.gettingDataFromStep1(data)}
                                                    />
                                                </Tab.Pane>

                                                {/* tab page : step2 */}
                                                <Tab.Pane eventKey="step2">
                                                    <HealthMeterStep2
                                                        openStep1Tab={(ev) => this.openStep1Tab(ev)}
                                                        openStep2Tab={this.openStep2Tab}
                                                        openStep3Tab={(ev) => this.openStep3Tab(ev)}
                                                        openStep4Tab={(ev) => this.openStep4Tab(ev)}
                                                        openStep5Tab={(ev) => this.openStep5Tab(ev)}

                                                        // sending required data for step 2
                                                        selectedGender={state.step1Data && state.step1Data.gender}

                                                        // getting data
                                                        gettingDataFromStep2={data => this.gettingDataFromStep2(data)}
                                                    />
                                                </Tab.Pane>

                                                {/* tab page : step3 */}
                                                <Tab.Pane eventKey="step3">
                                                    <HealthMeterStep3
                                                        openStep1Tab={(ev) => this.openStep1Tab(ev)}
                                                        openStep2Tab={this.openStep2Tab}
                                                        openStep3Tab={(ev) => this.openStep3Tab(ev)}
                                                        openStep4Tab={(ev) => this.openStep4Tab(ev)}
                                                        openStep5Tab={(ev) => this.openStep5Tab(ev)}

                                                        // getting data
                                                        gettingDataFromStep3={data => this.gettingDataFromStep3(data)}
                                                    />
                                                </Tab.Pane>

                                                {/* tab page : step4 */}
                                                <Tab.Pane eventKey="step4">
                                                    <HealthMeterStep4
                                                        openStep1Tab={(ev) => this.openStep1Tab(ev)}
                                                        openStep2Tab={this.openStep2Tab}
                                                        openStep3Tab={(ev) => this.openStep3Tab(ev)}
                                                        openStep4Tab={(ev) => this.openStep4Tab(ev)}
                                                        openStep5Tab={(ev) => this.openStep5Tab(ev)}

                                                        // getting data
                                                        gettingDataFromStep4={data => this.gettingDataFromStep4(data)}
                                                    />
                                                </Tab.Pane>

                                                {/* tab page : step5 */}
                                                <Tab.Pane eventKey="step5">
                                                    <HealthMeterStep5
                                                        openStep1Tab={(ev) => this.openStep1Tab(ev)}
                                                        openStep2Tab={this.openStep2Tab}
                                                        openStep3Tab={(ev) => this.openStep3Tab(ev)}
                                                        openStep4Tab={(ev) => this.openStep4Tab(ev)}
                                                        openStep5Tab={(ev) => this.openStep5Tab(ev)}


                                                        // getting data
                                                        gettingDataFromStep5={data => this.gettingDataFromStep5(data)}

                                                        // submit data
                                                        // getResult={this.handleGetResult}

                                                        openUserDetailsModal={this.handleModalOpening}

                                                    />
                                                </Tab.Pane>


                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    {/* MODALS */}
                    <Modal
                        show={state.userDetailsModalVisibility}
                        onHide={this.onModalClose}
                        centered
                        keyboard>
                        <Modal.Header
                            closeButton
                            className="st-heading heading-xs font-family-secondary-bold">
                            <Modal.Title>Enter Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className="mb-2">Enter your details to get the result</p>
                            <div className="buy-plan-form">

                                {/* form field */}
                                <div className="st-form position-relative mb-4">
                                    <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">
                                        Your Full Name
                                        <span className="d-block font-size-12 st-text-secondary font-weight-400">e.g., John Doe</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control bg-transparent"
                                        onChange={ev => this.setState({ userDetails__userName: ev.target.value })}
                                    />
                                </div>

                                {/* form field */}
                                <div className="st-form position-relative mb-4">
                                    <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">
                                        Your Email
                                        <span className="d-block font-size-12 st-text-secondary font-weight-400">e.g., email@example.com</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control bg-transparent"
                                        onChange={ev => this.setState({ userDetails__userEmail: ev.target.value })}
                                    />
                                </div>

                                {/* form field */}
                                <div className="st-form hide-number-arrows position-relative mb-4">
                                    <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">
                                        Your Contact Number
                                        <span className="d-block font-size-12 st-text-secondary font-weight-400">Please enter country code before the number</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control bg-transparent hide-number-arrows"
                                        onChange={ev => this.setState({ userDetails__userNumber: ev.target.value })}
                                    />
                                </div>

                                {/* form button */}
                                <div className="btns d-flex justify-content-center pt-2">
                                    <button
                                        className="btn st-btn st-btn-primary st-btn-lg font-size-13 font-weight-800 text-uppercase"
                                        disabled={
                                            (!state.userDetails__userName) || (!state.userDetails__userEmail) || (!state.userDetails__userNumber)
                                        }
                                        onClick={this.handleGetResult}>
                                        Get Result Now
                                    </button>
                                </div>
                            </div>

                            {
                                state.sectionLoading ? (
                                    <div className="modal-loader position-absolute h-100 w-100 d-flex align-items-center justify-content-center">
                                        <Spinner animation="border" />
                                    </div>
                                ) : null
                            }
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <button
                                className="btn st-btn st-btn-lg no-min-width font-size-13 text-uppercase"
                                onClick={this.handleModalClosing}>Cancel</button>
                        </Modal.Footer> */}
                    </Modal>
                </React.Fragment>
            )
        )
    }
}

const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken
    };
}

export default connect(getDataFromStore, null)(HealthMeter)