import React, { Component } from 'react'
import './style.scss'
import {getOrderData} from './../store/actions/orderAction'
import ScrollView from 'component/ScrollView/ScrollView'

import ListItem from './ListItem/ListItem'
import {connect} from 'react-redux'

/**
     * @constructor <Order />
     * @description 订单tab代码
     */
 class Order extends Component {
    constructor(props) {
        super(props);
        this.page =0;

        this.state = {
            isend:false
        }
        this.fetchData(this.page) // 异步放在constructor里
    }
    fetchData(page){

        this.props.dispatch(getOrderData(page))
    }
    loadPage(){
        this.page++
        if(this.page>3){
            this.setState({
                isend:true
            })
        }
        else{
            this.fetchData(this.page)
        }
    }
    renderList(){
        const {list} = this.props
        return list.map((item,index)=>{
            return <ListItem key={index} itemData={item} ></ListItem>
        })
    }
    render() {
        return (
            <div className="order">
                    <div className="header">订单</div>
                    <ScrollView loadCallback={this.loadPage.bind(this)} isend={this.state.isend}>
                        <div className="order-list">{this.renderList()}</div>
                    </ScrollView>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.orderReducer.list
})
export default connect(mapStateToProps,null)(Order)
