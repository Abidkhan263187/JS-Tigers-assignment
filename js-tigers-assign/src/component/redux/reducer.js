import { EDIT_DATA, LIST_DATA } from "./actionTypes";

const initialValue={
listArrayData:[],
editData:{}
}

export const reducer=(store=initialValue,action)=>{
switch(action.type){
   case LIST_DATA:{
    return{...store,listArrayData:action.payload}
   }
   case EDIT_DATA:{
    return{...store,editData:action.payload}
   }
    default:return store;
}
}