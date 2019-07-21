import React, { Component } from 'react'
import { connect } from "react-redux";
import Header from './Header/Header'
import Category from './category/Category'
/**
 * @constructor <Home />
 * @description 首页tab代码
 */

class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Header />
                <Category />
            </div>
        )
    }
}

export default connect(null,null)(Home)
