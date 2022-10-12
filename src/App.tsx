import React from 'react'

import ContentRoutes from './Components/ContentRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router basename="/Site-Serra">
        <ContentRoutes />      
      </Router> 
    </div>
  )
}

export default App
