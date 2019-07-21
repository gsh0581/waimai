import React, { Component ,Fragment} from 'react'
import Home from './../Home/Home'
import './main.scss'
import BottomBar from './../BottomBar'
 class Main extends Component {
        constructor(props) {
            super(props);
        }
        
        render() {
        return ( 
            <Fragment>
                <Home />
                <BottomBar />
            </Fragment>
        )
    }    
}


export default Main