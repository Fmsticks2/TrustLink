import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import UserTypeSelection from '../components/Auth/UserTypeSelection';
import FreelancerHome from '../components/Freelancer/FreelancerHome';
import ClientHome from '../components/Client/homepage/ClientHomepage.jsx';
import Createjob from '../components/Client/createjob/Createjob.jsx';
import Postedjob from '../components/Client/createjob/PostedJob.jsx';
import ViewProposal from '../components/Client/createjob/ViewProposal.jsx';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoutes';
import FreeLancerProfile from '../components/Freelancer/FreeLancerProfile.jsx';
import Onboarding from '../components/Freelancer/Onboarding';
import Invite from '../components/Client/createjob/Invite.jsx'

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
        <Route path="/user-type" element={<UserTypeSelection />} />
        
        {/* Protected Routes */}
        {/* <Route element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/freelancer/home" element={<FreelancerHome />} />
          <Route path="/freelancer/profile" element={<FreeLancerProfile />} />
          <Route path="/freelancer/onboarding" element={<Onboarding />} />
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/createjob" element={<Createjob />} />
          <Route path="/client/postedjob" element={<Postedjob />} />
          <Route path="/client/viewproposal" element={<ViewProposal />} />
          <Route path="/client/invite" element={<Invite />} />


        {/* </Route> */}

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};

export default AppRoutes;
