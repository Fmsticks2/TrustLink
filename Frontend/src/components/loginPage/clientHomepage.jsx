import { Link } from "react-router-dom";
import {MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import { useNavigate } from "react-router-dom";

function ClientHomepage ({ onSignOut }) {

  const navigate = useNavigate();

  const backtologin = () => {
    onSignOut();
    navigate("/login");

  }


  const talentData = [
    {
      id: 1,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: "profile.svg",
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Top rated",
      stars: "star.svg",
      dullstar: "dullstar.svg",
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: "flag.svg",
      invite: "Invite",
    },

    {
      id: 1,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: "profile.svg",
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Top rated",
      stars: "star.svg",
      dullstar: "dullstar.svg",
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: "flag.svg",
      invite: "Invite",
    },

    {
      id: 1,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: "profile.svg",
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Top rated",
      stars: "star.svg",
      dullstar: "dullstar.svg",
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: "flag.svg",
      invite: "Invite",
    },

    {
      id: 1,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: "profile.svg",
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Top rated",
      stars: "star.svg",
      dullstar: "dullstar.svg",
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: "flag.svg",
      invite: "Invite",
    },
 
  ];


return ( 
    <div className=" Clienthomepage min-h-screen grid grid-cols-4 grid-rows-3 gap-4 items-center justify-center bg-gray-100 px-[4vw] ">

      {/*Left wing*/}
       <div className=" flex flex-col items-center justify-center gap-6 row-span-4 col-span-3 bg-gray-100">
        <div className="welcome absolute
        top-[125px] left-[113px] text-[#2A1E17] text-xl font-normal">Welcome back, <span className="font-bold">Adam Smith</span></div> {/* Name of the user */}
 {/* Job post */}
       <div className="Jobs flex flex-row justify-between items-center gap-4  bg-white p-4 mt-[178px] rounded-lg shadow-lg relative w-[804px]">
        {/* Job post text */}
        <div className="jobpost flex flex-col items-start justify-start gap-4 w-[310px] h-[182px] p-2">
        <div className="jobname text-[#2A1E17] font-semibold text-xl">No job post</div>  
        <div className="jobdescription font-semibold text-sm">You have not posted any job, post your job 
        and find worlds best talent here.</div>
        <button className="rounded-full bg-[#FF4C4A] w-[190px] h-[39px] text-white font-bold text-base ">Post now</button>


        </div>

        {/* Job post image */}
        <img className="absolute right-0 -top-7" src="nojob.svg" alt="" />


       </div>


{/* Search Talent */}
       <div className="flex border border-gray-300 rounded-lg overflow-hidden w-[804px] h-[53px]">
        {/* Input Field */}
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 outline-none"
        />
        {/* Search Button */}
        <button className="flex items-center justify-center px-4 bg-[#FF4C4A] hover:bg-[#e64543]  text-white">
          <MagnifyingGlassIcon className="h-6 w-6" /> Search
        </button>
      </div>

      <div className="matches relative w-[804px] mt-[32px]  flex flex-col  ">
   <div className="text absolute top-0 left-0">Best matches for you (200)</div>
   <div className="text flex gap-2 absolute top-0 right-0 text-[#FF4C4A]">
    <img src="filter.svg" alt="" /> <div className="filter-text"></div>Filter here</div>
     
      {/* Talent card */}
      <div className="talents mt-[5em] flex flex-col gap-[20px] ">
     {/* Job post */}
    {talentData.map((talent) => (
      <div  key={talent.id} className="Jobs flex flex-row justify-between items-center gap-4  bg-white p-4 rounded-lg shadow-lg relative w-[804px] ">
       <div className=" rating rounded-full bg-[#4260DA] w-[104px] h-[25px] flex justify-center items-center text-white font-bold absolute -top-[5px] left-[29px] text-base ">{talent.rating}</div>
        <div className="invite rounded-full w-[147px] h-[39px] flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold absolute top-[39px] right-[17px] text-base ">{talent.invite}</div>
 

       <div className="discription flex flex-row gap-4 justify-between mt-[38px] items-start">
         {/* Image */}
         <div className="image relative">
         <img
              src="profile.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
         </div>
         
          {/* Text */}
          <div className="text flex flex-col gap-3">
            {/* Name */}
            <div className="name text-[#2A1E17] font-semibold text-xl">{talent.name}</div>
            {/* Description */}
            <div className="description font-semibold text-sm opacity-60 ">{talent.description}</div>
            {/* Package */} 
            <div className="package font-semibold text-sm">{talent.package}</div>
            {/* Total */}
            <div className="total font-semibold text-sm">{talent.total}</div>
            {/* Skills */}
           <div className="skills flex gap-3 justify-center items-center">
            {talent.skills.map((skill) => (
              <div key={skill} className="rounded-full flex justify-center items-center bg-[#F0F0F0] text-
              [#0000] h-[28px] w-[131px] px-4 py-2 text-sm">{skill}</div>
            ))}
            <div className="more text-[#FF4C4A]">more</div>
           </div>

           <div className="performance flex gap-4 items-center">
        
            {/* Stars */}
            <div className="flex gap-2 items-center">
              <img src={talent.stars} alt="" />
              <img src={talent.stars} alt="" />
              <img src={talent.stars} alt="" />
              <img src={talent.stars} alt="" />
              <img src={talent.dullstar} alt="" />
            </div>
            
            {/* Reviews */}
            <div className="reviews opacity-60">{talent.reviews}</div>
             {/* Location Flag */}
             <img src={talent.locationFlag} alt="" />
            {/* Location */}
            <div className="location opacity-60">{talent.location}</div>
           
           </div>
         
            
            
            
          </div>

       </div>

      </div>

     ))
}
       </div>
      </div>


       </div>

       {/*Right wing*/}
      <div className="row-span-3 col-span-1 flex justify-end items-end"> 
       <button onClick={backtologin}   className="  rounded-full absolute top-[125px] left-[1138px] bg-[#FF4C4A] w-[190px] h-[39px] text-white font-bold text-base ">
        Post a job now</button></div> 


    </div> )
}

export default ClientHomepage;







