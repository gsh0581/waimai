import React ,{Component,Fragment}from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'static/style'
import Container from './Main/Container';

import store from './store';
class Category extends Component {
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
ReactDom.render(<Category />,document.getElementById('root')
);