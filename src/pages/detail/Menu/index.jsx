import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getListData, itemClick} from './../store/actions/MenuAction'
import MenuItem from './MenuItem/MenuItem'
import ShopBar from './ShopBar/ShopBar'
import './style.scss'
class Menu extends Component {
    constructor(props) {
        super(props);
        this.fetchData()
    }
    fetchData(){
        this.props.dispatch(getListData())
    }
    itemClick(index){
        this.props.dispatch(itemClick({
            currentLeftIndex:index
        }))
    }
    renderRightList(array){
        let _array = array || [];
        return _array.map((item,index)=>{
            if(!item.chooseCount){
                item.chooseCount = 0
            }
            return <MenuItem key={index} data={item} _index={index}></MenuItem>
        })
    }
    /**
     * 渲染右边的列表
     */
    renderRight(){
        let array = this.props.listData.food_spu_tags || []
        let index = this.props.currentLeftIndex
        let currentItem = array[index]
        if(currentItem){
            let title = <p key={1} className="right-title">
                {currentItem.name}
            </p>
            return [
                title,
                <div key={2} className="right-list-inner">{this.renderRightList(currentItem.spus)}</div>
            ]
        }
    }
    /**
     * 渲染左边的列表
     */
    renderLeft(){
            let list = this.props.listData.food_spu_tags || []

            return list.map((item,index)=>{
                let cls = this.props.currentLeftIndex === index? 'left-item active': 'left-item'
                return (<div 
                key={index} 
                className={cls}
                onClick={()=>{
                    this.itemClick(index)
                }}
                >
                    <div className="item-text">
                        {item.icon? <img src={item.icon} alt="" className="item-img"/>:null}
                        {item.name}
                    </div>
                </div>)
            })
    }
    
    render() {
        return (
            <div className="menu-inner">
                <div className="left-bar">
                    <div className="left-bar-inner">
                        {this.renderLeft()}
                    </div>
                </div>
                <div className="right-content">
                    {this.renderRight()}
                </div>
                <ShopBar />
            </div>
        )
    }
}
const mapState = (state)=>({
    listData:state.menuReducer.listData,
    currentLeftIndex:state.menuReducer.currentLeftIndex,
    
})
export default connect(mapState,null)(Menu)