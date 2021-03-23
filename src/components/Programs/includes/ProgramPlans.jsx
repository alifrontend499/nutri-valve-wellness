import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Row,
    Col,
    Modal
} from 'react-bootstrap'

export default class ProgramPlans extends Component {
    constructor(props) {
        super(props)

        // STATE
        this.state = {
            planModalVisibility: false
        }

        // FUNCTIONS BINDINGS
        this.handleModalOpening = this.handleModalOpening.bind(this)
        this.handleModalClosing = this.handleModalClosing.bind(this)
        this.onModalClose = this.onModalClose.bind(this)
    }

    // opening modal
    handleModalOpening = ev => {
        ev.preventDefault()
        this.setState({
            planModalVisibility: true
        })
    }

    // closing modal
    handleModalClosing = ev => {
        ev.preventDefault()
        this.setState({
            planModalVisibility: false
        })
    }

    // execute when modal closes
    onModalClose = () => {
        console.log('modal closed')
        this.setState({
            planModalVisibility: false
        })
    }

    render() {
        const state = this.state;
        const props = this.props;
        return (
            <>
                <section id="program-plans" className="st-bg-slate ST_def-pad-TB">
                    <Container>
                        <Row className="program-plans">
                            {/* heading */}
                            <Col xs={12} className="st-heading-wrapper text-center mb-3 mb-lg-5">
                                <p className="st-heading heading-xs font-family-secondary-bold">Now, get upto 3 calls with your nutritionist**</p>
                            </Col>

                            {/* plan item */}
                            <Col xs={12} md={6} lg={4} className="plan-item position-relative mb-3 mb-lg-0">
                                <div className="inner bg-white p-2 p-lg-4 h-100 position-relative">
                                    <p className="head font-weight-600 text-center font-size-20 my-3 mt-lg-4 mb-lg-5">90 Day Program</p>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Program Cost:</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 16999</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Discount (40%):</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 6800</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Have A Coupon Code?</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <a href="#" className="btn st-btn st-btn-xs st-btn-outlined-primary font-size-11 font-weight-700 text-uppercase">apply now</a>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Grand Total:</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 10199</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac font-size-14 pt-3 pt-lg-4 mb-3 text-center">
                                        <p className="desc">*Total Savings: Rs. 800 (41%)</p>
                                    </div>

                                    {/* btns */}
                                    <div className="btns mb-3 text-center">
                                        <a href="#"
                                            className="btn st-btn st-btn-secondary font-size-14 font-weight-700 text-uppercase"
                                            onClick={this.handleModalOpening}>buy now</a>
                                    </div>

                                    {/* frac */}
                                    <div className="frac font-size-14 mb-3 text-center">
                                        <p className="desc">Lose Upto 13-22 kg*</p>
                                    </div>

                                </div>
                            </Col>

                            {/* plan item */}
                            <Col xs={12} md={6} lg={4} className="plan-item position-relative mb-3 mb-lg-0">
                                <div className="inner bg-white p-2 p-lg-4 h-100 position-relative">
                                    <p className="head font-weight-600 text-center font-size-20 my-3 mt-lg-4 mb-lg-5">60 Day Program</p>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Program Cost:</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 16999</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Discount (40%):</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 6800</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Have A Coupon Code?</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <a href="#" className="btn st-btn st-btn-xs st-btn-outlined-primary font-size-11 font-weight-700 text-uppercase">apply now</a>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Grand Total:</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 10199</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac font-size-14 pt-3 pt-lg-4 mb-3 text-center">
                                        <p className="desc">*Total Savings: Rs. 800 (41%)</p>
                                    </div>

                                    {/* btns */}
                                    <div className="btns mb-3 text-center">
                                        <a href="#"
                                            className="btn st-btn st-btn-secondary font-size-14 font-weight-700 text-uppercase"
                                            onClick={this.handleModalOpening}>buy now</a>
                                    </div>

                                    {/* frac */}
                                    <div className="frac font-size-14 mb-3 text-center">
                                        <p className="desc">Lose Upto 13-22 kg*</p>
                                    </div>

                                </div>
                            </Col>

                            {/* plan item */}
                            <Col xs={12} md={6} lg={4} className="plan-item position-relative mb-3 mb-lg-0">
                                <div className="inner bg-white p-2 p-lg-4 h-100 position-relative">
                                    <p className="head font-weight-600 text-center font-size-20 my-3 mt-lg-4 mb-lg-5">30 Day Program</p>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Program Cost:</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 16999</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Discount (40%):</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 6800</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Have A Coupon Code?</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <a href="#" className="btn st-btn st-btn-xs st-btn-outlined-primary font-size-11 font-weight-700 text-uppercase">apply now</a>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac d-flex mb-3 font-weight-600">
                                        <div className="lt w-50 pr-1">
                                            <p className="desc">Grand Total:</p>
                                        </div>
                                        <div className="rt w-50 pl-1 text-right">
                                            <p className="desc">Rs. 10199</p>
                                        </div>
                                    </div>

                                    {/* frac */}
                                    <div className="frac font-size-14 pt-3 pt-lg-4 mb-3 text-center">
                                        <p className="desc">*Total Savings: Rs. 800 (41%)</p>
                                    </div>

                                    {/* btns */}
                                    <div className="btns mb-3 text-center">
                                        <a href="#"
                                            className="btn st-btn st-btn-secondary font-size-14 font-weight-700 text-uppercase"
                                            onClick={this.handleModalOpening}>buy now</a>
                                    </div>

                                    {/* frac */}
                                    <div className="frac font-size-14 mb-3 text-center">
                                        <p className="desc">Lose Upto 13-22 kg*</p>
                                    </div>

                                </div>
                            </Col>



                        </Row>
                    </Container>

                    {/* MODALS */}
                    <Modal
                        show={state.planModalVisibility}
                        onHide={this.onModalClose}
                        centered
                        keyboard>
                        <Modal.Header
                            closeButton
                            className="st-heading heading-xs font-family-secondary-bold">
                            <Modal.Title>Buy Plan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="buy-plan-form">

                                {/* form field */}
                                <div className="st-form mb-3">
                                    <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Name</label>
                                    <input type="text" className="form-control bg-transparent" />
                                </div>

                                {/* form field */}
                                <div className="st-form mb-3">
                                    <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Your Email</label>
                                    <input type="email" className="form-control bg-transparent" />
                                </div>

                                {/* form field */}
                                <div className="st-form mb-3">
                                    <label className="font-size-15 font-family-secondary-medium mb-2 st-text-light">Plan Details</label>
                                    <textarea rows="3" className="form-control bg-transparent"></textarea>
                                </div>

                                {/* form button */}
                                <div className="btns d-flex justify-content-center pt-2">
                                    <button className="btn st-btn st-btn-primary st-btn-lg font-size-13 font-weight-800 text-uppercase">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </Modal.Body>
                        {/* <Modal.Footer>
                            <button
                                className="btn st-btn st-btn-lg no-min-width font-size-13 text-uppercase"
                                onClick={this.handleModalClosing}>Cancel</button>
                        </Modal.Footer> */}
                    </Modal>
                </section>
            </>
        )
    }
}
