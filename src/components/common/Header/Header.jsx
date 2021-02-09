import React, { Component } from 'react'

// bootstrap
import {
    Container,
    Row,
} from 'react-bootstrap';

// includes
import HeaderTopSec from './includes/HeaderTopSec'
import HeaderMainSec from './includes/HeaderMainSec'

export default class Header extends Component {
    render() {
        return (
            // <header className="position-sticky">
            <header>
                {/* HEADER TOP SEC */}
                <div id="header-top-sec">
                    <HeaderTopSec />
                </div>

                {/* HEADER MAIN SEC */}
                <div id="header-main-sec">
                    <HeaderMainSec />
                </div>
            </header>
        )
    }
}
