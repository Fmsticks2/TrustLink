import React from 'react';
import UserImg from '../../../../public/user.png'
import { ClockIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';



const Invite = () => {
  return (
    <div className='bg-gray-100 overflow-hidden min-h-screen '>
      <div className="max-w-7xl mx-auto  xs:px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
   

     {/* Back button */}
     <div className="mb-4">
            <button className="text-black text-lg"><Link to={'/client/viewproposal'}>&#8249; Back</Link> </button>
          </div>


{/*User Info*/}
     <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex lg:flex-nowrap flex-wrap  items-start gap-6 max-lg:justify-center">
        <div>
          <div className='w-[220px] h-[220px] overflow-hidden rounded-lg'>
            <img 
              src={UserImg} 
              alt="Profile" 
              className="rounded-lg object-cover"
            />
          </div>   
          <div className="flex max-lg:flex-row max-xs:flex-col flex-col justify-items-center lg:items-start items-center max-lg:gap-5 max-xs:gap-0 mt-4 space-y-2 text-sm text-gray-600">
            <span>🌍 Melbourne, USA</span>
            <span className='flex gap-1'> <ClockIcon className='h-5' /> It's currently 4:45 PM HERE</span>
            <span>📅 Joined September 1, 2021</span>
          </div>       
        </div>

        <div className="w-fit">
          <div className="space-x-2 space-y-4">
            <div className='flex xs:flex-nowrap flex-wrap justify-between items-center'>
              <div>
                <h1 className="text-3xl font-bold">Adam Smith</h1>
                <p className="text-gray-400">User Experience Designer, Graphic Designer</p>                
              </div>
              <button className="px-10 py-3 max-xs:mt-5 text-sm h-fit border border-[#FF4C4A] rounded-full text-[#FF4C4A] font-bold">
              Edit Profile
            </button>
            </div>
          
            <div className="flex xs:flex-nowrap flex-wrap items-center max-xs:px-2 gap-4 mt-2 text-xs text-gray-600">
              <span className='text-gray-400'>
                <span className='flex'>
                  <StarIcon className={`h-3 ${true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${!true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${!true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  </span> 
                4.6 (25 Reviews)
              </span>
              <span className='h-5 w-[1px] bg-gray-300' />
              <span className='flex items-center gap-1'>
                <CurrencyDollarIcon className='h-5' /> 
                <span className='flex flex-col'>
                  <span className='font-semibold'>50USD/ Hr</span>
                  <span>Total earnings- 10k USD</span>
                </span>
              </span>
              <span className='h-5 w-[1px] bg-gray-300' />
              <span className='font-semibold'>🎯 25 projects completed</span>
            </div>
            
          </div>
          <div className="mt-4 text-gray-700 px-4 h-52 overflow-y-scroll scrollbar-custom">
            I am a talented and experienced Graphic Design Designer looking to be hired. In my work experience I have versatility as a Website Design Developer working on many different projects. I strive to put in my maximum effort and complete all my work with excellence. For any targeted task, I will involve myself sincerely in your team and can handle as an experienced person too. You can trust on me for any of your work. I am always ready to learn new things in prompt manner. I am looking forward to be outsourced by you.
          </div>
        </div>
      </div>
    </div>

{/*Portfolio*/}
<div className="bg-white rounded-lg p-6 shadow-md space-y-6 ">

        {/* Job Title */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Job title</h2>
          <p className="text-black font-bold mt-2">
            Looking for a UX Web Designer/Russian Speakers only
          </p>

          <div className="line w-full border mt-4"></div>
        </div>

        {/* Cover Letter */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Cover letter</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore e
          </p>
          <div className="line w-full border mt-4"></div>

        </div>

        {/* By Milestone */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">By milestone</h2>
          <p className="text-gray-500 mt-1 text-sm">
            Divide the project into smaller segments, called milestones. You'll
            be paid for milestones as they are completed and approved.
          </p>
        </div>

        {/* Milestone Table */}
        <div className="grid grid-cols-2 gap-4 border-t border-b py-4">
          <div className="text-gray-700 text-sm">Due date</div>
          <div className="text-gray-700 text-sm">Amount</div>
          <div className="text-black text-sm">12-02-2022</div>
          <div className="text-black text-sm">$400</div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Web Design", "Mockup", "Web Design", "Mockup"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Expertise */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Expertise</h2>
          <p className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full mt-2 inline-block">
            Fresher
          </p>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Timeline</h2>
          <p className="text-gray-600 text-sm mt-2">1 to 6 months</p>
        </div>
      </div>
    </div>

    

{/* 
            <Portfolio />
            <Reviews />
            <Experiences />
            <Education /> */}
          </div>
          
          <div className="h-[50rem] grid lg:grid-rows-2 grid-cols-1 lg:col-span-1 col-span-2 items-start justify-between gap-5">
            {/* <Verification className={'rows-start-1'} />
            <Skills /> */}
          </div>
        </div>
      </div>
    
  );
};

export default Invite;
