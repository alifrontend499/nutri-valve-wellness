import React, { Component } from 'react'

// styles
import './styles/health-meter-styles.css'

// bootstrap
import {
    Nav,
    Tab,
    Col,
    Container,
    Row
} from 'react-bootstrap'

// includes
import HealthMeterStep1 from './includes/HealthMeterStep1'
import HealthMeterStep2 from './includes/HealthMeterStep2'
import HealthMeterStep3 from './includes/HealthMeterStep3'
import HealthMeterStep4 from './includes/HealthMeterStep4'
import HealthMeterStep5 from './includes/HealthMeterStep5'


import oneMeter from 'assets/images/icons/1.jpg';
import twoMeter from 'assets/images/icons/2.jpg';
import threeMeter from 'assets/images/icons/3.jpg';
import fourMeter from 'assets/images/icons/4.jpg';

import { getBMIResult } from 'utlis/apis/common';
import FinalResult from './includes/FinalResult'

export default class HealthMeter extends Component {

    constructor(props) {
        super(props)
        // state
        this.state = {
            step1Data: {},
            step2Data: {},
            step3Data: {},
            step4Data: {},
            step5Data: {},
            result: {}
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
    openStep2Tab = (ev) => {
        ev.preventDefault()
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
                // console.log("step1Data ", this.state.step1Data)
            })
        }
    }

    // getting data from form step 2
    gettingDataFromStep2(userData) {
        if (userData) {
            this.setState({
                step2Data: { ...userData }
            }, () => {
                // console.log("step2Data ", this.state.step2Data)
            })
        }
    }

    // getting data from form step 3
    gettingDataFromStep3(userData) {
        if (userData) {
            this.setState({
                step3Data: { ...userData }
            }, () => {
                // console.log("step3Data ", this.state.step3Data)
            })
        }
    }

    // getting data from form step 4
    gettingDataFromStep4(userData) {
        if (userData) {
            this.setState({
                step4Data: { ...userData }
            }, () => {
                // console.log("step4Data ", this.state.step4Data)
            })
        }
    }

    // getting data from form step 5
    gettingDataFromStep5(userData) {
        if (userData) {
            this.setState({
                step5Data: { ...userData }
            }, () => {
                // console.log("step5Data ", this.state.step5Data)
            })
        }
    }

    // getting result
    handleGetResult() {
        this.setState({ result: '' });
        const step1DataList = this.state.step1Data
        console.log('step1Data -> ', step1DataList)

        const step2DataList = this.state.step2Data
        console.log('step2Data -> ', step2DataList)

        const step3DataList = this.state.step3Data
        console.log('step3Data -> ', step3DataList)

        const step4DataList = this.state.step4Data
        console.log('step4Data -> ', step4DataList)

        const step5DataList = this.state.step5Data
        console.log('step5Data -> ', step5DataList)


        getBMIResult(
            localStorage.getItem('commanToken'),
            step1DataList.weightKg + '.' + step1DataList.weightGm,
            step1DataList.heightFt + '.' + step1DataList.heightIn,
            step2DataList.bodyType,
            step3DataList.healthIssue,
            step4DataList.sleepDuration,
            step4DataList.alcoholConsumption,
            step5DataList.fruitConsumption,
        ).then(res => {
            this.setState({ result: res.data });
            console.log('res  + ', res)
            
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

    render() {
        const state = this.state;
        const props = this.props;
        const { result } = this.state;
        return (
            (result.body) ? (
                <FinalResult
                    meter={this.meter()}
                    result={result}
                />
            ) : (
                <Container>
                    <Row className="page-health-meter ST_def-pad-TB">
                        <Col xs={12} md={10} lg={8} className={`${this.props.fromHeader ? "ml-auto px-0" : "mx-auto"}`}>
                            <div id="health-meter-main">
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
                                                    openStep2Tab={(ev) => this.openStep2Tab(ev)}
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
                                                    openStep2Tab={(ev) => this.openStep2Tab(ev)}
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
                                                    openStep2Tab={(ev) => this.openStep2Tab(ev)}
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
                                                    openStep2Tab={(ev) => this.openStep2Tab(ev)}
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
                                                    openStep2Tab={(ev) => this.openStep2Tab(ev)}
                                                    openStep3Tab={(ev) => this.openStep3Tab(ev)}
                                                    openStep4Tab={(ev) => this.openStep4Tab(ev)}
                                                    openStep5Tab={(ev) => this.openStep5Tab(ev)}


                                                    // getting data
                                                    gettingDataFromStep5={data => this.gettingDataFromStep5(data)}

                                                    // submit data
                                                    getResult={this.handleGetResult}

                                                />
                                            </Tab.Pane>


                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )
        )
    }
}
