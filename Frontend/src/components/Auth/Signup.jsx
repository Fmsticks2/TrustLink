import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAccount, useSignMessage } from "wagmi";
import { modal } from '../../context/index';
import { wagmiAdapter, projectId } from "../../../config/index";
import { getNonce, verifySignature } from "../../services/api";
import { toast } from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const handleConnectWallet = async () => {
    try {
      if (!isConnected) {
        await modal.open();
        return;
      }

      // Get nonce from backend
      const { nonce } = await getNonce(address);

      // Sign the nonce message
      const signature = await signMessageAsync({
        message: nonce,
      });

      // Verify signature and get JWT token
      const { token } = await verifySignature(address, signature);

      // Store token
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ address }));

      toast.success('Successfully connected wallet!');
      navigate('/freelancer/onboarding');
    } catch (error) {
      console.error('Wallet connection error:', error);
      toast.error(error.message || 'Failed to connect wallet');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg py-10 sm:px-24 px-8 sm:w-[600px] w-full">
        <h1 className="text-2xl font-semibold mb-6 text-center">Connect your wallet</h1>
        <div className="space-y-4">
          <button
            onClick={handleConnectWallet}
            className="w-full bg-[#FF4C4A] text-white py-2 rounded-full hover:bg-red-600 transition"
          >
            {isConnected ? 'Continue with Wallet' : 'Connect Wallet'}
          </button>
          {isConnected && (
            <div className="text-center mt-4">
              <w3m-network-button />
            </div>
          )}
        </div>
        <div className="flex gap-2 items-center justify-center my-6">
          <span>Already have an account? </span>
          <Link to="/login" className="text-[#FF4C4A]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
