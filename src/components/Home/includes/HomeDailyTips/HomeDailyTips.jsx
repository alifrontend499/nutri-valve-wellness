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

export default class HomeDailyTips extends Component {
    render() {
        return (
            <div id="home-about-us" className="ST_def-pad-TB">
                <Container>
                    <Row className="home-about-us align-items-center">
                        {/* lt-sec */}
                        <Col xs={12} md={6} className="lt-sec">
                            <div className="inner text-center">
                                <div className="st-heading-wrapper mb-3 mb-lg-4">
                                    <p className="st-heading heading-sm font-family-sec font-family-secondary-bold">Daily Tips</p>
                                </div>
                                <p className="desc st-text-light mb-3">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit commodi veritatis quasi at dolor corporis ea earum doloribus esse nostrum. Est deserunt ex dolor sapiente fugiat assumenda unde reprehenderit at?
                                </p>
                                <a href="#" class="btn st-btn st-btn-secondary font-size-13 font-weight-800 text-uppercase mt-3">Learn more</a>
                            </div>
                        </Col>

                        {/* rt-sec */}
                        <Col xs={12} md={6} className="rt-sec pt-3 pt-md-0">
                            <div className="inner pr-lg-3 text-center">
                                <Image src={secImg} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
