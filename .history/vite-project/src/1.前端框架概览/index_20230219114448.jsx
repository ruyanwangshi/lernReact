import React from 'react'
import { RouterProvider } from 'react-router-dom'
import hashRouter from './router'

function Index() {
    function click() {

    }
  return (
    <>
      <div>
        <div onClick={() => click('/home')}>home</div>
        <div onClick={() => click('/other')}>other</div>
      </div>
      <RouterProvider router={hashRouter}></RouterProvider>
    </>
  )
}


export default Index
