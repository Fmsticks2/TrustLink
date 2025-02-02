import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar'

const Layout = ({ children }) => {
  const location = useLocation();
  const authRoutes = ['/login', '/signup', '/freelancer/onboarding'];
  const isAuthPage = authRoutes.includes(location.pathname);
  

  return (
    <div className="min-h-screen">
      {isAuthPage && <TopBar />}
      {!isAuthPage && <Navbar />}
      <main className="min-h-[calc(100vh-64px)] ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
