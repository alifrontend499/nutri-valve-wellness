// ACTION CREATORS
import {
    ADD_BLOGS,
    UPDATE_BLOGS,
    EMPTY_BLOGS
} from "redux/actions/constants/action-types";

const initialState = {
    blogs: []
};

function blogsReducer(state = initialState, action) {
    if (action.type === ADD_BLOGS) {
        return {
            ...state,
            blogs: [...action.payload]
        }
    }

    if (action.type === UPDATE_BLOGS) {
        return {
            ...state,
            blogs: [...state.blogs, ...action.payload]
        }
    }

    if (action.type === EMPTY_BLOGS) {
        return {
            ...state,
            blogs: []
        }
    }

    return state
}

export default blogsReducer;