import React, {
    Component
} from 'react'

// redux
import { connect } from 'react-redux';


// routes
import AllRoutes from 'routes/AllRoutes'

// scroll to top
import ScrollToTop from './ScrollToTop'

// components
import Header from 'components/CommonComponents/Header/Header'
import Footer from 'components/CommonComponents/Footer/Footer'

// actions
import { saveCommonTokenToStore, saveCurrentUserToStore, authenticateUser } from 'redux/actions/actionAuth'

// helpers
import { getCurrentUserFromLocalStorage } from 'utlis/helpers/Helpers_common'

class AppRoot extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }

    componentDidMount() {

        const currentUser = getCurrentUserFromLocalStorage()
        // console.log('currentUser ', currentUser)
        if (currentUser) {
            // saving user details to the local storage
            this.props.saveCommonTokenToStore(currentUser.userToken)
            this.props.saveCurrentUserToStore(currentUser)
            this.props.authenticateUser(true)

            setTimeout(() => {
                // loading false
                this.setState({
                    loading: false
                })
            }, 500);
        } else {
            // saving user details to the local storage
            this.props.saveCommonTokenToStore("")
            this.props.saveCurrentUserToStore(null)
            this.props.authenticateUser(false)

            setTimeout(() => {
                // loading false
                this.setState({
                    loading: false
                })
            }, 500);
        }
    }

    render() {
        const state = this.state;
        return (
            <div className="app-root">
                <Header />

                <ScrollToTop />
                <AllRoutes authLoading={state.loading} />

                <Footer />
            </div>
        )
    }
}

const dispatchActionsToProps = dispatch => {
    return {
        saveCommonTokenToStore: comonToken => dispatch(saveCommonTokenToStore(comonToken)),
        saveCurrentUserToStore: currentUser => dispatch(saveCurrentUserToStore(currentUser)),
        authenticateUser: bool => dispatch(authenticateUser(bool)),
    }
}


export default connect(null, dispatchActionsToProps)(AppRoot)