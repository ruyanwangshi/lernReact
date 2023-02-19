import React from 'react'
import { Hash } from 'react-router-dom'
import { RouterProvider, Routes, Route } from 'react-router-dom'
import hashRouter from './router'
function Index() {
//   return <RouterProvider router={hashRouter}></RouterProvider>
  return {
    <Routes>
  <Route path="/" element={<Dashboard />}>
    <Route
      path="messages"
      element={<DashboardMessages />}
    />
    <Route path="tasks" element={<DashboardTasks />} />
  </Route>
  <Route path="about" element={<AboutPage />} />
</Routes>
  }
}


export default Index
