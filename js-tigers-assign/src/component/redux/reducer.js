import { EDIT_DATA, FLAG, LIST_DATA } from "./actionTypes";

const initialValue={
listArrayData:[],
editData:{},
flag:false
}

export const reducer=(store=initialValue,action)=>{
switch(action.type){
   case LIST_DATA:{
    return{...store,listArrayData:action.payload}
   }
   case EDIT_DATA:{
    return{...store,editData:action.payload}
   }
   case FLAG:{
    return {...store,flag:action.payload}
   }
    default:return store;
}
}