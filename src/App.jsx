import React from 'react'
// import Home from './Pages/Home/Home.jsx'

// import react router dom 
import { Routes , Route } from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App