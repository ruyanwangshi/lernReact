import React from 'react'
import { RouterProvider, Routes, Route, HashRouter } from 'react-router-dom'
import hashRouter from './router'
import Home from './home'
import Other from './other'

// function Home() {
//   return <div>测试页面</div>
// }

function Test(props) {
    console.log('中间拦截组件', props)
  return (
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="/other" element={<Other />}></Route>
    </>
  )
}

function Index() {
  //   return <RouterProvider router={hashRouter}></RouterProvider>
  return (
    <HashRouter>
      <Routes>
        <Test keeplive={['/']} router={hashRouter}></Test>
      </Routes>
    </HashRouter>
  )
}

export default Index
