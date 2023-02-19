import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import hashrouter from './1.前端框架概览/router'
import './App.css'

function App() {

  return (
    <RouterProvider router={hashrouter}></RouterProvider>
  )
}

export default App
