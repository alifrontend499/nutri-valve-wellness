import React, { Component } from 'react'

// styles
import '../styles/footer-styles.css'

// bootstrap
import { Container } from 'react-bootstrap'

export default class FooterTopSec extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const props = this.props

        return (
            <>
                <Container>
                    <div className="footer-top-sec position-relative">
                        <p className="desc text-white-50 font-family-secondary-light text-center">
                            <span className="text-white">Disclaimer. </span>
                            {
                                props.plansText && props.plansText
                            }
                        </p>
                    </div>
                </Container>

            </>
        )
    }
}