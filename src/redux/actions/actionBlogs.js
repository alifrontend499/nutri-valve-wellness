// ACTION CREATORS
import {
    ADD_BLOGS,
    UPDATE_BLOGS,
} from "redux/actions/constants/action-types";

// ALL FUNCTIONS
export function addBlogs(blogsArray) {
    return {
        type: ADD_BLOGS,
        payload: blogsArray
    }
}

export function updateBlogs(blogsArray) {
    return {
        type: UPDATE_BLOGS,
        payload: blogsArray
    }
}