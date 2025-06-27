import { useNavigate } from "react-router-dom";
import { useAccount, useSignMessage } from "wagmi";
import { modal } from '../../context/index';
import { getNonce, verifySignature } from "../../services/api";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();

  const handleLogin = async () => {
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

      // Store token and user info
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify({ address }));

      toast.success('Successfully logged in!');
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error.message || 'Failed to login');
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg py-10 sm:px-24 px-8 sm:w-[600px] w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Connect your wallet</h1>
        <button
          onClick={handleLogin}
          className="w-full bg-[#FF4C4A] text-white py-2 rounded-full hover:bg-red-600 transition"
        >
          {isConnected ? 'Login with Wallet' : 'Connect Wallet'}
        </button>
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