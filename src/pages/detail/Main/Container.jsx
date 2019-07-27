import React, { Component } from 'react'
import Main from './Main'
import { hot } from "react-hot-loader";
class Container extends Component {
    render() {
        return (
            <Main />
        )
    }
}
export default hot(module)(Container)
