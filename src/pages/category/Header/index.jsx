import React, { Component } from 'react'
import { connect } from "react-redux";
import { TABKEY } from "../config";
import {changeTab, getFilterData} from './../store/actions/HeaderAction'
import './style.scss'
class Header extends Component {
    constructor(props) {
        super(props);
        this.fetchData()
    }
    fetchData(){
        this.props.dispatch(getFilterData())
    }
    renderCateInnerContent(items){
        return items.sub_category_list.map((item,index)=>{
            let cls = item.active? 'cate-box-inner active':'cate-box-inner'
            return <div className="cate-box" key={index}>
           <div className={cls}>
            {item.name}({item.quantity})</div>
            </div>
        })
    }
    renderCateContent(){
        const cateList = this.props.filterData.category_filter_list || []
        return cateList.map((item,index)=>{
            return (
                <li key={index} className="cate-item">
                    <p className="item-title">{item.name}</p>
                    <span className="item-quantity">{item.quantity}</span> 
                    <div className="item-content">
                        {this.renderCateInnerContent(item,cateList)}
                    </div>
                </li>
            )
        })
    }
    renderTypeContent(){
        const typeList = this.props.filterData.sort_type_list || []
        return typeList.map((item,index)=>{
            let cls = item.active? "type-item active":"type-item"
            return (
                <li key={index} className={cls}>
                    {item.name}
                </li>
            )
        })
    }
    /**
     * 解决内部的每个类目
     * @param {*} items 
     * @param {*} filterList 
     */
    renderFilterInnerContent(items){
        return items.map((item,index)=>{
            let cls = item.icon? "cate-box-inner has-icon":"cate-box-inner"            
            if(item.active){
                cls+= ' active'
            }
            return (
                <div key={index} className="cate-box">
                    <div className={cls}>
                        {item.name}
                    </div>
                </div>
            )
        })
    }
    renderFilterContent(){
        const filterList = this.props.filterData.activity_filter_list || []
        return filterList.map((item,index)=>{

            return (
                <li key={index} className="filter-item" >
                   <p className="filter-title">
                    {item.group_title}
                   </p>
                   <div className="item-content">
                       {this.renderFilterInnerContent(item.items,filterList)}
                   </div>
                </li>
            )
        })
    }
    /**
     * 渲染过滤面板
     * @param {*} key 
     */
    renderContent(){
        const {tabs} = this.props
        let array = []
        for (const key in tabs) {
                const item = tabs[key];
                let cls = item.key +'-panel'
                if(item.key === this.props.activeKey){
                    cls +=' current';
                }
                if(item.key === TABKEY.cate){
                    array.push(
                        <ul key={item.key} className={cls}>
                            {this.renderCateContent()}
                        </ul>
                    )
                }else if (item.key === TABKEY.type){
                    array.push(
                        <ul key={item.key} className={cls}>
                            {this.renderTypeContent()}
                        </ul>
                    )
                }
                else if (item.key === TABKEY.filter){
                    array.push(
                        <ul key={item.key} className={cls}>
                            {this.renderFilterContent()}
                        </ul>
                    )
                }
        }
        return array         
    }
    /**
     * 点击切换tab
     * @param {*} key 
     */
    changeTab(key){
        this.props.dispatch(changeTab({
           activeKey:key
        }))
    }
    renderTabs(){
        const {tabs} = this.props
        let array = []
        for (const key in tabs) {
                const item = tabs[key]
                let cls = item.key +' item'
                if(item.key === this.props.activeKey){
                    cls += ' current'
                }
                array.push(
                <div onClick={()=>{this.changeTab(item.key)}} 
                    key={item.key} 
                    className={cls}
                >
                {item.text}
                </div>)
        }
        return array
    }
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    {this.renderTabs()}
                </div>
                {this.renderContent()}
            </div>
        )
    }
}
const mapStateToProps = state=> ({
    tabs:state.headReducer.tabs,
    activeKey:state.headReducer.activeKey,
    filterData:state.headReducer.filterData
})
export default connect(mapStateToProps)(Header)