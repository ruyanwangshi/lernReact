import React from 'react'
import { Hash } from 'react-router-dom'
import { RouterProvider, Routes, Route } from 'react-router-dom'
import hashRouter from './router'

function Home() {
    return (
        <div>测试页面</div>
    )
}

function Index() {
//   return <RouterProvider router={hashRouter}></RouterProvider>
  return (
    <Routes hash>
        <Route path='/' element={<Home></Home>}>
            
        </Route>
    </Routes>
  )
}


export default Index
