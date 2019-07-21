// import { combineReducers } from "redux-immutable"
import {combineReducers} from 'redux'
import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'
const reducer = combineReducers({
    tabReducer,
    categoryReducer
})
export default reducer