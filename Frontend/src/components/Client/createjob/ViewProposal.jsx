import BgImg from '../../../assets/bgImage.png';
import profile from '../../../assets/profile.svg'; 
import mariya from '../../../assets/mariya.svg';
import star from '../../../assets/star.svg';
import dullstar from '../../../assets/dullstar.svg'; 
import flag from '../../../assets/flag.svg';
import { Link } from 'react-router-dom';


function ViewProposal () {
    const proposals = [
        {
          id: 1,
          name: "Bhuvesh Singh",
          description: "UX designer, Gharphic designer",
          image: profile,
          package: "$60.00/hr",
          total: "Total earnings $76k on web and mobile design",
          skills: ["UI/UX", "Web Design", "Mobile Design"],
          stars: star,
          dullstar: dullstar,
          reviews: "12 Reviews",
          location: "Manhattan, USA",
          locationFlag: flag,
          invite: "Invite",
        },
    
        {
          id: 2,
          name: "Mariya sarapova",
          description: "UX designer, Gharphic designer",
          image: mariya,
          package: "$60.00/hr",
          total: "Total earnings $76k on web and mobile design",
          skills: ["UI/UX", "Web Design", "Mobile Design"],
          stars: star,
          dullstar: dullstar,
          reviews: "12 Reviews",
          location: "Manhattan, USA",
          locationFlag: flag,
          invite: "Invite",
        },
    
        {
          id: 3,
          name: "Bhuvesh Singh",
          description: "UX designer, Gharphic designer",
          image: profile,
          package: "$60.00/hr",
          total: "Total earnings $76k on web and mobile design",
          skills: ["UI/UX", "Web Design", "Mobile Design"],
          stars: star,
          dullstar: dullstar,
          reviews: "12 Reviews",
          location: "Manhattan, USA",
          locationFlag: flag,
          invite: "Invite",
        },
    
        {
          id: 4,
          name: "Bhuvesh Singh",
          description: "UX designer, Gharphic designer",
          image: profile,
          package: "$60.00/hr",
          total: "Total earnings $76k on web and mobile design",
          skills: ["UI/UX", "Web Design", "Mobile Design"],
          stars: star,
          dullstar: dullstar,
          reviews: "12 Reviews",
          location: "Manhattan, USA",
          locationFlag: flag,
          invite: "Invite",
        },
     
      ];    






    return (

        <div className="bg-gray-100  overflow-hidden min-h-screen">
            <div className='relative overflow-hidden'>
              <div className='bg-[#2942A5] h-[400px]' />
              <img src={BgImg} className='absolute top-0 right-0 w-fit' alt="" />
            </div>
        <div className="max-w-7xl mx-auto -mt-[85%]  px-4 py-8 lg:p-[4vw] lg:-mt-[25%] relative z-10">
          {/* Back button */}
          <div className="mb-4">
            <button className="text-white text-lg"><Link to={'/client/postedjob'}>&#8249; Back</Link> </button>
          </div>
  
          {/* Header */}
          <div className="flex justify-between items-center mb-6 text-white">
            <h1 className="text-2xl font-bold">My contracts</h1>
            <span>Total earnings: <strong>$10.00</strong></span>
          </div>
  
          {/* Tabs */}
          <div className="flex items-center gap-2 lg:gap-6 text-gray-300 mb-6">
            <span className="border-b-2 border-transparent cursor-pointer hover:text-white hover:border-white">
              Active contracts (02)
            </span>
            <span className="border-b-2 border-transparent cursor-pointer hover:text-white hover:border-white">
              Completed contracts (07)
            </span>
            <span className="border-b-2 border-white cursor-pointer text-white">
              Proposals (09)
            </span>
          </div>
  
          {/* Filter */}
          <div className="mb-6">
            <label className="text-white text-sm font-semibold mr-2">Select contract:</label>
            <select className="p-2 w-[308px] h-[45px] rounded bg-transparent text-white border border-white ">
              <option value="all">All</option>
            </select>
          </div>
  
          {/* Proposal Cards */}
          <div className="space-y-4">
           
          {proposals.map((talent) => {
return (
      <div  key={talent.id} className="Jobs flex flex-col justify-center items-center gap-4  bg-white p-4 rounded-lg shadow-lg relative w-full lg:flex-row lg:justify-between lg:w-[60vw] ">   
           <div className="invite rounded-full w-[147px] h-[39px] flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold absolute top-[39px] right-[17px]  text-base "><Link to={'/client/invite'}>{talent.invite}</Link></div>
       <div className="discription flex flex-col  gap-4 justify-between  mt-[38px]  items-start w-full    xl:flex-row  xl:w-[40vw] ">
         {/* Image */}
         <div className="image relative ">
         <img
              src={talent.image}
              alt="Profile"
              className="w-10 h-10  rounded-full"
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
           <div className="skills flex flex-wrap gap-3 justify-start items-center ">
            {talent.skills.map((skill) => (
              <div key={skill} className="rounded-full flex justify-center items-center bg-[#F0F0F0] text-
              [#0000] h-[28px] w-[131px] lg:px-4 lg:py-2 text-sm">{skill}</div>
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
        </div>
      </div>



    )
}

export default ViewProposal;