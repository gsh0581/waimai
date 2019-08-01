import { GET_LIST_DATA ,CLEAR_CAR,LEFT_CLICK,ADD_SELECT_ITEM,MINUS_SELECT_ITEM,SHOW_CHOOSE_CONTENT} from "../actions/constant";
const initState = {
    listData:{},
    currentLeftIndex:0,
    showChooseContent:false
}
const itemClick = (state,action)=>({
    ...state,
    currentLeftIndex:action.obj.currentLeftIndex
})
const getListData =(state,action)=>({
    ...state,
    listData:action.obj.data
})
const addListItem =(state,action)=>({
   ...state,
    listData : dealWithSelectItem(state,action,ADD_SELECT_ITEM)
})

const minusListItem =(state,action)=>({
    ...state,
    listData : dealWithSelectItem(state,action,MINUS_SELECT_ITEM)
})
const dealWithSelectItem =(state,action,type)=>{
    let listData = state.listData
    // 找到外层左边的list列表
    let list = listData.food_spu_tags || [];
    // 对当前点击的加一 或减一
    let currentItem = list[action.outIndex || state.currentLeftIndex];
    if(type === ADD_SELECT_ITEM){
        
        currentItem.spus[action.obj.index].chooseCount++
    }
    else{
        currentItem.spus[action.obj.index].chooseCount--

    }
    let _listData=JSON.parse(JSON.stringify(listData))
    return _listData
}
const showChoose = (state,action)=>({
    ...state,
    showChooseContent:action.obj.flag
})
const clearCar = (state) =>{

    let listData = state.listData;
    // 找到外层，左边list列表
    let list = listData.food_spu_tags || [];

    for (let i = 0 ; i< list.length ; i++) {
        let spus = list[i].spus || [];
        for (let j = 0 ; j < spus.length ; j++) {
            spus[j].chooseCount = 0;
  
        }
    }
    return {...state, listData: JSON.parse(JSON.stringify(listData)) };

}
 

 const menuReducer = (state=initState, action) => {
    switch (action.type) {
        case GET_LIST_DATA:
           return  getListData(state,action)
        case LEFT_CLICK:
            return  itemClick(state,action)
       case ADD_SELECT_ITEM:
            return  addListItem(state,action)
        case MINUS_SELECT_ITEM:
            return  minusListItem(state,action)
       case SHOW_CHOOSE_CONTENT:
       return  showChoose(state,action)
       case CLEAR_CAR: return clearCar(state, action);
        default:
            return state
    }
}
export default menuReducer