import React, { Component } from 'react'

// PAGES
import Dashboard from './pages/Dashboard/Dashboard'
import LoginInformation from './pages/LoginInformation/LoginInformation'
import PersonalInformation from './pages/PersonalInformation/PersonalInformation'

export default class MyAccount extends Component {
    render() {
        return (
            <>
                <Dashboard />

                {/* <LoginInformation />

                <PersonalInformation /> */}
            </>
        )
    }
}
