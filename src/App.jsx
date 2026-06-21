import React from 'react'
import Home from './Pages/Home/Home'

// import react router dom 
import { Routes , Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App