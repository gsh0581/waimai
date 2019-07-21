import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import './style';
import './rem'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import Container from './Main'
import store from './store/index'
class App extends Component {
  render() {
    return (
    <Fragment>
        <GlobalStyle />
        <Provider store={store}>
            <Container />
        </Provider>
      </Fragment>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
