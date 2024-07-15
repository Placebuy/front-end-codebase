import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import RootLayout from './layouts/RootLayout';
import Home from './pages/HomeEnv/Index';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import Forgot from './pages/Auth/Forgot';
import Reset from './pages/Auth/Reset';
import Marketplace from './pages/Auth/MarketPlace';
import Newpass from './pages/Auth/Newpass';
import MoreDetails from './pages/Auth/MoreDetails';
import OTP from './pages/Auth/OTP';
import NewpassOTP from './pages/Auth/NewpassOTP';
import ErrorMess from './pages/ErrorMess';

// VENDOR AUTH IMPORT
import VendorSignup from './pages/Auth/VendorAuth/Signup';

// FOR LOADER
import Loader from './component/Loader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorMess />}>
      <Route index element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="otp" element={<OTP />} />
      <Route path="login" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="reset" element={<Reset />} />
      <Route path="marketplace" element={<Marketplace />} />
      <Route path="newpass" element={<Newpass />} />
      <Route path="moredetails" element={<MoreDetails />} />
      <Route path="newpassotp" element={<NewpassOTP />} />

      {/* VENDOR AUTH */}
      <Route path="vendorsignup" element={<VendorSignup />} />
    </Route>
  )
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Simulate route changes or data loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);  // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && <RouterProvider router={router} />}
    </>
  );
}

export default App;
