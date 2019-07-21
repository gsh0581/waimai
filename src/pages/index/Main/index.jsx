import React, { Component ,Fragment} from 'react'
// import Home from './../Home/Home'
// import Order from './../Order/Order'
import My from './../My/My'
import './main.scss'
import BottomBar from './../BottomBar'
 class Main extends Component {
        constructor(props) {
            super(props);
        }
        
        render() {
            // <Home />
            // <Order />
        return ( 
            <Fragment>
                <My />
                <BottomBar />
            </Fragment>
        )
    }    
}


export default Main