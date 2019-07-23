import { CHANGE_TAB ,GET_FILTER_DATA} from './constants'
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