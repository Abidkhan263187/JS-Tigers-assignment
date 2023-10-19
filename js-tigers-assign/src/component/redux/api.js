import axios from "axios"
import {update, uploadFormListData } from "./action"


export const submitForm=(formData)=>async(dispatc)=>{
    try {
        await axios.post(`https://jstiger.onrender.com/form`,formData).then(({data})=>{
        //   console.log(data)
          window.location.href="/"
        })
        // console.log('Form data submitted:', formData);
      } catch (error) {
        console.log(error);
      }
}

export const getListData = (pgNo) => async (dispatch) => {
    try {
        await axios.get(`https://jstiger.onrender.com?page=${pgNo}&limit=3`).then(({ data }) => {
            // console.log(data.formList)
            dispatch(uploadFormListData(data.formList))
        })
    } catch (error) {
        console.log(error)
    }
}


export const deleteInfo = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://jstiger.onrender.com/form/delete/${id}`).then(({ data }) => {
            dispatch(update(true))
        })
    } catch (error) {
        console.log(error)
    }
}

export  const editInfo=(obj)=>async(dispatch)=>{
    try {
        await axios.patch(`https://jstiger.onrender.com/form/edit/${obj._id}`,obj).then(({data})=>{
            // window.location.href="/"
            dispatch(update(true))  
        })
    } catch (error) {
        console.log(error)
    }

}