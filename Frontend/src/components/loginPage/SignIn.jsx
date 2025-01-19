import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { EnvelopeIcon, LockOpenIcon } from "@heroicons/react/20/solid";

const SignIn = ({onSignIn}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    // Send email to the backend for authentication
    console.log("Email Sign-In:", email);
    onSignIn();
    navigate("/clientHomepage");
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Log in to your account</h1>

          <form onSubmit={handleEmailSignIn} className="space-y-4 flex flex-col gap-3">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-600/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent placeholder-slate-400"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockOpenIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-600/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-transparent placeholder-slate-400"
                />
              </div>
            </div>
          
            <button
              type="submit"
              className="w-full bg-[#FF4C4A] text-white py-2 rounded-full hover:bg-red-600 transition"
            >Login
            </button>
          </form>

          <div className="flex gap-2 items-center justify-center my-6 flex-wrap">
            <span>Don't have an account? </span>
            <Link to={'/login'} className="text-[#FF4C4A]">
              Sign up
            </Link> 
          </div>
      </div>
    </div>  )
}

export default SignIn