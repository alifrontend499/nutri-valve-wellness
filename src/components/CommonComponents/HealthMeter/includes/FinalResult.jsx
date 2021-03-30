import React, { Component } from 'react'

// styles
import '../styles/health-meter-styles.css'

// bootstrap
import {
    Container,
    Row,
    Col,
    Image,
    Table
} from 'react-bootstrap'

// images
import bgImg from 'assets/images/health-meter-result/bg.jpg'
import alcohalImg from 'assets/images/health-meter-result/alcohal-img.jpg'
import bodyImg from 'assets/images/health-meter-result/body-img1.jpg'
import healthImg from 'assets/images/health-meter-result/health-img.jpg'
import lifestyleImg from 'assets/images/health-meter-result/lifestyle-img1.jpg'
import meterImg from 'assets/images/health-meter-result/meter-bg.jpg'
import sleepImg from 'assets/images/health-meter-result/sleep.jpg'
import smokingImg from 'assets/images/health-meter-result/smoking-img.jpg'
import vegeImg from 'assets/images/health-meter-result/vegetable.jpg'
import waterImg from 'assets/images/health-meter-result/water.jpg'

export default class FinalResult extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const result = this.props.result
        const meter = this.props.meter
        return (
            <div id="heath-meter-final-result" className="ST_def-pad-TB" style={{ backgroundImage: `url('${bgImg}')` }}>
                <Container>
                    {/* HEADING WRAPPER */}
                    <Col xs={12} lg={7} className="st-heading-wrapper pb-3 pb-lg-4 mx-auto text-center">
                        <p className="st-heading heading-sm font-family-secondary-bold mb-2 mb-lg-4">
                            Results
                        </p>
                        <p className="desc font-size-17 st-text-gray mb-3">
                            Know your ideal weight, BMI & a score describing your current health status curated by the nutritionists at
                        </p>
                    </Col>

                    {/* CONTENT SEC */}
                    <Row className="heath-meter-final-result bg-white p-3 p-lg-4 mx-auto">
                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={meterImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        What Your BMI Says About Your Health
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                        {result.weight.message}
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={bodyImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        What Body Shape Says About Your Health
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                    {result.body}
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={healthImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        Your Health Issues
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                    {result.health}
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={smokingImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        Health Effects of Cigarette Smoking
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus molestiae aliquid obcaecati aspernatur hic quisquam deleniti optio reiciendis! Beatae dicta eligendi a eius non consectetur fugit quasi eos nam?
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={alcohalImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        Alcohol's Effects on the Body
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                    {result.alcohol}
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={sleepImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        How sleep habits effects on your health
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                    {result.sleep}
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={lifestyleImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        Lifestyle :- Daily acivity level
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                        Congratulate your self for taking a step towards healthy lifestyle. Staying away from alcohol consumption can keep you away from indigestion issues. Also you are at lower risk of developing heart diseases, obesity and better cholesterol levels.
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5 pb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={waterImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        How much water you should you drink per day
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                        Congratulate your self for taking a step towards healthy lifestyle. Staying away from alcohol consumption can keep you away from indigestion issues. Also you are at lower risk of developing heart diseases, obesity and better cholesterol levels.
                                    </p>
                                </div>
                            </Col>
                        </div>

                        {/* ITEM */}
                        <div className="item d-flex flex-wrap border-bottom mb-3 pb-3 mb-lg-5">
                            {/* LT SEC */}
                            <Col xs={12} md={5} className="lt-sec">
                                <div className="inner text-center">
                                    <Image src={vegeImg} fluid />
                                </div>
                            </Col>

                            {/* RT SEC */}
                            <Col xs={12} md={7} className="rt-sec pt-2 pt-lg-4">
                                <div className="inner">
                                    <p className="head st-heading heading-xs font-family-secondary-medium mb-2">
                                        Consumption of fruit and veg per day
                                    </p>
                                    <p className="desc font-size-16 font-weight-600 st-text-gray">
                                    {result.fruits}
                                    </p>
                                </div>
                            </Col>
                        </div>

                        <Col xs={12} className="mb-3 mb-lg-4">
                            <a href="#" className="btn st-btn st-btn-lg st-btn-primary font-weight-700">Back</a>
                        </Col>
                    </Row>
                </Container>
                {/* <Table>
                    <tr>
                        <td>{meter}</td>
                    </tr>
                    <tr>
                        <td>{result && result.weight.message}</td>
                    </tr>
                    <tr>
                        <td>{result && result.health}</td>
                    </tr>
                    <tr>
                        <td>{result && result.body}</td>
                    </tr>
                    <tr>
                        <td>{result && result.sleep}</td>
                    </tr>
                    <tr>
                        <td>{result && result.alcohol}</td>
                    </tr>
                    <tr>
                        <td>{result && result.fruits}</td>
                    </tr>

                </Table> */}
            </div>
        )
    }
}
