import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Layout from './components/Shared/Layout';
import { OnboardingProvider } from './context/OnboardingContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <OnboardingProvider>
        <Layout>
          <Toaster
            toastOptions={{
              // Define default options
              duration: 4000,
              style: {
                background: '#333',
                color: '#fff',
                fontSize: '11px', // Reduce font size
                width: '500px', 
              },
              // Define custom options for different types of toasts
              success: {
                duration: 4000,
                style: {
                  background: 'white',
                  color: 'black',
                  fontSize: '11px', 
                  width: '500px', 
                },
                iconTheme: {
                  primary: '#fff',
                  secondary: 'green',
                  height: '20px', 
                  width: '20px',                 },
              },
              error: {
                duration: 5000,
                style: {
                  background: 'red',
                  color: '#fff',
                  fontSize: '14px', 
                  width: '250px', 
                },
                iconTheme: {
                  primary: '#fff',
                  secondary: 'red',
                  height: '30px', 
                  width: '30px', 
                },
              },
            }}
          />
          <AppRoutes />
        </Layout>
      </OnboardingProvider>
    </BrowserRouter>
  );
}

export default App;