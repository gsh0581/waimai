import React, { Component } from 'react'
import './style.scss'
export default class Loading extends Component {
    render() {
        let str = "加载中"
        if(this.props.isend){
            str = "已完成"
        }
        return (
            <div className="loading">{str}</div>
        )
    }
}
