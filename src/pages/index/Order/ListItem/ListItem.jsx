import React, { Component } from 'react'
import './style.scss'
export default class ListItem extends Component {
    constructor(props) {
        super(props);
        
    }
    renderComment(data){
        let evaluation = !data.is_comment;
        if(evaluation){
            return (
                <div className="evaluation clearfix">
                    <div className="evaluation-btn">评价</div>
                </div>
            )
        }
    }
    renderTotalPrice(item,data,index){
        return( <div className="product-item" key={index}>
        <span>...</span>
        <div className="p-total-count">
            总计 {data.product_count}个菜，实付 
            <span className="total-price">¥{data.total}</span>
           
        </div>
    </div>)
    }
    
    renderProduct(data){
        let list = data.product_list
        let _list =JSON.parse(JSON.stringify(list))
        _list.push({type:'more'});

        return _list.map((item,index)=>{ 
            if(item.type === "more"){
                return this.renderTotalPrice(item,data,index)
            }
            return (
                <div className="product-item" key={index}>
                          {item.product_name}
                          <div className="p-count">
                              x{item.product_count}
                          </div>
                            </div>
            )
        })
    }
    render() {
        let data = this.props.itemData;
        return (
            <div className="order-item ">
                <div className="order-item-inner scale-1px">
                    <img src={data.poi_pic} alt="" className="item-img"/>
                    <div className="item-right">
                        <div className="item-top">
                            <p className="order-name one-line">{data.poi_name}</p>
                            <div className="arrow"></div>
                            <div className="order-state">{data.status_description}</div>
                        </div>
                    <div className="item-bottom">
                        {this.renderProduct(data)}
                    </div>
                    </div>
                </div>
                {this.renderComment(data)}
            </div>
        )
    }
}