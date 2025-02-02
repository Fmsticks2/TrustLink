import React from 'react';
import UserImg from '../../../../public/user.png'
import { ClockIcon, CurrencyDollarIcon, StarIcon, EnvelopeIcon, PhoneIcon, UsersIcon } from '@heroicons/react/20/solid';
import { FaFacebookF } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Portfolio1 from '../../../../public/portfolio1.png';
import Portfolio2 from '../../../../public/portfolio2.png';
import Portfolio3 from '../../../../public/portfolio3.png';
import ReviewImg from '../../../../public/reviewImg.png'





const Invite = () => {

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


  const reviews = [
    {
      name: "Sam Crockett",
      title: "Independent Web Developer",
      quote: 'The freelance talent we work with are more productive than we ever thought possible.The freelance talent we work with are more productive than.'
    },
    {
      name: "Jane Doe",
      title: "Marketing Manager",
      quote: 'The freelance talent we work with are more productive than we ever thought possible.The freelance talent we work with are more productive than.'
    }
  ];

  const experiences = [
    {
      date: "2019 - 2021",
      title: "User Experience Designer | TCS",
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.'
    },
    {
      date: "2019 - 2021",
      title: "Marketing Manager",
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.'
    }
  ];


  const education = [
    {
      date: "2019 - 2021",
      title: "Master in Design | MIT",
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.'
    },
    {
      date: "2019 - 2021",
      title: "Marketing Manager",
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.'
    }
  ];


  const verificationItems = [
    {
      icon: <UsersIcon className="text-slate-500 h-5" />,
      label: 'Identity',
      status: 'Verified' 
    },
    {
      icon: <CurrencyDollarIcon className="text-slate-500 h-5" />,
      label: 'Payment',
      status: 'Verified'
    },
    {
      icon: <PhoneIcon className="text-slate-500 h-5" />,
      label: 'Phone',
      status: 'Verified'
    },
    {
      icon: <EnvelopeIcon className="text-slate-500 h-5" />,
      label: 'Email',
      status: 'Verified'
    },
    {
      icon: <FaFacebookF className="text-slate-500 h-5" />,
      label: 'Facebook',
      status: 'Verified'
    }
  ];

  const skills = [
    'User Interface Design',
    'Graphics Design',
    'Logo Design',
    'Animation',
    'Branding',
  ];


const currentDate = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className='bg-gray-100 overflow-hidden min-h-screen py-[4em]  lg:py-[6em] '>
      <div className="max-w-7xl mx-auto  lg:px-4 py-8 relative z-10">
        <div className=" flex flex-col  lg:grid lg:grid-cols-3 gap-6 justify-center items-start">

          {/* Left Wing*/} 
          <div className="col-span-2 space-y-6 px-[1em] ">
   

     {/* Back button */}
     <div className="">
            <button className="text-black text-lg lg:ml-6 lg:mt-2 "><Link to={'/client/viewproposal'}>&#8249; Back</Link> </button>
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
            <span className='flex gap-1'> <ClockIcon className='h-5' /> It's currently {currentDate} HERE</span>
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
              <button className="px-10 py-3 max-xs:mt-5 text-sm h-fit border border-[#FF4C4A] rounded-full text-[#FF4C4A] font-bold lg:px-[2em]">
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

{/* Job Title */}
<div className="bg-white rounded-lg p-6 shadow-md space-y-6 ">

        
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

{/*Portfolio*/}
      <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between xs:items-center p-6">
        <h2 className="text-lg font-bold">My Portfolio</h2>
        <div className='flex gap-3'>
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



     {/*Reviews*/}

     <div className="bg-white rounded-lg shadow-md">
         <h2 className="text-lg font-bold mb-4 p-6 pb-0">Reviews</h2>
         <div className='w-full bg-gray-300 h-[1px]' />
        <div className="flex flex-col  lg:flex-row  gap-10 justify-center lg:justify-between items-start xs:p-10 p-5">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-sm w-full h-full">
                    <div className="flex xs:flex-nowrap flex-wrap  gap-2 mb-4 items-start w-fit">
                      <img src={ReviewImg} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
                      <div>
                        <p className="text-gray-700 ">{review.quote}</p>
                        <div className='mt-4'>
                          <h3 className="text-lg font-semibold">{review.name}</h3>
                          <p className="text-sm text-gray-500">{review.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
         <button className="my-4 text-blue-500 w-full text-center">View All</button>
       </div>



{/*Experiences*/}
       <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 p-6 pb-0">
        <h2 className="text-lg font-bold">Work Experience</h2>
       
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className="space-y-4 p-6">
        {experiences.map((experience, index) => (
        <div key={index} className="bg-gray-100  border border-gray-300 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium">{experience.title}</h3>
          <p className="text-sm text-gray-600 mb-5">{experience.date}</p>
          <p className="mt-2 text-sm text-gray-600">{experience.quote}</p>           
        </div>
        ))}
      </div>
      <button className="my-4 text-blue-500 w-full text-center">View All</button>
    </div>


    {/*Education*/}
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 p-6 pb-0">
        <h2 className="text-lg font-bold">Work Education</h2>
      
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className="space-y-4 p-6">
        {education.map((edu, index) => (
        <div key={index} className="bg-gray-100  border border-gray-300 p-4 rounded-lg shadow-sm">
          <h3 className="font-medium">{edu.title}</h3>
          <p className="text-sm text-gray-600 mb-5">{edu.date}</p>
          <p className="mt-2 text-sm text-gray-600">{edu.quote}</p>           
        </div>
        ))}
      </div>
      <button className="my-4 text-blue-500 w-full text-center">View All</button>
    </div>


     

    </div>


 {/* Right Wing */}
    <div className="lg:h-[50rem]  w-full px-[1em] items-center lg:grid lg:grid-cols-1 lg:col-span-1  lg:items-start justify-center gap-5 ">

    
          {/* buttons */} 
     <div className="flex flex-col  gap-4 justify-center items-center p-4 lg:flex-row">
            <button className="text-[#FF4C4A] text-lg border border-[#FF4C4A] rounded-full w-[190px] h-[39px] "><Link to={'/client/viewproposal'}>Message</Link> </button>
            <button className="text-white text-lg bg-[#FF4C4A] rounded-full
            w-[190px] h-[39px]"><Link to={'/client/hire'}>Hire candidate</Link> </button>

          </div>
        
            {/* Verification */}

          <div className="bg-white rounded-lg my-[2em] lg:my-0  shadow-md">
          <h2 className="text-2xl font-semibold mb-4 p-6 pb-0">Verification</h2>
          <div className='w-full bg-gray-300 h-[1px]' />
            <div className="space-y-7 p-6">
            {verificationItems.map((item) => (
              <div key={item.label} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {item.icon} 
                  <span className='text-lg'>{item.label} {item.status}</span>
                </div>
                <Link className="text-blue-500">Verify</Link>
              </div>
            ))}
          </div>
        </div>

       {/* skills */}
     <div className="bg-white rounded-lg shadow-md">
         <div className="flex justify-between items-center mb-4 p-6 pb-0">
           <h2 className="text-2xl font-semibold">Top Skills</h2>
          
         </div>
         <div className='w-full bg-gray-300 h-[1px]' />
         <div className="space-y-2 py-4 px-6">
           {skills.map((skill, index) => (
             <div key={index} className="text-gray-700 text-lg py-1">
               {skill}
             </div>
           ))}
         </div>
         <Link>
           <button className="my-4 text-blue-500 w-full text-center text-md">See more</button>
         </Link>
       </div>

    
          </div>
    


   


          </div>
          
         
        </div>
      </div>
    
  );
};

export default Invite;
