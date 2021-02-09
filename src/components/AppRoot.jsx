import React, { Component } from 'react'

// routes
import AllRoutes from 'routes/AllRoutes'

export default class AppRoot extends Component {
    render() {
        return (
            <div className="app-root">
                <AllRoutes />
            </div>
        )
    }
}
