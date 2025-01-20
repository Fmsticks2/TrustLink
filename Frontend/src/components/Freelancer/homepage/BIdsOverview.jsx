import React from 'react';

const BidsOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col">
      <div className='flex justify-between items-center p-4'>
        <h3 className="text-lg font-semibold">Your Bids</h3>
        <p>Available bids: <span className='font-bold'>16</span></p>
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className='p-4'>
        <span className='text-gray-500'><span className='text-black font-semibold'>16 bids</span> left out of 6</span>
      </div>
      <div className='self-center px-4 pb-4'>
        <button className="mt-2 font-semibold px-8 py-2 border border-[#FF4C4A] text-[#FF4C4A] rounded-full">Get more Bids</button>        
        </div>
      </div>
  );
};

export default BidsOverview;
