import React, { Component } from 'react'
import './style.scss'
import { connect } from "react-redux";
import ScrollView from 'component/ScrollView/ScrollView'
import ListItem from 'component/ListItem/ListItem'
import { getListData } from "../store/actions/contentListAction";
class ContentList extends Component {
    constructor(props) {
        super(props);
        this.fetchData()
    }
    onLoadPage(){
        if(this.props.page <=3){
            this.fetchData()
        }
    }
    fetchData(){
        this.props.dispatch(getListData())
    }
    renderItems(){
        let {list} = this.props
        return list.map((item,index)=>{
            return <ListItem key={index} itemData={item}></ListItem>
        })
    }
    render() {
        return (
            <div className="list-content">
                <ScrollView loadCallback={this.onLoadPage.bind(this)} isend={this.props.isend} >
                    {this.renderItems()}
                </ScrollView>
            </div>
        )
    }
}
const MapStateToProps = state=> ({
    list: state.contentListReducer.list,
    page: state.contentListReducer.page,
    isend: state.contentListReducer.isend,
})
export default connect(MapStateToProps,null)(ContentList)
