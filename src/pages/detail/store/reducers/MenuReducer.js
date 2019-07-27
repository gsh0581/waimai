import { GET_LIST_DATA } from "../actions/constant";
const initState = {
    listData:{}
}
const getListData =(state,action)=>({
    ...state,
    listData:action.obj.data
})

 const menuReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_LIST_DATA:
           return  getListData(state,action)
        default:
            return state
    }
}
export default menuReducer