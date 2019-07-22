import { createStore,compose,applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
export const history = createBrowserHistory()

import thunk from 'redux-thunk'


export default function configureStore(preloadedState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
      createRootReducer(history), // root reducer with router state
      preloadedState,
      composeEnhancers(
        applyMiddleware(routerMiddleware(history), thunk
        ),
      ),
    )
    if (module.hot) {
        module.hot.accept('./reducers/index',()=>{
            const nextRootReducer = require('./reducers/index').default
            store.replaceReducer(nextRootReducer)
        })
        
    }
    return store
  }
// const store = createStore(reducer,
//     composeEnhancers(
//         applyMiddleware(thunk)
//     ))

    

// export default store