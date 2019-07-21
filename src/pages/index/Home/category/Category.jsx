import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getHeadData } from "../../store/actions/categoryAction";
import './style.scss'
 class Category extends Component {
     constructor(props) {
         super(props);
         this.fetchData()
        }
    renderItems(){
        const {items} = this.props
        const categories = items.splice(0,8)
        return categories.map((item,index)=>{
           return <div key={index} className="category-item">
               <img src={item.url} alt="" className="item-icon"/>
               <p className="item-name">{item.name}</p>
           </div>
        })
    }
    fetchData(){
      this.props.dispatch(getHeadData())
    }
    
    render() {
        return (
            <div className="category-content clearfix">
                {this.renderItems()}
            </div>
        )
    }
   
}
const mapStateToProps = state => ({
    items:state.categoryReducer.items
})
export default connect(mapStateToProps,null)(Category)
