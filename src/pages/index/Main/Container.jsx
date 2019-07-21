import React, { Component } from 'react'
import Main from './index.jsx'
import { hot } from "react-hot-loader/root";
class Container extends Component {
    render() {
        return <Main /> 
    }
}
export default hot(module)(Container);