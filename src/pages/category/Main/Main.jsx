import React, { Component } from 'react'
import NavHeader from 'component/NavHeader/NavHeader'
import Header from './../Header'

 class Main extends Component {
        constructor(props) {
            super(props);
        }
        
        render() {
        return ( 
            <div className="category">
                <NavHeader title="分类"/>
                <Header />
            </div>
        )
    }    
}


export default Main