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
      image: "/profile.svg",
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
      id: 2,
      name: "Mariya sarapova",
      description: "UX designer, Gharphic designer",
      image: "/mariya.svg",
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      stars: "star.svg",
      dullstar: "dullstar.svg",
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: "flag.svg",
      invite: "Invite",
    },

    {
      id: 3,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: "/profile.svg",
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Best match",
      stars: "star.svg",
      dullstar: "dullstar.svg",
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: "flag.svg",
      invite: "Invite",
    },

    {
      id: 4,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: "/profile.svg",
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Best match",
      stars: "star.svg",
      dullstar: "dullstar.svg",
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: "flag.svg",
      invite: "Invite",
    },
 
  ];


return ( 
    <div className=" Clienthomepage min-h-screen w-full flex flex-row gap-4 items-start justify-around bg-gray-100 px-4  overflow-hidden">

      {/*Left wing*/}
       <div className=" flex flex-col items-center justify-center gap-6 ml-[95px] ">
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
          <img className="absolute right-0 -top-7" src="/nojob.svg" alt="" />
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

      <div className="matches relative w-[804px] mt-[32px]  flex flex-col justify-center items-center  ">
   <div className="text absolute top-0 left-0">Best matches for you (200)</div>
   <div className="text flex gap-2 absolute top-0 right-0 text-[#FF4C4A]">
    <img src="filter.svg" alt="" /> <div className="filter-text"></div>Filter here</div>
     
      {/* Talent card */}
      <div className="talents my-[5em] flex flex-col gap-[20px] ">
     {/* Job post */}
    {talentData.map((talent) => {
          const ratingStyles = {
            "Top rated": {  ratingBgColor: "bg-[#4260DA]" },
            "Best match": {  ratingBgColor: "bg-[#C12D71]" },
            "":{ ratingBgColor: "transparent" },
          };

          const defaultStyles = { ratingBgColor: "transparent" };

          const {ratingBgColor } =
          ratingStyles[talent.rating] || defaultStyles;


return (
      <div  key={talent.id} className="Jobs flex flex-row justify-between items-center gap-4  bg-white p-4 rounded-lg shadow-lg relative w-[804px] ">
       <div className={` rating rounded-full ${ratingBgColor} w-[104px] h-[25px] flex justify-center items-center text-white font-bold absolute -top-[5px] left-[29px] text-base`}>{talent.rating}</div>
        <div className="invite rounded-full w-[147px] h-[39px] flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold absolute top-[39px] right-[17px] text-base ">{talent.invite}</div>
 

       <div className="discription flex flex-row gap-4 justify-between mt-[38px] items-start">
         {/* Image */}
         <div className="image relative">
         <img
              src={talent.image}
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
);
})
}

       </div>



       <div className="invite rounded-full w-[147px] h-[39px] mb-[5em] flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold  text-base ">Learn more</div>
      </div>


       </div>

       {/*Right wing*/}
      <div className=" flex flex-col items-start justify-start w-[390px] mt-[178px] gap-6 shadow-lg rounded-lg"> 
       <button onClick={backtologin}   className="  rounded-full absolute top-[125px] left-[1138px] bg-[#FF4C4A] w-[190px] h-[39px] text-white font-bold text-base ">
        Post a job now</button>
        
        {/* Profile completion */}
        <div className="completeprofile flex flex-col items-center justify-center gap-4 w-full h-[266px]   bg-white p-4 rounded-lg shadow-lg">

<div className="Name text-center">
  {/* Name of the user */}
<div className="text text-[#2A1E17]  text-xl font-bold">Adam smith</div> 
<div className="text text-[#2A1E17] text-sm font-normal opacity-90 ">TrustLinklab</div>

</div>
    
<div className="flex justify-between w-[80%] m-0 ">

    <span className="text-sm font-semibold text-gray-700">Set up your account</span>
    <span className="text-sm font-semibold text-gray-700">82%</span>

  </div>
         {/* Loader Container */}
  <div className="relative w-[80%] h-[6px] bg-gray-200 rounded-full overflow-hidden shadow-inner">
    {/* Progress */}
    <div
      className="absolute h-[6px] bg-[#2942A5] transition-all ease-in-out duration-500"
      style={{ width: "82%" }}
    ></div>
  </div>
 

  

        <div className="profile-btn rounded-full w-[210px] h-[39px]  flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold  text-base ">Complete your profile</div>


        <div className="p w-[80%] text-center text-xs">100% completion of  you profile will help 
        your get more reach.</div>
        </div>

      {/* Verication */}
      <div className="verification flex flex-col items-start justify-start gap-4 w-full h-[266px]   bg-white p-4 rounded-lg shadow-lg">

<div className=" text w-full  flex flex-col relative items-start justify-center gap-4  py-6 ">
<div className="text text-[#2A1E17]  text-xl font-bold">Verification</div> 


<div className="line border border-solid border-black opacity-10  w-full absolute top-[68px] left-0
 "></div> </div>
    
<div className="flex justify-between w-full">
  <div className="flex flex-row items-center justify-center gap-4">
     <div className="identity flex flex-col items-center justify-center">
   <img src="identity.svg" alt="" />
   <img src="identitybody.svg" alt="" />
    </div>
    <div className="text">Identity verified </div>
    </div>
    
    <div className="verifybtn text-[#4285F4]">Verify</div>
  </div>


  <div className="flex justify-between w-full">
  <div className="flex flex-row items-center justify-center gap-4">
     
   <img src="phone.svg" alt="" />
  <div className="text">Phone verified </div></div>
    
    <div className="verifybtn text-[#4285F4]">Verify</div>
  </div>
 
 <div className="flex justify-between w-full">
  <div className="flex flex-row items-center justify-center gap-4">
     
   <img src="email.svg" alt="" />
  <div className="text">Email verified </div></div>
    
    <div className="verifybtn text-[#4285F4]">Verify</div>
  </div>
 
        </div>


<div className="membership flex px-4 gap-4 items-center justify-center rounded-lg shadow-lg bg-gradient-to-r from-[#031661] to-[#FF4C4A] h-[96px] w-[392px] ">
<div className="text text-[19px] text-white">
  <span className="font-bold">Get membership</span> for getting 
  more bids in a month <span className="text-[24px]">&rarr;</span>
</div>


<div className="text text-[#2942A5] w-[78px] h-[78px] p-5 rounded-full bg-white flex flex-col items-center justify-center border-2 shadow-md">
  <span className="font-bold">UP</span>
  <span>TECH</span>
  <span>HUNT</span>
</div>

</div>


      {/* All jobs */}
      <div className="verification flex flex-col items-start justify-start gap-4 w-full h-[287px] bg-white p-4 rounded-lg shadow-lg">
  <div className="text w-full flex flex-col relative items-start justify-center gap-4 py-4">
    <div className="flex flex-row items-center justify-between w-full">
      <div className="text text-[#2A1E17] text-xl font-bold">All Jobs</div>
      <div className="text-[#2A1E17] text-xl font-bold">Total 10</div>
    </div>
    <div className="line border border-solid border-black opacity-10 w-full absolute top-[60px] left-0"></div>
  </div>

  <div className="flex justify-between w-full">
    <div className="flex flex-row items-center justify-center gap-4">
      <img src="active.svg" alt="" />
      <div className="text">
        <span className="font-bold">Active Projects </span>:07
      </div>
    </div>
  </div>

  <div className="flex justify-between w-full">
    <div className="flex flex-row items-center justify-center gap-3">
      <img src="complete.svg" alt="" />
      <div className="text">
        <span className="font-bold">Completed Projects </span>:07
      </div>
    </div>
  </div>

  <div className="flex justify-between w-full">
    <div className="flex flex-row items-center justify-center gap-3">
      <img src="cancled.svg" alt="" />
      <div className="text">
        <span className="font-bold">Canceled Projects </span>:07
      </div>
    </div>
  </div>

  <div className="flex justify-center items-center w-full mt-4">
    <div className="invite rounded-full text-center w-[147px] h-[39px] flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold text-base">
      View all
    </div>
  </div>
</div>


        
        
        </div> 


    </div> 
    )
}

export default ClientHomepage;







