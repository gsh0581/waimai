import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import 'static/rem'
import { Provider } from 'react-redux'
import { GlobalStyle } from 'static/style'
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
        <Container />
    </ConnectedRouter>
        </Provider>
      </Fragment>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
