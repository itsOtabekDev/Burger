import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/shop'


const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/contact' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>

     </Routes>
    </div>
  )
}

export default App