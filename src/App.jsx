import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import SignUp from './components/SignUp'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage'
import Buttons from './components/Buttons'
import Secframe from './components/Secframe'

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
      element: <> <Navbar/>
      <HomePage/>
      <Secframe heading='Unlock your coding potential with our online courses.' content='Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'/>
      <Secframe heading='Start coding in seconds.' content='Go ahead, give it a try. Our hands-on learning environment means you all be writing real code from your very first lesson.'/>
      </>
    },
])
  

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
