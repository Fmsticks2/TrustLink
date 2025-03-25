import React from 'react';
import FreeLancerImgBg from '../FreeLancerImgBg';
import { ImClock, ImCoinDollar, ImFacebook, ImImage, ImLocation } from 'react-icons/im';
import { CalendarDateRangeIcon, EnvelopeIcon, GifIcon, MicrophoneIcon, PhoneIcon, SparklesIcon, StarIcon, UserIcon } from '@heroicons/react/20/solid';
import { CgMoveRight, CgPentagonRight } from 'react-icons/cg';


const JobPosting = () => {

  // Placeholder data - replace with your actual job data
  const jobTitle = 'Looking for a UX Web Designer / Russian Speakers only';
  const hourlyRate = '$10.00 USD';
  const biddingEndsIn = '6 DAYS, 23 HOURS';
  const requiredConnects = 6;
  const availableConnects = 50;
  const jobDescription = `
    I need a website for a software development and services company. 
    The company is a new startup, so the focus is on what we offer to provide, than what we did in the past 
    The key areas are - 
    + Digitaln Transformation work 
    + Platform modernization 
    + Maintenance and support 
    + Utility tool development 
    + Secure Data migration 
    + Round the clock support 
    + IT Consulatancy 
    Contents development is included in the job which should be finalized after review with me.`;
  const skills = ['Web Design', 'Mockup', 'Web Design', 'Mockup'];
  const clientInfo = {
    location: 'Manhattan, USA',
    currentTime: 'It\'s currently 4:45 PM here',
    joinedDate: 'Joined September 1, 2013',
    manhattanTime: 'Manhattan 7:03 pm',
    jobsPosted: 47,
    hireRate: '45%',
    openJobs: 2,
    totalSpent: '$5k+',
    hires: 27,
    active: 0,
    avgHourlyRate: '$24.53 / hr',
    companySize: 'Mid-sized company (10-99 people)',
    memberSince: 'Member since Jan 22, 2020',
    rating: '4/5 (12 Reviews)',
  };
  const verification = {
    identity: true,
    payment: true,
    phone: true,
    email: true,
    facebook: true,
  };

  return (
    <div className="bg-gray-100 overflow-hidden">
      <FreeLancerImgBg />
      <div className='max-w-full mx-auto -mt-48 xs:px-4 pb-32 relative z-10'>
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - Job Details */}
          <div className="p-6 lg:col-span-9 md:col-span-8 overflow-hidden grid grid-cols-1">
            {/* Job Title and Basic Info */}
            <div className=''>
              <div className='flex max-sm:flex-col justify-between lg:gap-5 md:gap-10 gap-2'>
                <div>
                  <h2 className="text-md font-semibold  text-gray-800">{jobTitle}</h2>
                  <span className="text-gray-500 text-xs font-medium">Posted 3 hours ago</span>                  
                </div>

                <div className='space-y-1'>
                  <span className="text-sm font-semibold">{hourlyRate}</span>
                  <div className="mt-2 text-sm text-gray-400 uppercase">
                    Bidding ends in <span className="text-xs font-semibold">{biddingEndsIn}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <p className="text-gray-600 text-sm whitespace-pre-line my-2">{jobDescription}</p>

            <div className='border border-gray-200 w-[500rem] h-0 my-5' />

            {/* Skills and Expertise */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Skills and Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-xs py-1 px-4 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className='border border-gray-200 w-[500rem] h-0 my-5' />

            {/* Actions */}
            <div className="flex max-xs:flex-col gap-5 mb-6 max-md:text-sm">
              <button className="bg-[#FF4C4A] text-white rounded-full font-semibold py-2 md:px-10 px-5">
                Change terms
              </button>
              <button className="bg-white text-black rounded-full font-semibold py-2 md:px-10 px-5 border border-gray-500">
                Withdraw proposal
              </button>
            </div>

            <div className='border border-gray-200 w-[500rem] h-0 my-5' />

            {/* Start conversations */}
            <div className=''>
              <h3 className="text-lg font-semibold text-gray-700 mb-2  text-center">Start conversations</h3>
              <div className="relative flex items-center rounded-md space-x-2">
                {/* You might want to add an icon here */}
                <ImImage className='text-[#FF4C4A] rounded-[5px] h-6 w-6' />
                <GifIcon className='text-[#FF4C4A] rounded-[5px] h-7 w-8' />
                <div className='relative w-full overflow-hidden'>
                  <input
                    type="text"
                    className="shadow-sm focus:ring-indigo-200 focus:border-indigo-200 block w-full p-2 px-4 sm:text-xs bg-slate-50 border rounded-full"
                    placeholder="Type here..."
                  />
                  <MicrophoneIcon className='absolute top-2 right-5 z-10 cursor-pointer rounded-[5px] h-5 w-5' />
                </div>

                <button className="font-semibold py-1 px-3 rounded-r-md">
                  {/* Send Icon */}
                  <CgMoveRight className='text-[#FF4C4A] rounded-[5px] h-7 w-7' />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - About the client */}
          <div className="border-l-2 border-gray-200 p-6 lg:col-span-3 md:col-span-4  overflow-hidden">
            <div>
              <div className="mt-2 text-xs font-semibold text-gray-500">
                Required Connects to submit a proposal: 
                <span className="font-semibold">{requiredConnects}</span>
              </div>
              <div className="text-xs font-semibold text-gray-500">
                Available Connects: 
                <span className="font-semibold">{availableConnects}</span>
              </div>                
            </div>
            <div className='border border-gray-200 w-72 h-0 my-5 -mx-6' />
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">About the client</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <div className='space-y-2 pb-3'>
                  <div className='flex gap-1 items-center'>
                    <ImLocation className='text-gray-400' />
                    <span className="">{clientInfo.location}</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <ImClock className='text-gray-400' /> 
                    <span>{clientInfo.currentTime}</span>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <CalendarDateRangeIcon className='text-gray-400 h-4 w-4' /> 
                    <div>{clientInfo.joinedDate}</div>
                  </div>                  
                </div>

                <div className='border border-gray-200 w-72 h-0 -mx-6' />

                <div className='space-y-3 pt-3'>
                  <div>{clientInfo.manhattanTime}</div>
                  <div>
                    <span className="font-semibold">{clientInfo.jobsPosted}</span> jobs posted
                  </div>
                  <div className='text-gray-400'>
                    <span className="font-semibold">{clientInfo.hireRate}</span> hire rate, <span className="font-semibold">{clientInfo.openJobs}</span> open jobs
                  </div>
                  <div>
                    <span className="font-semibold">{clientInfo.totalSpent}</span> total spent
                  </div>
                  <div className='text-gray-400'>
                    <span className="font-semibold">{clientInfo.hires}</span> hires, <span className="font-semibold">{clientInfo.active}</span> active
                  </div>
                  <div>
                    <span className="font-semibold">{clientInfo.avgHourlyRate}</span> avg hourly rate paid
                  </div>
                  <div className='text-gray-400'><span>210 hours</span></div>
                  <div>{clientInfo.companySize}</div>
                  <div className='text-gray-400'>{clientInfo.memberSince}</div>                  
                </div>

                <div className='pt-5 space-y-1'>
                  <span className='flex'>
                    <StarIcon className={`h-3 text-[#FF4C4A]`} />
                    <StarIcon className={`h-3 text-[#FF4C4A]`} />
                    <StarIcon className={`h-3 text-[#FF4C4A]`} />
                    <StarIcon className={`h-3 text-[#FF4C4A]`} />
                    <StarIcon className={`h-3 text-gray-300`} />
                  </span> 
                  <div className='text-gray-400'>{clientInfo.rating}</div>
                </div>

                <div className='space-y-3'>
                  {verification.identity && 
                    <div className="flex items-center text-green-600 gap-2 text-xs">
                      <UserIcon className='h-4 w-4' />
                      <span className='text-black'>Identity Verified</span>
                    </div>
                  }
                  {verification.payment && 
                    <div className="flex items-center text-green-600 gap-2 text-xs">
                      <ImCoinDollar className='h-4 w-4' />
                      <span className='text-black'>Payment Verified</span>
                    </div>
                  }
                  {verification.phone && 
                    <div className="flex items-center text-green-600 gap-2 text-xs">
                      <PhoneIcon className='h-4 w-4' />
                      <span className='text-black'>Phone Verified</span>
                    </div>
                  }
                  {verification.email && 
                    <div className="flex items-center text-green-600 gap-2 text-xs">
                      <EnvelopeIcon className='h-4 w-4' />
                      <span className='text-black'>E-mail Verified</span>
                    </div>
                  }
                  {verification.facebook && 
                    <div className="flex items-center text-green-600 gap-2 text-xs">
                      <ImFacebook className='h-4 w-4' />
                      <span className='text-black'>Facebook Verified</span>
                    </div>
                  }
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default JobPosting;