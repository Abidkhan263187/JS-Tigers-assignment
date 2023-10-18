import { EDIT_DATA, LIST_DATA } from "./actionTypes"

export const uploadFormListData=(payload)=>{
return{
    type:LIST_DATA,
    payload
}
}

export const editObjData=(payload)=>{
    return{
        type:EDIT_DATA,
        payload
    }
}