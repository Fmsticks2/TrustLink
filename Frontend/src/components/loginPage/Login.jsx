import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onSignIn }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    // Send email to the backend for authentication
    console.log("Email Sign-In:", email);
    onSignIn();
    navigate("/clientHomepage");
  };

  const handleGoogleSignIn = () => {
    // Trigger Google OAuth flow
    console.log("Google Sign-In Triggered");
    onSignIn();
    navigate("/clientHomepage");  };

  const handleAppleSignIn = () => {
    // Trigger Apple ID OAuth flow
    console.log("Apple Sign-In Triggered");
    onSignIn();
    navigate("/clientHomepage");  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

     
        {/* OAuth Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center space-x-3  bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with gmail</span>
          </button>
          <button
            onClick={handleAppleSignIn}
            className="w-full flex items-center justify-center space-x-3 border border-black bg-white text-black py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            <span>Continue with Apple ID</span>
          </button>
        </div>

   {/* Separator */}
   <div className="my-6 border-t border-gray-300 relative">
          <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-600">
            OR
          </span>
        </div>


         {/* Email Sign-In */}
         <form onSubmit={handleEmailSignIn} className="space-y-4 ">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition"
          >Sign in with Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
