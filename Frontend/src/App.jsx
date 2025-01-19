import './App.css';
import Login from './components/loginPage/Login';
import ClientHomepage from './components/loginPage/clientHomepage';
import Footer from './components/Navigation/Footer';
import Header from './components/Navigation/Header';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import AppRoutes from './AppRoutes';
import SignIn from './components/loginPage/SignIn'
import Projects from './pages/Projects'
import Profile from './pages/Profile'
import Jobs from './pages/Jobs'
import Messages from './pages/Messages';


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
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn}/>} />
          <Route path="/clientHomepage" element={<ClientHomepage onSignOut={handleSignOut}  />} />
          <Route path="*" element={<Navigate to="/login" />} />

          {/* Other routes */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />   
          <Route path="/projects" element={<Projects />} /> 
          {/* <Route path="/signin" element={<SignIn />} />    */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
