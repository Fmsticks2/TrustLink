import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { EnvelopeIcon, LockOpenIcon } from "@heroicons/react/20/solid";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('email', formData.email);
    // Add login logic here
    navigate('/client/home');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Log in to your account</h1>

          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-3">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
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
            <Link to={'/signup'} className="text-[#FF4C4A]">
              Sign up
            </Link> 
          </div>
      </div>
    </div>  
  )
}

export default Login