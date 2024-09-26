import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><LoginPage/></>
    }, 
    {
      path:"/signup",
      element: <> <Navbar/><SignUp/></>
    },
    {
      path:"/home",
      element: <> <Navbar/><HomePage/></>
    },
])
  

  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router = {router}/>
      
    </>
  )
}

export default App
