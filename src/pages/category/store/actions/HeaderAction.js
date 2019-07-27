import { CHANGE_TAB ,GET_FILTER_DATA,CHANGE_FILTER} from './constants'
import axios from 'axios'
export const changeTab = (obj) => (dispatch) => {
    dispatch({
        type:CHANGE_TAB,
        obj
    })
}
export const getFilterData = () => async (dispatch)=>{
    let res = await axios({
        url:'/json/filter.json',
        method:'get',
    })
    dispatch({
        type:GET_FILTER_DATA,
        obj:res.data
    })
}
export const changeFilter = (obj)=> (dispatch) =>{
    dispatch({
        type:CHANGE_FILTER,
        obj
    })
    dispatch({
        type:CHANGE_TAB,
        obj:{
            closePanel:true
        }
    })
}