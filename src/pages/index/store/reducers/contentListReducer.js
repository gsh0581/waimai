import { LIST_DATA } from "./../actions/constants";

const initState = {
    list:[]
}

const getListData = (state,action) => ({
     ...state,list:action.obj.data.poilist
})

const contentListReducer = (state=initState,action)=>{
    switch(action.type){
        case LIST_DATA: return getListData(state,action);
        default : return state;
    }
}
export default contentListReducer