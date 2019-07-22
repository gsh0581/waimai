import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import './style';
import './rem'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'
import Container from './Main'
import configureStore, { history } from './store'
const store = configureStore(/* provide initial state if any */)
class App extends Component {
  render() {
    return (
    <Fragment>
        <GlobalStyle />
        <Provider store={store}>
        <ConnectedRouter history={history}> 
        <Switch>
          <Route exact path="/" render={() => (<Container />)} />
        </Switch>
    </ConnectedRouter>
        </Provider>
      </Fragment>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
