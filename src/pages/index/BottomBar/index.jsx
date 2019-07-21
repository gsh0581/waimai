import './style.scss'

import React, { Component } from 'react'

import { connect } from "react-redux";

import {changeTab} from '../store/actions/actionCreator'

import './style.scss'

/**
 * @constructor <BottomBar>
 * @description 首页底部tab栏
 */

class BottomBar extends Component {
    constructor(props) {
        super(props);
    }
    changeTab(item){
        this.props.dispatch(changeTab({
            activeKey:item.key
        }))
    }
    renderItems(){
        const {tabs} = this.props   
        return tabs.map((item,index)=>(
            <div key={index} onClick={(item)=>{this.changeTab(item)}} className={item.key+' '+"btn-item"} >
                <div className="tab-icon"></div>
                <div className="btn-name">{item.name}</div>
            </div>
        ))
    }
    render() {
        return (
            <div className="bottom-bar">
                {this.renderItems()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    tabs:state.tabReducer.tabs,
    activeKey:state.tabReducer.activeKey
})
export default connect(mapStateToProps,null)(BottomBar)
