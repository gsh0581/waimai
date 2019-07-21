import {HEAD_DATA} from './constants'
import axios from 'axios'

export const getHeadData = obj=> (dispatch,getState)=>{
    axios({
        method:'get',
        url:'/json/head.json'
    }).then((res) => {
        this.dispatch({
            type:HEAD_DATA,
            obj:res.data.primary_filter
        
        })

    })   
}