// import { combineReducers } from "redux-immutable"
import {combineReducers} from 'redux'
import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'
import contentListReducer from './contentListReducer'
import orderReducer from './orderReducer'
const reducer = combineReducers({
    tabReducer,
    categoryReducer,
    contentListReducer,
    orderReducer
})
export default reducer