import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Authentication from './components/Authentication/Authentication'
import Landingpage from './components/Landingpage'
import Employeepage from './components/Employees/Employeepage'
import Adminpage from './components/Admin/Adminpage'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Authentication/>}></Route>
          <Route path='/' element={<Landingpage/>}></Route>
          <Route path='/Employeepage' element={<Employeepage/>}></Route>
          <Route path='/adminpage' element={<Adminpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App