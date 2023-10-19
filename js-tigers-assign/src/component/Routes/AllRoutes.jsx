import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Form } from '../pages/Form'
import { Login } from '../pages/Login'

export const AllRoutes = () => {
  const userName=JSON.parse(sessionStorage.getItem('userName'))
  return (
    <div>
        <Routes>
            <Route path='/' element={userName?<Dashboard/>:<Login/>}/>
            <Route path='/form' element={userName?<Form/>:<Login/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}
