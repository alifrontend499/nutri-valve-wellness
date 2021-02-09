import React, { Component } from 'react'

// styles
import '../styles/footer-styles.css'

// bootstrap
import { Container, Modal, Button } from 'react-bootstrap'

export default class FooterTopSec extends Component {
    constructor(props) {
        super(props)

        // state
        this.state = {
            sendMessageModalVisibility: false
        }

        this.showModal = this.showModal.bind(this)
    }

    // for modal toggle
    showModal = ev => {
        ev.preventDefault()
        this.setState({ sendMessageModalVisibility: true })
    }

    // for modal toggle
    hideModal = () => {
        this.setState({ sendMessageModalVisibility: false })
    }

    render() {
        return (
            <>
                <Container>
                    <div className="footer-top-sec position-relative">
                        <p className="desc text-white-50 font-family-secondary-light text-center">
                            <span className="text-white">Disclaimer.</span> *Clients following our programs, on average, lose 1-2 kg per diet plan. Restrictions apply. Results may vary from person to person.
                        </p>

                        {/* send message */}
                        <a
                            href="#"
                            className="send-message-btn d-block p-3 position-absolute st-bg-primary text-decoration-none text-white"
                            onClick={this.showModal}>
                            Send message
                        </a>

                        <SendMessageModal
                            show={this.state.sendMessageModalVisibility}
                            onHide={this.hideModal}
                        />
                    </div>
                </Container>

            </>
        )
    }
}


function SendMessageModal(props) {
    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="custom-modal"
        >
            {/* modal header */}
            <Modal.Header
                closeButton
                className="st-border-gray">
                <Modal.Title
                    id="contained-modal-title-vcenter" className="font-family-secondary-medium font-size-20 font-weight-normal">
                    Send us a message
                </Modal.Title>
            </Modal.Header>

            {/* modal body */}
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>

            {/* modal body */}
            <Modal.Footer className="st-border-gray">
                <Button onClick={props.onHide} className="btn st-btn st-btn-primary font-weight-700">Close</Button>
            </Modal.Footer>
        </Modal>
    );
}