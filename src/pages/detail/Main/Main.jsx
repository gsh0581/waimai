import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route,withRouter,NavLink } from "react-router-dom";
import NavHeader from 'component/NavHeader/NavHeader'
import Menu from './../Menu'
import Comment from './../Comment'
import Restaurant from './../Restaurant'
import './Main.scss'
class Main extends Component {
    changeTab(){

    }
    renderTabs(){
        let tabs = this.props.tabs
        return tabs.map((item)=>{
            return (    
                <NavLink 
                    onClick={()=>this.changeTab()}
                    replace={true} 
                    to={'/'+item.key} key={item.key} 
                    className="tab-item" 
                    activeClassName="active">
                    {item.name}
                </NavLink>
            )
        })
    }
    render() {
        return (
            <div className="detail">
                <NavHeader title={'黄焖鸡'} />
                <div className="tab-bar">
                    {this.renderTabs()}
                </div>
                <Route exact path="/menu" component={Menu}/>
                <Route path="/comment" component={Comment}/>
                <Route path="/restaurant" component={Restaurant}/>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    tabs : state.tabReducer.tabs
})
export default withRouter(connect(mapStateToProps)(Main))
