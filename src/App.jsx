import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Landing from './pages/landing/landing'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing/>} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
