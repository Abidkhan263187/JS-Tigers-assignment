import axios from "axios"
import {uploadFormListData } from "./action"

export const getListData = (pgNo) => async (dispatch) => {
    try {
        await axios.get(`http://localhost:8000?page=${pgNo}&limit=3`).then(({ data }) => {
            // console.log(data.formList)
            dispatch(uploadFormListData(data.formList))
         
        })
    } catch (error) {
        console.log(error)
    }
}


export const deleteInfo = (id) => async (dispatch) => {
    console.log(id)
    try {
        await axios.delete(`http://localhost:8000/form/delete/${id}`).then(({ data }) => {
            console.log(data)
        })
     
       
    } catch (error) {
        console.log(error)
    }
}

export  const editInfo=(obj)=>async(dispatch)=>{
   
    try {
        await axios.patch(`http://localhost:8000/form/edit/${obj._id}`,obj).then(({data})=>{
          
        })
        
        
    } catch (error) {
        console.log(error)
    }

}