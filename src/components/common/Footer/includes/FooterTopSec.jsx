import React, { Component } from 'react'

// styles
import '../styles/footer-styles.css'

// bootstrap
import { Container } from 'react-bootstrap'

export default class FooterTopSec extends Component {
    render() {
        return (
            <>
                <Container>
                    <div className="footer-top-sec position-relative">
                        <p className="desc text-white-50 font-family-secondary-light text-center">
                            <span className="text-white">Disclaimer.</span> *Clients following our programs, on average, lose 1-2 kg per diet plan. Restrictions apply. Results may vary from person to person.
                        </p>
                    </div>
                </Container>

            </>
        )
    }
}