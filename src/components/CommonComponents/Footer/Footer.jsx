import React, { Component } from 'react'

// styles
import './styles/footer-styles.css'

// components
import FooterBottomSec from './includes/FooterBottomSec'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                {/* FOOTER TOP SEC */}
                <div id="footer-bottom-sec" className="st-bg-outer-space-light">
                    <FooterBottomSec />
                </div>
            </footer>
        )
    }
}
