import React from 'react'
import { Hash } from 'react-router-dom'
import { RouterProvider, Routes, Route, HashRouter } from 'react-router-dom'
import hashRouter from './router'

function Home() {
  return <div>测试页面</div>
}

function Index() {
  //   return <RouterProvider router={hashRouter}></RouterProvider>
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default Index
