import { createStore, combineReducers } from 'redux'

// REDUCERS
import authReducer from 'redux/reducers/reducerAuth'
import recipesReducer from 'redux/reducers/reducerRecipes'
import successStoriesReducer from 'redux/reducers/reducerSuccessStories'
import blogsReducer from 'redux/reducers/reducerBlogs'

// STORE CREATION
const rootReducer = combineReducers({
    auth: authReducer,
    recipes: recipesReducer,
    successStories: successStoriesReducer,
    blogs: blogsReducer,
})

export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)