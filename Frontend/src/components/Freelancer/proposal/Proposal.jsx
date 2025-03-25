import BgImg from '../../../assets/bgImage.png';
import { ArrowLeftIcon,  UserIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon,  ClockIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

function Proposal() {
  return (
    <div>
   <div className='relative overflow-hidden'>
                  <div className='bg-[#2942A5] h-[300px] lg:h-[400px]' />
                  <img src={BgImg} className='absolute top-0 right-0 w-fit' alt="" />
                </div>

<div className="p-6 w-[90%] mx-auto mb-[5em] bg-white shadow-lg rounded-lg -mt-[35%] lg:-mt-[20%] z-10 relative">
<button className=" text-blue-500 mb-4">
<Link to={'/freelancer/searchjob/'} className='flex items-center'> <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back</Link>
</button>
<div className="flex flex-col lg:flex-row gap-6">
<div className="left w-full pb-4 border-b lg:p-[3em] lg:w-[75%] border-rounded-lg">

<div className='flex gap-4 justify-between'>
<div>
<h1 className="text-base font-semibold lg:text-xl">Looking for a UX Web Designer/Russian Speakers only</h1>
<p className="text-gray-600 text-sm mt-2">Posted 3 hours ago</p>
</div>
<div>
<p className=" text-base  font-bold mt-2 lg:text-lg">$90.00 USD</p>
<p className="text-gray-500 text-sm">Expires in 3 days, 21 hours</p>
</div>
</div>



<p className="mt-4 text-gray-700">
  I need a website for a software development and service company.
  The company is in IT services, the focus is on what we offer to provide, rather than who did the project.
</p>

<h3 className="text-lg font-semibold mt-4">The key areas are:</h3>
<ul className="list-disc list-inside text-gray-700">
  <li>Digital transformation work</li>
  <li>Platform modernization</li>
  <li>Automation and support</li>
  <li>Security Risk mitigation</li>
  <li>Cloud Dev migration</li>
  <li>Software development</li>
</ul>
<p className='my-4'>Contents development is included in job which should be finalized after review with me.</p>
<hr/>
<h3 className="text-lg font-semibold mt-4">Skills and Expertise</h3>
<div className="flex flex-wrap gap-2 my-4">
  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Web Design</span>
  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Mockup</span>
  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Web Design</span>
  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">Mockup</span>
</div>
<hr/>
<h3 className="text-lg font-semibold my-4">Skills and Expertise</h3>
<div className=" flex gap-2">  <h3 className='font-semibold'>Proposals:</h3> 15 to 20 </div>
<div className=" flex gap-2">  <h3 className='font-semibold'>Last viewed by client:</h3> 3 minutes ago </div>
<div className=" flex gap-2">  <h3 className='font-semibold'>interviewing:</h3>0</div>
<div className=" flex gap-2">  <h3 className='font-semibold'>invites sent:</h3>0</div>
<div className=" flex gap-2">  <h3 className='font-semibold'>Unanswered invites:</h3>0</div>




</div>

<div className="right  ">

<div className="flex flex-col  gap-4 justify-center items-center p-4 ">
            <button className="text-white text-lg border  bg-[#FF4C4A] rounded-full w-[190px] h-[39px] "> <Link to={'/freelancer/submitproposal/'} >Submit a proposal</Link></button>
            <button className="text-black text-lg border border-black rounded-full
            w-[190px] h-[39px]">Save the project</button>

          </div>

          <div className='font-semibold'>
            <h3>Required Connect to submit a proposal: 6</h3>
            <h3>Avaliable Connect: 50</h3>

          </div>

<div className="mt-6 p-4  rounded-md">
    <div className='border-y flex flex-col gap-2 py-4 items-start justify-center'>
    <h3 className="font-semibold text-[20px]">About the client</h3>
  <span  className='flex justify-center items-center gap-2'> <ClockIcon className='w-[20px] h-[18px]' />Manhattan, USA</span>
  <span  className='flex justify-center items-center gap-2'> <ClockIcon className='w-[20px] h-[18px]' /> It's currently 4:45 PM here</span>
  <span  className='flex justify-center items-center gap-2'> <ClockIcon className='w-[20px] h-[18px]' /> Joined September 1, 2013</span>

    </div>



  <div className="mt-2 flex flex-col items-start gap-2 text-green-500">
    <span className='flex justify-center items-center gap-2'> <UserIcon className='w-[20px] h-[18px]' /> Identity Verified</span>
    <span  className='flex justify-center items-center gap-2'> <CurrencyDollarIcon className='w-[20px] h-[18px]' /> Payment Verified</span>
    <span  className='flex justify-center items-center gap-2'> <PhoneIcon className='w-[20px] h-[18px]' /> Phone Verified</span>
    <span  className='flex justify-center items-center gap-2'> <EnvelopeIcon className='w-[20px] h-[18px]' /> Email Verified</span>
    <span  className='flex justify-center items-center gap-2'> <ClockIcon className='w-[20px] h-[18px]' /> Email Verified</span>

  </div>
</div>


 
</div> </div> </div> </div>
  );
}

export default Proposal;