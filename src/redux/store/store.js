import { createStore, combineReducers } from 'redux'

// REDUCERS
import authReducer from 'redux/reducers/reducerAuth'
import recipesReducer from 'redux/reducers/reducerRecipes'

// STORE CREATION
const rootReducer = combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)