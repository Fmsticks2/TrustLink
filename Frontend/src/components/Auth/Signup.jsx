import { useState } from "react";
import { CgGoogle } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";

function Signup({ onSignIn }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = (e) => {
    e.preventDefault();
    // Send email to the backend for authentication
    console.log("Email Sign-In:", email);
    // onSignIn();
    navigate('/freelancer/onboarding')
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
      <div className="bg-white shadow-lg rounded-lg py-10 sm:px-24 px-8 sm:w-[600px] w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Get your free account</h1>
     
        {/* OAuth Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center space-x-3  bg-blue-700 text-white py-2 rounded-full hover:bg-blue-600 transition"
          >
            <CgGoogle className="text-xl" />
            <span>Continue with gmail</span>
          </button>
          <button
            onClick={handleAppleSignIn}
            className="w-full flex items-center justify-center space-x-3 border border-black bg-white text-black py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
          >
            <FaApple className="text-xl" />
            <span>Connect Wallet</span>
          </button>
        </div>

        {/* Separator */}
        <div className="my-6 border-t border-gray-300 relative">
          <span className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-600 font-bold">
            or
          </span>
        </div>


          {/* Email Sign-In */}
          <form onSubmit={handleEmailSignIn} className="space-y-4 ">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder='Email address'
              />
            </div>
          
            <button
              type="submit"
              className="w-full bg-[#FF4C4A] text-white py-2 rounded-full hover:bg-red-600 transition"
            >Sign in with Email
            </button>
          </form>

          <div className="flex gap-2 items-center justify-center mt-6 flex-wrap">
            <span>Already have an account? </span>
            <Link to={'/login'} className="text-[#FF4C4A]">
              Log in
            </Link> 
          </div>
      </div>
    </div>
  );
}

export default Signup;
