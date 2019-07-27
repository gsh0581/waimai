import { GET_LIST_DATA } from "./constants";
import Axios from "axios";

export const  getListData = (obj) =>  async (dispatch,getState)=>{

    let url = '/json/homelist.json';
    if(obj.filterData || getState().contentListReducer.filterData){
        url = '/json/listparams.json'
    }
    let res = await Axios({
        url,
        method:'get'
    })
    dispatch({
        type:GET_LIST_DATA,
        filterData:obj.filterData,
        toFirstPage:obj.toFirstPage,
        obj:res.data
    })
}