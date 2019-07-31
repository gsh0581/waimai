import tabReducer from './tabReducer'
import menuReducer from './menuReducer'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
 
export default (history) => combineReducers({
  router: connectRouter(history),
  tabReducer,
  menuReducer
})
