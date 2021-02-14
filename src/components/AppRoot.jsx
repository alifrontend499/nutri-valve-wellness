import React, { Component } from 'react'

// routes
import AllRoutes from 'routes/AllRoutes'

// scroll to top
import ScrollToTop from './ScrollToTop'

export default class AppRoot extends Component {
    render() {
        return (
            <div className="app-root">
                <ScrollToTop />
                <AllRoutes />
            </div>
        )
    }
}
