import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
const Body = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login></Login>
    },
    {
      path:'/browse',
      element:<Browse></Browse>
    }
  ])
  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Body