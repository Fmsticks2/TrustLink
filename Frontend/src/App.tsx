import './index.css';
import { HashRouter as Router, useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Shared/Layout';
import { OnboardingProvider } from './context/OnboardingContext';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { wagmiAdapter, projectId } from "../config";
import { createAppKit } from "@reown/appkit";
import { mainnet, arbitrum } from "@reown/appkit/networks";

import ContextProvider from './context';

if (!projectId) {
  throw new Error("REACT_PUBLIC_PROJECT_ID is not defined.");
}

export const modal = createAppKit({
  adapters: [wagmiAdapter] ,
  projectId,
  networks: [mainnet, arbitrum],
  defaultNetwork: mainnet,
  features: {
    analytics: true,
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'farcaster'],
    emailShowWallets: true,
  },
  themeMode: "light",
});


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <ContextProvider>
      <Router>
        <OnboardingProvider>
          <Layout>
            <ScrollToTop />
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                // Define default options
                duration: 3000,
                style: {
                  background: '#333',
                  color: '#fff',
                  fontSize: '14px', // Reduce font size
                  width: '250px', // Reduce width size
                },
                // Define custom options for different types of toasts
                success: {
                  duration: 3000,
                  style: {
                    background: 'black',
                    color: '#fff',
                    fontSize: '14px', // Reduce font size
                    width: '250px', // Reduce width size
                  },
                  iconTheme: {
                    primary: '#fff',
                    secondary: 'green',
                    height: '30px', // Increase icon size
                    width: '30px', // Increase icon size
                  },
                },
                error: {
                  duration: 2000,
                  style: {
                    background: 'black',
                    color: '#fff',
                    fontSize: '14px', // Reduce font size
                    width: '250px', // Reduce width size
                  },
                  iconTheme: {
                    primary: '#fff',
                    secondary: 'red',
                    height: '30px', // Increase icon size
                    width: '30px', // Increase icon size
                  },
                },
              }}
            />
            <AppRoutes />
          </Layout>
        </OnboardingProvider>
      </Router>
    </ContextProvider>
  );
}

export default App;