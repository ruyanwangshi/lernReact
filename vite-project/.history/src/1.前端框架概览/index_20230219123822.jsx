import React from 'react'
import { RouterProvider, Routes, Route } from 'react-router-dom'
import hashRouter from './router'
function Index() {
//   return <RouterProvider router={hashRouter}></RouterProvider>
  return {
    <Routes>
    <Route path='/'>
    </Route>
    </Routes>
  }
}


export default Index
