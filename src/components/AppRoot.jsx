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

// api: common
import { checkUser } from 'utlis/apis/common'

// local storage
import { setItemToLocalStorage } from 'utlis/localStorage/localStorage'

import { saveCommonTokenToStore } from 'redux/actions/actionAuth'

class AppRoot extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loader: true
        }
    }

    componentDidMount() {
        // MAKING USER REQUEST
        checkUser('sysadmin@admin.com', 'SysAdmin123').then(res => {

            // saving token to the store
            this.props.saveCommonTokenToStore(res.data.token.toString())

            this.setState({ loader: false });
        })
    }

    render() {
        const { loader } = this.state;
        return (
            <div className="app-root">
                {
                    /* loading */
                    (loader) ? (
                        <div className="d-flex justify-content-center align-items-center position-fixed h-100 w-100" style={{ top: 0, left: 0, zIndex: 99 }}>
                            <div className="spinner-grow align-self-center" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <React.Fragment>
                            <Header />

                            <ScrollToTop />
                            <AllRoutes />

                            <Footer />
                        </React.Fragment>
                    )
                }
            </div>
        )
    }
}

const dispatchActionsToProps = dispatch => {
    return {
        saveCommonTokenToStore: comonToken => dispatch(saveCommonTokenToStore(comonToken))
    }
}


export default connect(null, dispatchActionsToProps)(AppRoot)