// import { combineReducers } from "redux-immutable"
import tabReducer from './tabReducer'
import categoryReducer from './categoryReducer'
import contentListReducer from './contentListReducer'
import orderReducer from './orderReducer'
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
 
export default (history) => combineReducers({
  router: connectRouter(history),
  tabReducer,
  categoryReducer,
  contentListReducer,
  orderReducer
})
// const reducer = combineReducers({
//     tabReducer,
//     categoryReducer,
//     contentListReducer,
//     orderReducer
// })
// export default reducer