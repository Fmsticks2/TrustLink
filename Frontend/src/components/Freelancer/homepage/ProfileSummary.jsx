import React from 'react';
import UserImg from '../../../../public/user.png';
import { Link } from 'react-router-dom';

const ProfileSummary = () => {
  const setupProgress = 82; 

  return (
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center">
      <div className='w-[120px] h-[120px] overflow-hidden rounded-lg'>
        <img 
          src={UserImg} 
          alt="Profile" 
          className="rounded-lg object-cover"
        />
      </div>  
      <h3 className="text-2xl font-bold mt-2">Adam Smith</h3>
      <p className="text-gray-600">User Experience Designer</p>
      <div className="mt-4 w-full flex flex-col">
        <p className="text-gray-700 font-bold flex justify-between">Set up your account: <span>{setupProgress}%</span></p>
        <input 
          type="range" 
          value={setupProgress} 
          max="100" 
          readOnly 
          className="w-full mt-2"
          style={{ accentColor: '#4064f4' }} 
        />
        <Link to={'/freelancer/profile'} className='self-center'>
          <button className="mt-4 px-10 py-2 rounded-full border border-[#FF4C4A] text-[#FF4C4A]">Complete your profile</button>
        </Link>
      </div>
      <i className='text-gray-400 text-center text-sm mt-2'>100% completion of your profile will help you get more reach</i>
    </div>
  );
};

export default ProfileSummary;
