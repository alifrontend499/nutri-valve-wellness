import React, { Component } from 'react'

// styles
import './styles/health-meter-styles.css'

// bootstrap
import {
    Nav,
    Tab
} from 'react-bootstrap'

// includes
import HealthMeterStep1 from './includes/HealthMeterStep1'
import HealthMeterStep2 from './includes/HealthMeterStep2'
import HealthMeterStep3 from './includes/HealthMeterStep3'
import HealthMeterStep4 from './includes/HealthMeterStep4'
import HealthMeterStep5 from './includes/HealthMeterStep5'

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

        // getting data
        this.gettingDataFromStep1 = this.gettingDataFromStep1.bind(this)
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
                console.log(this.state.step1Data)
            })
        }
    }

    render() {
        return (
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
                                />
                            </Tab.Pane>


                        </Tab.Content>
                    </Tab.Container>


                </div>
            </div>
        )
    }
}
