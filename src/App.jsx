import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './pages/landing/landing'
import AboutUs from './pages/About/AboutUs'
import Cart from './pages/cart/Cart'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing/>} />
        <Route path="/about" element ={<AboutUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
	  <Route />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
