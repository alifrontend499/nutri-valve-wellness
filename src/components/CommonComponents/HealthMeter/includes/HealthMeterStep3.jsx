import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import { } from 'react-bootstrap'

// icons : feather
import FeatherIcon from 'feather-icons-react';

export default class HealthMeterStep3 extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            healthIssue: ['constipation']
        }

        // functions bindings
        this.handleHealthIssueChange = this.handleHealthIssueChange.bind(this)
    }

    // setting health issues | OLD WHEN WE HAD MULTIPLE SELECTIONS
    handleHealthIssueChange(event) {
        const selectedIssueVal = event.target.value

        // filtering the health issues array to see if issue already exists in the array
        const filteredHealthIssues = this.state.healthIssue.find(item => item === selectedIssueVal)

        if (filteredHealthIssues) {
            // if same issue is already in the array | then remove the item form the array
            const arrayAfterSameIssueRemoved = this.state.healthIssue.filter(item => item !== selectedIssueVal)
            this.setState({ healthIssue: [...arrayAfterSameIssueRemoved] }, () => {
            });

        } else {
            // if same issue is NOT in the array | then add the item to the array
            this.setState({ healthIssue: [...this.state.healthIssue, event.target.value] }, () => {
            });
        }

    }

    // setting health issues | OLD WHEN WE HAD MULTIPLE SELECTIONS
    // handleHealthIssueChange(event) {
    //     const selectedIssueVal = event.target.value
    //     this.setState({ healthIssue: [selectedIssueVal] }, () => {
    //     });
    // }

    render() {
        const state = this.state;
        const props = this.props;

        return (
            <div className="step3">
                {/* HEAD SEC */}
                <div className="st-heading-wrapper pb-3 pb-lg-4">
                    <p className="st-heading heading-sm font-family-secondary-bold border-bottom pb-3 pb-lg-4 mb-3 mb-lg-4">
                        Step 3
                    </p>
                    <p className="desc st-text-gray">
                        Do You Currently Suffer From Any Of The Mentioned Health Issues?
                    </p>
                </div>

                {/* CONTENT SEC */}
                <div className="content-sec">
                    <div className="d-flex flex-wrap">
                        {/* lt-sec */}
                        <div className="lt-sec col-12 col-sm-6 px-0">
                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="health_issues" className="d-none"
                                    checked={(state.healthIssue && state.healthIssue.find(item => item === 'constipation')) ? true : false}
                                    value="constipation"
                                    onChange={this.handleHealthIssueChange}
                                />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Constipation</span>
                            </label>

                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="health_issues" className="d-none"
                                    checked={(state.healthIssue && state.healthIssue.find(item => item === 'low-immunity')) ? true : false}
                                    value="low-immunity"
                                    onChange={this.handleHealthIssueChange}
                                />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Low Immunity</span>
                            </label>

                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="health_issues" className="d-none"
                                    checked={(state.healthIssue && state.healthIssue.find(item => item === 'body-aches')) ? true : false}
                                    value="body-aches"
                                    onChange={this.handleHealthIssueChange}
                                />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Body Aches</span>
                            </label>
                        </div>

                        {/* rt-sec */}
                        <div className="rt-sec col-12 col-sm-6 px-0">
                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="health_issues" className="d-none"
                                    checked={(state.healthIssue && state.healthIssue.find(item => item === 'diarrhoea')) ? true : false}
                                    value="diarrhoea"
                                    onChange={this.handleHealthIssueChange}
                                />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Diarrhoea</span>
                            </label>

                            <label className="st-checkbox d-flex mb-2">
                                <input type="checkbox" name="health_issues" className="d-none"
                                    checked={(state.healthIssue && state.healthIssue.find(item => item === 'acidity')) ? true : false}
                                    value="acidity"
                                    onChange={this.handleHealthIssueChange}
                                />
                                <span className="box align-items-center d-flex justify-content-center position-relative">
                                    <FeatherIcon
                                        icon="check"
                                        size="15" />
                                </span>
                                <span className="text ml-2 position-relative">Acidity</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* BTN SEC */}
                <div className="btn-sec d-flex justify-content-between border-top pt-3 pt-lg-4 mt-3 mt-lg-5">
                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => this.props.openStep2Tab(ev)}
                    >Prev</button>

                    <button
                        className="btn st-btn st-btn-primary text-uppercase font-family-secondary-bold font-size-14"
                        onClick={ev => {
                            // sending data to main component
                            props.gettingDataFromStep3(state)

                            // opening step 4
                            this.props.openStep4Tab(ev)
                        }}
                    >next</button>
                </div>
            </div>
        )
    }
}
