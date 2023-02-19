import React from 'react'
import { RouterProvider } from 'react-router-dom'
import hashRouter from './router'

function Index() {
  return (
    <>
      <div>
        <div>home</div>
        <div>other</div>
      </div>
      <RouterProvider router={hashRouter}></RouterProvider>
    </>
  )
}


export default Index
