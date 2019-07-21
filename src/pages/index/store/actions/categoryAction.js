import {HEAD_DATA} from './constants'
import axios from 'axios'

export const getHeadData = ()=> (dispatch)=>{
    axios({
        method:'get',
        url:'/json/head.json'
    }).then((res) => {
        dispatch({
            type:HEAD_DATA,
            obj:res.data.primary_filter
        
        })

    })   
}