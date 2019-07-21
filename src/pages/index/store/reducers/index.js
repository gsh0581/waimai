// import { combineReducers } from "redux-immutable"
import {combineReducers} from 'redux'
import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'
import contentListReducer from './contentListReducer'
const reducer = combineReducers({
    tabReducer,
    categoryReducer,
    contentListReducer
})
export default reducer