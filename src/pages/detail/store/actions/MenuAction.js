import {GET_LIST_DATA ,LEFT_CLICK} from './constant'
import axios from 'axios'
export const itemClick = (obj) =>  (dispatch)=>{
    dispatch({
        type:LEFT_CLICK,
        obj
    })
}
export const getListData = () => async (dispatch,)=>{
    // let url = '/json/list.json'
    // if(obj.filterData || getState().contentListReducer.filterData){
    //     url = '/json/listparams.json'
    // }
    let res = await axios({
        url :'/json/food.json',
        method:'get'
    })
    dispatch({
        type:GET_LIST_DATA,
        obj:res.data
    })

}