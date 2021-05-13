// ACTION CREATORS
import {
    ADD_RECIPES,
    UPDATE_RECIPES,
    EMPTY_RECIPES
} from "redux/actions/constants/action-types";

const initialState = {
    recipes: []
};

function recipesReducer(state = initialState, action) {
    if (action.type === ADD_RECIPES) {
        return {
            ...state,
            recipes: [...action.payload]
        }
    }

    if (action.type === UPDATE_RECIPES) {
        return {
            ...state,
            recipes: [...state.recipes, ...action.payload]
        }
    }
    
    if (action.type === EMPTY_RECIPES) {
        return {
            ...state,
            recipes: []
        }
    }

    return state
}

export default recipesReducer;