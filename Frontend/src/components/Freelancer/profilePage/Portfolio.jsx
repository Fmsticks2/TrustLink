import React from 'react'
import Portfolio1 from '../../../assets/portfolio1.png';
import Portfolio2 from '../../../assets/portfolio2.png';
import Portfolio3 from '../../../assets/portfolio3.png';
import { TrashIcon } from '@heroicons/react/20/solid'


const Portfolio = () => {

  const portfolioItems = [
    {
      src: Portfolio1, 
      alt: "Graphic Art - For evolutionist",
      height: 44, 
      width: 64 
    },
    {
      src: Portfolio2, 
      alt: "Online Wallet App",
      height: 44, 
      width: 'full' 
    },
    {
      src: Portfolio3, 
      height: 44, 
      width: 'full' 
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between xs:items-center p-6">
        <h2 className="text-lg font-bold">My Portfolio</h2>
        <div className='flex gap-3'>
          <TrashIcon className='w-5 text-gray-400' />
          <button className="px-8 py-1 xs:text-sm h-fit border border-[#FF4C4A] rounded-full text-[#FF4C4A] font-semibold text-xs">
            Edit Portfolio
          </button>
        </div>
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
        <div className="flex lg:flex-nowrap flex-wrap gap-4 justify-evenly p-6 py-8">
          {portfolioItems.map((item, index) => (
            <div 
            key={index} 
            className={`rounded-2xl 64 overflow-hidden  bg-gray-100`} 
          >
            <img 
              src={item.src} 
              alt={item.alt} 
              className={`w-64 h-${item.alt ? '32' : 'full'} object-cover hover:opacity-90 transition-opacity`} 
            />
            {item.alt && (
              <p className="p-4 font-semibold text-sm">{item.alt}</p>
            )}
          </div>

          ))}
        </div>
      <button className="my-4 text-blue-500 w-full text-center text-md">View All</button>
    </div>
  )
}

export default Portfolio