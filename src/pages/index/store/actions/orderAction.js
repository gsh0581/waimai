import {ORDER_DATA} from './constants'
import axios from 'axios'

export const getOrderData = (page)=> (dispatch)=>{
    axios({
        method:'get',
        url:'./json/orders.json'
    }).then((res) => {
        dispatch({
            type:ORDER_DATA,
            obj:res.data,
            currentPage:page
        
        })

    })   
}