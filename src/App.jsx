// import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import Home from './pages/HomeEnv/Home'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import OTP from './pages/Auth/OTP';
import Forgot from './pages/Auth/Forgot'
import Reset from './pages/Auth/Reset'
import Marketplace from './pages/Auth/MarketPlace'
import Newpass from './pages/Auth/Newpass'
import MoreDetails from './pages/Auth/MoreDetails'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="otp" element={<OTP />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="reset" element={<Reset />} />
      <Route path="marketplace" element={<Marketplace />} />
      <Route path="newpass" element={<Newpass />} />
      <Route path="moredetails" element={<MoreDetails />} />
    </Route>

  )

)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
