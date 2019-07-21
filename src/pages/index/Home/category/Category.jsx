import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getHeadData } from "../../store/actions/categoryAction";
 class Category extends Component {
     constructor(props) {
         super(props);
         this.fetchData()
        }
    renderItems(){
        const {items} = this.props
        return items.map((item,index)=>{
           return <div key={index}>{item.name}</div>
        })
    }
    fetchData(){
      this.props.dispatch(getHeadData())
    }
    
    render() {
        return (
            <div className="category-content">
                {this.renderItems()}
            </div>
        )
    }
   
}
const mapStateToProps = state => ({
    items:state.categoryReducer.items
})
export default connect(mapStateToProps,null)(Category)
