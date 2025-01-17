import './App.css';
import Login from './components/loginPage/Login';
import ClientHomepage from './components/loginPage/clientHomepage';
import Footer from './components/Navigation/Footer';
import Header from './components/Navigation/Header';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
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
    <div className="App">
      <Router>
        {isSignedIn && <Header />}
        <Routes>
          <Route path="/login" element={<Login onSignIn={handleSignIn}/>} />
          <Route path="/clientHomepage" element={<ClientHomepage onSignOut={handleSignOut}  />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
