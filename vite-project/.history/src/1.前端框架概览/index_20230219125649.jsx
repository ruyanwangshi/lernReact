import React from 'react'
import { RouterProvider, Routes, Route as BaseRoute, HashRouter } from 'react-router-dom'
import hashRouter from './router'
import Home from './home'
import Other from './other'

// function Home() {
//   return <div>测试页面</div>
// }

function Route(props) {
  console.log('中间拦截组件', props)
  return <></>
}

function Index() {
  //   return <RouterProvider router={hashRouter}></RouterProvider>
  return (
    <HashRouter>
      <Routes>
        <BaseRoute path="/" element={<Home />}></BaseRoute>
        <BaseRoute path="/other" element={<Other />}></BaseRoute>
      </Routes>
    </HashRouter>
  )
}

export default Index
