import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Authentication from './components/Authentication/Authentication'
import Landingpage from './components/Landingpage'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication/>}></Route>
          <Route path='/landing' element={<Landingpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App