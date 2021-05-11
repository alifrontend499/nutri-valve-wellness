// ACTION CREATORS
import {
    ADD_SUCCESS_STORIES,
    UPDATE_SUCCESS_STORIES,
} from "redux/actions/constants/action-types";

// ALL FUNCTIONS
export function addSuccessStories(successStoriesArray) {
    return {
        type: ADD_SUCCESS_STORIES,
        payload: successStoriesArray
    }
}

export function updateSuccessStories(successStoriesArray) {
    return {
        type: UPDATE_SUCCESS_STORIES,
        payload: successStoriesArray
    }
}