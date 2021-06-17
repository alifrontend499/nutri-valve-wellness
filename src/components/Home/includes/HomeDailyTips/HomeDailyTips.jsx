import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

// home style
import '../../styles/home-styles.css'

// section img
import secImg from 'assets/images/daily-tips-img.jpg'

// icons : feather
import FeatherIcon from 'feather-icons-react';

import { getDailyTips } from 'utlis/apis/API_common';

// redux
import { connect } from 'react-redux';

// helpers common
import { stripHTML } from 'utlis/helpers/Helpers_common'

class HomeDailyTips extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dailyTips: {}
        }
    }

    componentDidMount() {
        getDailyTips(this.props.commonToken).then(res => {
            this.setState({ dailyTips: res.data })
        }).catch(err => {
            console.log('Error occured in daily tips ', err);
        })
    }

    render() {
        const state = this.state
        return (
            <div id="home-daily-tips" className="ST_def-pad-T">
                <Container>
                    <Row className="home-daily-tips align-items-center">
                        {/* lt-sec */}
                        <Col xs={12} md={6} className="lt-sec">
                            <div className="inner text-center">
                                <div className="st-heading-wrapper mb-3 mb-lg-4">
                                    <p className="st-heading heading-sm font-family-sec font-family-secondary-bold">
                                        {
                                            state.dailyTips && state.dailyTips.title
                                        }
                                    </p>
                                </div>
                                <p className="desc st-text-light mb-3">
                                    {
                                        state.dailyTips && stripHTML(state.dailyTips.content)
                                    }
                                </p>
                                {/* <a href="#" className="btn st-btn st-btn-primary font-size-13 font-weight-800 text-uppercase mt-3">Learn more</a> */}
                            </div>
                        </Col>

                        {/* rt-sec */}
                        <Col xs={12} md={6} className="rt-sec pt-3 pt-md-0">
                            <div className="inner pr-lg-3 text-center">
                                <Image src={secImg} fluid style={{ verticalAlign: 'bottom' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}


const getDataFromStore = state => {
    return {
        commonToken: state.auth.commonToken
    };

}


export default connect(getDataFromStore, null)(HomeDailyTips)