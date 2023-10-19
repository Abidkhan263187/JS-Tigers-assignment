import axios from "axios"
import {update, uploadFormListData } from "./action"


export const submitForm=(formData)=>async(dispatc)=>{
    try {
        await axios.post(`http://localhost:8000/form`,formData).then(({data})=>{
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
        await axios.get(`http://localhost:8000?page=${pgNo}&limit=3`).then(({ data }) => {
            // console.log(data.formList)
            dispatch(uploadFormListData(data.formList))
        })
    } catch (error) {
        console.log(error)
    }
}


export const deleteInfo = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:8000/form/delete/${id}`).then(({ data }) => {
            dispatch(update(true))
        })
    } catch (error) {
        console.log(error)
    }
}

export  const editInfo=(obj)=>async(dispatch)=>{
    try {
        await axios.patch(`http://localhost:8000/form/edit/${obj._id}`,obj).then(({data})=>{
            // window.location.href="/"
            dispatch(update(true))  
        })
    } catch (error) {
        console.log(error)
    }

}