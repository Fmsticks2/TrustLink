import { useState, useEffect } from "react";
import { CgGoogle } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { useAccount } from "wagmi";
import { modal } from '../../context/index';
import { wagmiAdapter, projectId } from "../../../config/index";

function Signup({ onSignIn }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { isConnected } = useAccount();

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


  const handleConnectWallet = () => {
    modal.open();
  };

  // Redirect to dashboard if wallet is connected
  useEffect(() => {
    if (isConnected) {
      navigate('/client/home');
    }
  }, [isConnected, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg py-10 sm:px-24 px-8 sm:w-[600px] w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Get your free account</h1>
     
        {/* OAuth Buttons */}
        <div className="space-y-4">
          <div>
            <div>
              <h3>Connect your wallet</h3>
              <button
                onClick={handleConnectWallet}
                className="w-full flex items-center justify-center space-x-3 border border-black bg-white text-black py-2 rounded-full hover:bg-gray-800 hover:text-white transition mt-2 mb-2"
              >
                Connect Wallet
              </button>
            </div>
            { isConnected && (
              <div className="text-center mt-4">
                <p>Network selection button</p>
                <w3m-network-button />
              </div>
            )}
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
    </div>
  );
}

export default Signup;
