import React from 'react'
import { RouterProvider, useNavigate } from 'react-router-dom'
import hashRouter from './router'
const routerLink = useNavigate()
function Index() {

    
    function click(path) {
        routerLink(path)
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
