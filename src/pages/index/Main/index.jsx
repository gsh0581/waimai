import React, { Component } from 'react'
import {Route,withRouter} from 'react-router-dom'
import Home from './../Home/Home'
import Order from './../Order/Order'
import My from './../My/My'
import './main.scss'
import BottomBar from './../BottomBar'
// import Loading from './Loading'
// import Loadable from 'react-loadable'
// const Order = Loadable({
//     loader: () => import(/* webpackChunkName: "order" */'../Order/Order'),
//     loading: Loading,
// });

// const My = Loadable({
//     loader: () => import(/* webpackChunkName: "my" */'../My/My'),
//     loading: Loading,
// });
 class Main extends Component {
        constructor(props) {
            super(props);
        }
        
        render() {
            // <Home />
            // <Order />
        return ( 
            <div>
                 <Route exact path="/home" component={Home}/>
                <Route path="/order" component={Order}/>
                <Route path="/my" component={My}/>
                <BottomBar />
            </div>
        )
    }    
}


export default withRouter(Main)