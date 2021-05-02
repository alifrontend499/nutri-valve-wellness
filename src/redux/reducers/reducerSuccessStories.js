// ACTION CREATORS
import {
    ADD_SUCCESS_STORIES,
    UPDATE_SUCCESS_STORIES,
} from "redux/actions/constants/action-types";

const initialState = {
    successStories: []
};

function successStoriesReducer(state = initialState, action) {
    if (action.type === ADD_SUCCESS_STORIES) {
        return {
            ...state,
            successStories: [...action.payload]
        }
    }

    if (action.type === UPDATE_SUCCESS_STORIES) {
        return {
            ...state,
            successStories: [...state.successStories, ...action.payload]
        }
    }

    return state
}

export default successStoriesReducer;