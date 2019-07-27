import React, { Component } from 'react'
import { connect } from "react-redux";
import { TABKEY } from "../config";
import {changeTab, getFilterData,changeFilter} from './../store/actions/HeaderAction'
import './style.scss'
import { getListData } from '../store/actions/contentListAction';
class Header extends Component {
    constructor(props) {
        super(props);
        this.fetchData()
    }
    fetchData(){
        this.props.dispatch(getFilterData())
    }
       /**
     * 点击切换tab
     * @param {*} key 
     */
    changeTab(key){
        let closePanel = false
        if(this.props.activeKey === key && !this.props.closePanel){
            closePanel = true
        }
        this.props.dispatch(changeTab({
           activeKey:key,
           closePanel,
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
    /**
     * 重置其他的item的active状态
     * @param {*} key 
     * @param {*} dataList 
     */
    revertActive(key,dataList){
        if(key === TABKEY.cate){
            for (let i = 0; i < dataList.length; i++) {
                 for (let j = 0; j < dataList[i].sub_category_list.length; j++) {
                    dataList[i].sub_category_list[j].active = false
                 }
            }
        }
        else if (key === TABKEY.type){
            for (let x = 0; x < dataList.length; x++) {
                dataList[x].active = false;
            }
        }
        else{
            for (let k = 0; k < dataList.length; k++) {
                for (let q = 0; q < dataList[k].item.length; q++) {
                   dataList[k].item[q].active = false
                }
           }
        }
    }
    /**
     * 变化当前点击的item状态，同时发起filter请求
     * @param {*} item 
     * @param {*} key 
     * @param {*} dataList 
     */
    changeDoFilter(item,key,dataList){
        this.revertActive(key,dataList)
        item.active = true
        this.props.dispatch(changeFilter({
            item,
            key
        }))
        this.props.dispatch(getListData({
            filterData:item,
            toFirstPage:true
        }))
    }

    renderCateInnerContent(items,cateList){
        return items.sub_category_list.map((item,index)=>{
            let cls = item.active? 'cate-box-inner active':'cate-box-inner'
            return <div className="cate-box" key={index} 
            onClick={()=>this.changeDoFilter(item,TABKEY.cate,cateList)}
            ><div className={cls}>{item.name}({item.quantity})</div>
            </div>
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
    renderCateContent(){
        const cateList = this.props.filterData.category_filter_list || []
        return cateList.map((item,index)=>{
            return (
                <li key={index} className="cate-item">
                    <p className="item-title">{item.name}
                    <span className="item-count">{item.quantity}</span> 
                    </p>
                    <div className="item-content clearfix">
                        {this.renderCateInnerContent(item,cateList)}
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
 
    render() {
        let cls = 'panel'
        if(!this.props.closePanel){
            cls += ' show'
        }
        else{
            cls = 'panel'
        }
        return (
            <div className="header">
                <div className="header-top">
                    {this.renderTabs()}
                </div>
                <div className={cls}>
                <div className="panel-inner">
                {this.renderContent()}
                </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state=> ({
    tabs:state.headReducer.tabs,
    activeKey:state.headReducer.activeKey,
    filterData:state.headReducer.filterData,
    closePanel:state.headReducer.closePanel
})
export default connect(mapStateToProps)(Header)