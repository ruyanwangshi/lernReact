import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import hashrouter from './router'
import './App.css'

function App() {

  return (
    <RouterProvider router={hashrouter}></RouterProvider>
  )
}

export default App
