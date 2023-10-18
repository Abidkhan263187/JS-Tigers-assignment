import axios from "axios"
import { editObjData, uploadFormListData } from "./action"

export const getListData = () => async (dispatch) => {
    try {
        await axios.get('http://localhost:8000').then(({ data }) => {
            // console.log(data.formList)
            dispatch(uploadFormListData(data.formList))
        })
    } catch (error) {
        console.log(error)
    }
}


export const deleteInfo = (id) => async () => {
    console.log(id)
    try {
        await axios.delete(`http://localhost:8000/form/delete/${id}`).then(({ data }) => {
            console.log(data)
        })
        getListData()
    } catch (error) {
        console.log(error)
    }
}

export  const editInfo=(obj)=>async(dispatch)=>{
    console.log(obj._id)
    try {
        await axios.patch(`http://localhost:8000/form/edit/${obj._id}`,obj).then(({data})=>{
            console.log(data)
        })
        
        getListData()
    } catch (error) {
        console.log(error)
    }

}