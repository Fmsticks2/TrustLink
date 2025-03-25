import { CheckIcon } from '@heroicons/react/20/solid';
import BgImg from '../../../assets/bgImage.png';
import { ArrowLeftIcon,CheckCircleIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import { CheckmarkIcon } from 'react-hot-toast';

function SubmitProposal() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    toast.success(
      <div className="flex w-[70%] items-center">
       <p><span className=" text-red-500 font-bold"> 🎉 Congratulations,</span>You have accepted a proposal.</p> 
      
      </div>,
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "light",
      }
    );

    setTimeout(() => {
      navigate("/freelancer/WithdrawProposal/");
    }, 3000);
  };




  return (
    <div>
       <ToastContainer/>
    <div className='relative overflow-hidden'>
                   <div className='bg-[#2942A5] h-[400px]' />
                   <img src={BgImg} className='absolute top-0 right-0 w-fit' alt="" />
                 </div>
 
 <div className="p-6 w-[90%] mx-auto mb-[5em] bg-white shadow-lg rounded-lg lg:-mt-[20%] z-10 relative">
 <button className=" text-blue-500 mb-4">
  <Link to={'/freelancer/proposal/'} className='flex items-center' >   <ArrowLeftIcon className="w-5 h-5 mr-1" /> Back </Link>
 </button>
 <div className="flex flex-col gap-6">
 <div className=" border-b p-[3em] border-rounded-lg">
 

 <div>
 <h1 className="text-xl font-semibold">Looking for a UX Web Designer/Russian Speakers only</h1>
 <p className="text-gray-600 text-sm mt-2">Posted 3 hours ago</p>
 </div>


 
 
 
 <p className="mt-4 w-[50%]">
 I need a website for a software development and services company.
 The company is a new startup, so the focus is on what we offer to provide,
  than what we did in the past.
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

 <div className="my-4 flex items-center justify-between">
  <h4 className="font-semibold ">
    Terms
  </h4>

  <p>Client budget:$10:00 USD</p>
 </div>
 <hr />

 <div>
    <h4 className="font-medium mt-[14em] mb-4 text-[#2942A5] cursor-pointer ">+Add milestone</h4>
 </div>
 <hr />

 <div className=" my-[3em] ">
  <h3 className="font-semibold ">How long will it take?</h3>

  <input type="text" placeholder="eg- 6months" className="border mt-2 border-black rounded-md p-2 "   />
 </div>

 <hr />


<div className="flex flex-col gap-4 my-5 text-black">
  <h3 className="font-bold">Additional Details</h3>
  <hr />
  <label>
Write cover letter
  </label>
  <textarea  className="h-[20em] border p-5" placeholder="Write here" name="" id=""></textarea>
</div>

 <div className="mb-4">
        <label className="block font-semibold mb-2">Attachments</label>
          <input
          type="file"
          className="w-full border border-[#FF4C4A] p-2 rounded"
          multiple
        />
      </div>
 
 
 
 
 </div>
 
 <div className='flex my-[4em] justify-start items-center gap-4 px-[3em]  '>
 <button className="text-white text-lg border  bg-[#FF4C4A] rounded-full w-[190px] h-[39px]" onClick={handleSubmit}> Submit a proposal</button>
 <h4 className='font-semibold'>Cancel</h4>
 </div >

  </div> </div> </div>
  );
}

export default SubmitProposal;