// ACTION CREATORS
import {
    ADD_RECIPES,
    UPDATE_RECIPES,
} from "redux/actions/constants/action-types";

// ALL FUNCTIONS
export function addRecipes(recipesArray) {
    return {
        type: ADD_RECIPES,
        payload: recipesArray
    }
}

export function updateRecipes(updatedRecipesArray) {
    return {
        type: UPDATE_RECIPES,
        payload: updatedRecipesArray
    }
}