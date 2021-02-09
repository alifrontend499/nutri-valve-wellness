import React, { Component } from 'react'

// router
import {
    Switch,
    Route
} from 'react-router-dom'

// components
import Home from 'components/Home/Home'

import PageNotFound from 'components/PageNotFound/PageNotFound'

export default class AllRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="**" component={PageNotFound} />
            </Switch>
        )
    }
}
