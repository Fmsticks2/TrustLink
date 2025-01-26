import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import FreelancerHome from '../components/Freelancer/FreelancerHome';
import ClientHome from '../components/Client/homepage/ClientHomepage.jsx';
import Createjob from '../components/Client/createjob/Createjob.jsx';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoutes';
import FreeLancerProfile from '../components/Freelancer/FreeLancerProfile.jsx';
import Onboarding from '../components/Freelancer/Onboarding'

const AppRoutes = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const signedIn = localStorage.getItem('isSignedIn') === 'true';
    setIsSignedIn(signedIn);
  }, []);

  const handleSignIn = () => {
    setIsSignedIn(true);
    localStorage.setItem('isSignedIn', 'true');
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    localStorage.removeItem('isSignedIn');
  };

  return (
    <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login isSignedIn={handleSignIn} />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes */}
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/freelancer/home" element={<FreelancerHome />} />
          <Route path="/freelancer/profile" element={<FreeLancerProfile />} />
          <Route path="/freelancer/onboarding" element={<Onboarding />} />
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/createjob" element={<Createjob />} />
        {/* </Route> */}

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
