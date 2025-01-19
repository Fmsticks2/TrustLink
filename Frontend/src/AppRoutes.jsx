import React from 'react'
import { Route } from 'react-router-dom'
import SignIn from './components/loginPage/SignIn'
import Projects from './pages/Projects'
import Profile from './pages/Profile'
import Jobs from './pages/Jobs'
import Messages from './pages/Messages'


const AppRoutes = () => {

  return (
    <>
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/profile" element={<Profile />} />   
      <Route path="/projects" element={<Projects />} /> 
      <Route path="/signin" element={<SignIn />} />    
    </>
  )
}

export default AppRoutes