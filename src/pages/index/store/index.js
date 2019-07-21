import { createStore,compose,applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    ))
if (module.hot) {
    module.hot.accept('./reducers/index',()=>{
        const nextRootReducer = require('./reducers/index').default
        store.replaceReducer(nextRootReducer)
    })
    
}
export default store