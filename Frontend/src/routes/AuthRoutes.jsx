import { Navigate, Outlet } from 'react-router-dom';

const AuthRoutes = () => {
  const user = localStorage.getItem('user');
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default AuthRoutes;
