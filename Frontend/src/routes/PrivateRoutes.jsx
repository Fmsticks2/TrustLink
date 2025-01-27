import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Mock authentication (replace with actual auth logic)
const useAuth = () => {
  const user = localStorage.getItem('user'); // Assume user is stored in localStorage
  return user !== null;
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
