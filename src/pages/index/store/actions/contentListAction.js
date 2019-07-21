import {LIST_DATA} from './constants'
import axios from 'axios'

export const getListData = ()=> (dispatch)=>{
    axios({
        method:'get',
        url:'/json/homelist.json'
    }).then((res) => {
        dispatch({
            type:LIST_DATA,
            obj:res.data
        
        })

    })   
}