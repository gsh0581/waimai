import React, { Component } from 'react'
import { connect } from "react-redux";
import ListItem from "./ListItem/ListItem";
import { getListData } from "./../../store/actions/contentListAction";
import './style.scss'
/**
 * @constructor <CategoryList /> 
 * @description 附近商家列表
 */
class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.fatchData();
    }
    fatchData(){
        this.props.dispatch(getListData())
    }
    renderItems(){
        const {list} = this.props;
        return list.map((item,index)=>{
            return <ListItem key={index} itemData={item}></ListItem>
        })
    }
    render() {
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>附近商家</span>
                    <span className="title-line"></span>                    
                </h4>
                {
                        this.renderItems()
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.contentListReducer.list
})
export default connect(mapStateToProps,null)(CategoryList)