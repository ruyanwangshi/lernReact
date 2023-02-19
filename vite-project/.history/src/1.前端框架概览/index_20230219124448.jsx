import React from 'react'
import { Hash } from 'react-router-dom'
import { RouterProvider, Routes, Route, Hash } from 'react-router-dom'
import hashRouter from './router'

function Home() {
    return (
        <div>测试页面</div>
    )
}

function Index() {
//   return <RouterProvider router={hashRouter}></RouterProvider>
  return (
    <Hash>
        <Route path='/' element={<Home />}>
            
        </Route>
    </Hash>
  )
}


export default Index
