import React, { Component } from 'react'
import { connect } from "react-redux";
import ListItem from "./ListItem/ListItem"
import ScrollView from 'component/ScrollView/ScrollView'
import { getListData } from "./../../store/actions/contentListAction";
import './style.scss'
/**
 * @constructor <CategoryList /> 
 * @description 附近商家列表
 */
class CategoryList extends Component {
    constructor(props) {
        super(props)
        // 标识是否可以滚动
        this.state={
            isend:false,

        }
        this.page = 0
        // 请求第一屏数据
        this.fatchData(this.page)
    }
    onLoadPage(){
        this.page++
            // 最多滚动三页
            if(this.page >3){
                this.setState({
                    isend :true,
                })
            }else{
                this.fatchData(this.page);
            }
    }
  
    fatchData(page){
        this.props.dispatch(getListData(page))
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
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.state.isend}>
                { this.renderItems() }
                </ScrollView>
            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    list:state.contentListReducer.list
})
export default connect(mapStateToProps,null)(CategoryList)