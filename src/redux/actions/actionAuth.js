// ACTION CREATORS
import {
    SAVE_COMMONTOKEN,
    REMOVE_COMMONTOKEN
} from "redux/actions/constants/action-types";

// ALL FUNCTIONS
export function saveCommonTokenToStore(token) {
    return {
        type: SAVE_COMMONTOKEN,
        payload: token
    }
}

export function removeCommonTokenFromStore() {
    return {
        type: REMOVE_COMMONTOKEN,
        payload: 'token removed from the store!'
    }
}