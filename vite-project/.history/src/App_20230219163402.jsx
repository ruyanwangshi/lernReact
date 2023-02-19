import { useState } from 'react'
import StoreContext from './utils/context'
import Home from './1.前端框架概览'
import './App.css'

function App() {

  return (
    <StoreContext.Provider>
        <Home></Home>
    </StoreContext.Provider>
  )
}

export default App
