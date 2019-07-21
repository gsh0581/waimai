import {ADD_TODO,CHANGE_TAB} from './constants'
export const addTodo = (obj)=>{
    return {
        type:ADD_TODO,
        obj
    }
}
export const changeTab = (obj)=>{
    return {
        type:CHANGE_TAB,
        obj
    }
}