import React from 'react';
import Header from '../Navigation/Header';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();
  const authRoutes = ['/login', '/signup'];
  const isAuthPage = authRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* {!isAuthPage && <Header />} */}
      <Navbar />
      <main className="min-h-[calc(100vh-64px)]  my-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
