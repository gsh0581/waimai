import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import './style';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import Container from './Main/index.jsx'
import { ConnectedRouter } from "react-router-redux";
import store from './store'
export class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <ConnectedRouter>
            <Container />
          </ConnectedRouter>
        </Provider>
      </Fragment>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
