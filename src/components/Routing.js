import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComp from './NavbarComp'
import DetailsComp from './DetailsComp'

import Add from './Add'
import StuComp from './StuComp'
import Student from './Student'

const Routing = () => {
  return (
    
    <div >
        <BrowserRouter>
        <Routes>
            <Route path='/NavbarComp' element={<NavbarComp></NavbarComp>}></Route>
            <Route path='/Details/:id' element={<DetailsComp></DetailsComp>}></Route>
            <Route path='/Add' element={<Add></Add>}></Route>
            <Route path='/' element={<StuComp></StuComp>}></Route>
            <Route path='/Student/:id' element={<Student></Student>}></Route>
            
            

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Routing