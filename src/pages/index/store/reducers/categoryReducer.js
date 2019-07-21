import { HEAD_DATA } from "./../actions/constants";

const initState = {
    items:[]
}

const getCategory = (state,action) => ({
     ...state,items:action.obj.data.primary_filter
})

const categoryReducer = (state=initState,action)=>{
    switch(action.type){
        case HEAD_DATA: return getCategory(state,action);
        default : return state;
    }
}
export default categoryReducer