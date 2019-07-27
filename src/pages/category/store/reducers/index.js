import { combineReducers } from "redux"
import headReducer from "./headReducer"
import contentListReducer from './contentReducer'
const reducers = combineReducers({
    headReducer,
    contentListReducer
})
export default reducers