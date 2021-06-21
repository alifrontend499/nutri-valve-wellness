import React, { Component } from 'react'

// styles
import '../styles/programs-styles.css'

// bootstrap
import { Container, Spinner } from 'react-bootstrap'


import { getPosts } from 'utlis/apis/API_common';

export default class PSearch extends Component {

    constructor(props) {
        super(props)

        this.state = {
            programsLinks: [],
            defaultProgramLink: ""
        }
    }

    componentDidMount() {

        getPosts().then(res => {
            // console.log('program ', res)
            if (res) {
                const programsData = res.data
                if (programsData) {
                    let linksData = []

                    programsData.items.forEach(item => {
                        linksData.push({
                            title: item.title,
                            slug: item.slug,
                        })
                    });

                    this.setState({
                        programsLinks: linksData
                    });
                }
            }
        }).catch(err => {
            console.log('Some error occured ', err.message)
        });
    }


    // when select value changes
    handleChange = ev => {
        this.props.parentProps && this.props.parentProps.history.push(ev.target.value)
    }

    render() {
        const state = this.state;

        return (
            <section id="programs-search" className="st-bg-slate py-3 py-lg-5">
                <Container>
                    <div className="programs-search d-flex justify-content-center align-items-center">
                        <p className="head font-weight-600 mr-3 mr-lg-4">Select Program: </p>
                        <div className="st-form st-form-rounded st-form-has-shadow">
                            <select className="form-control" defaultValue={state.defaultProgramLink} onChange={this.handleChange}>
                                {
                                    (state.programsLinks && state.programsLinks.length) && state.programsLinks.map((item, key) => (
                                        <option key={key} value={"/program/" + item.slug}>{item.title}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}
