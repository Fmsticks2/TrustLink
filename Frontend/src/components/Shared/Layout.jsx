import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import TopBar from './TopBar';
import Dashboard_Nav from './Dashboard_Nav';

const Layout = ({ children }) => {
  const location = useLocation();
  const topBarRoutes = ['/login', '/signup', '/freelancer/onboarding'];
  const dashboardNavRoutes = ['/dashboard'];
  const isTopBarPage = topBarRoutes.includes(location.pathname);
  const isDashboardNavPage = dashboardNavRoutes.includes(location.pathname);
  const isNavbarPage = !isTopBarPage && !isDashboardNavPage;

  return (
    <div className="min-h-screen">
      {isTopBarPage && <TopBar />}
      {isNavbarPage && <Navbar />}
      {isDashboardNavPage && <Dashboard_Nav />}
      <main className="min-h-[calc(100vh-64px)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
