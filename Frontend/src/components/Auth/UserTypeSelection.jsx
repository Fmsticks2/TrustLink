import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = () => {
  const navigate = useNavigate();

  const handleFreelancerSelection = () => {
    navigate('/freelancer/onboarding');
  };

  const handleClientSelection = () => {
    navigate('/client/home');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Select Account Type</h2>
        <button
          onClick={handleFreelancerSelection}
          className="block w-48 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Freelancer
        </button>
        <button
          onClick={handleClientSelection}
          className="block w-48 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Client
        </button>
      </div>
    </div>
  );
};

export default UserTypeSelection;
