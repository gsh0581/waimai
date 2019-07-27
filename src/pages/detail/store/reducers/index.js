import tabReducer from './tabReducer'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
 
export default (history) => combineReducers({
  router: connectRouter(history),
  tabReducer,
})
