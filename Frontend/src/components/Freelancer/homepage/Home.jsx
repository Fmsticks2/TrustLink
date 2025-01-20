import React from 'react';
import UserImg from '../../../../public/freelanceUserImg.png';

const Home = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="bg-white p-10 rounded-lg shadow-md relative">
      <div className='absolute top-3 right-0 w-44 z-0'>
        <img src={UserImg} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='relative z-10'> 
        <h1 className="text-md text-gray-600 font-bold">{formattedDate}  {currentDate.getFullYear()}</h1>
        <p className="text-lg mt-2 font-semibold">Welcome back</p>
        <span className="font-bold text-3xl text-[#FF4C4A]">Adam Smith</span>
      </div>
    </div>
  );
};

export default Home;
