import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Form } from '../pages/Form'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/form' element={<Form/>}/>
        </Routes>
    </div>
  )
}
