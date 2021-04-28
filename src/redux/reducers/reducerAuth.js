// ACTION CREATORS
import {
    SAVE_COMMONTOKEN,
    REMOVE_COMMONTOKEN
} from "redux/actions/constants/action-types";

const initialState = {
    commonToken: ''
};

function authReducer(state = initialState, action) {
    if (action.type === SAVE_COMMONTOKEN) {
        return {
            ...state,
            commonToken: action.payload
        }
    }
    if (action.type === REMOVE_COMMONTOKEN) {
        return {
            ...state,
            commonToken: ''
        }
    }
    return state
}

export default authReducer;