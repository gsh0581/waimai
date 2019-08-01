import {GET_LIST_DATA ,CLEAR_CAR,LEFT_CLICK,ADD_SELECT_ITEM,MINUS_SELECT_ITEM,SHOW_CHOOSE_CONTENT} from './constant'
import axios from 'axios'
export const itemClick = (obj) =>  (dispatch)=>{
    dispatch({
        type:LEFT_CLICK,
        obj
    })
}
export const getListData = () => async (dispatch)=>{
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
export const addSelectItem = (obj) => {
    return {
        type:ADD_SELECT_ITEM,
        obj
    }
}

export const minusSelectItem = (obj) =>  {
    return {
        type:MINUS_SELECT_ITEM,
        obj
    }
}
export const showChoose = (obj) =>  {
    return {
        type:SHOW_CHOOSE_CONTENT,
        obj
    }
}
export const clearCar = (obj) =>{
    return {
        type: CLEAR_CAR,
        obj: obj
    }
}