import React, { Component } from 'react'
import { connect } from "react-redux";
import './style.scss'
class Header extends Component {
    constructor(props) {
        super(props);
        
    }
    changeTab(){
        
    }
    renderTabs(){
        const {tabs} = this.props
        let array = []
        for (const key in tabs) {
                const item = tabs[key]
                let cls = item.key +' item'
                if(item.key === this.props.activeKey){
                    cls += 'current'
                }
                array.push(
                <div onClick={()=>{this.changeTab(item.key)}} 
                    key={item.key} 
                    className={cls}
                >
                {item.text}
                </div>)
                
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    {this.renderTabs()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state=> ({
    tabs:state.headReducer.tabs,
    activeKey:state.headReducer.activeKey,
})
export default connect(mapStateToProps)(Header)