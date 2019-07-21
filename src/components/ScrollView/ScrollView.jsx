
import React, { Component } from 'react'
import Loading from 'component/Loading/Loading'

import './style.scss'
/**
 * @constructor <ScrollView loadCallback={function} isend={bool}/> 
 * @description 滚动加载组件
 */

export default class ScrollView extends Component {
    
    onLoadPage(){
        let clientHeight = document.documentElement.clientHeight
        let scrollHeight = document.body.scrollHeight
        let scrollTop = document.documentElement.scrollTop

        let proLoadDis = 30;

        if((scrollTop +clientHeight) >= (scrollHeight-proLoadDis)){
            if(!this.props.isend)
                this.props.loadCallback && this.props.loadCallback()
        }
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onLoadPage.bind(this))
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onLoadPage.bind(this))
        
    }
    
    render() {
        return (
          <div className="scrollView">
              {this.props.children}
              <Loading isend={this.props.isend}/>
          </div>
        )
    }
}
