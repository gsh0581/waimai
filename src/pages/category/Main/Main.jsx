import React, { Component } from 'react'
import NavHeader from 'component/NavHeader/NavHeader'
import Header from './../Header'
import { connect } from "react-redux";
import ContentList from './../ContentList/ContentList'
import 'component/common.scss'
 class Main extends Component {
        constructor(props) {
            super(props);
        }
        
        render() {
        return ( 
            <div className="category">
                <NavHeader title="分类"/>
                <Header />
                <ContentList />
            </div>
        )
    }    
}


export default connect(null,null)(Main) 