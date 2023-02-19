import React from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom'
import hashRouter from './router'
function Index() {
  return <RouterProvider router={hashRouter}></RouterProvider>
}


export default Index
