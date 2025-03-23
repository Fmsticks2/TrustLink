import BgImg from '../../../assets/bgImage.png';
import { useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";



const jobs = [
  {
    title: "Russian Preschool Content - Categorization",
    type: "Fixed Price",
    budget: "$200-$500",
    description:
      "Looking for someone to categorize Russian preschool content into themes.",
    location: "Transnistria, USA",
    skills: ["Content Categorization", "Russian Language", "Preschool Education"],
  },
  {
    title: "Customer Support (Uzbekistan)",
    type: "Fixed Price",
    budget: "$100-$300",
    description:
      "Seeking customer support professionals for Uzbekistani market.",
    location: "Tashkent, Uzbekistan",
    skills: ["Customer Support", "Uzbek Language", "Communication"],
  },

  {
    title: "Customer Support (Uzbekistan)",
    type: "Fixed Price",
    budget: "$100-$300",
    description:
      "Seeking customer support professionals for Uzbekistani market.",
    location: "Tashkent, Uzbekistan",
    skills: ["Customer Support", "Uzbek Language", "Communication"],
  },

  {
    title: "Customer Support (Uzbekistan)",
    type: "Fixed Price",
    budget: "$100-$300",
    description:
      "Seeking customer support professionals for Uzbekistani market.",
    location: "Tashkent, Uzbekistan",
    skills: ["Customer Support", "Uzbek Language", "Communication"],
  },

  {
    title: "Customer Support (Uzbekistan)",
    type: "Fixed Price",
    budget: "$100-$300",
    description:
      "Seeking customer support professionals for Uzbekistani market.",
    location: "Tashkent, Uzbekistan",
    skills: ["Customer Support", "Uzbek Language", "Communication"],
  },

  {
    title: "Customer Support (Uzbekistan)",
    type: "Fixed Price",
    budget: "$100-$300",
    description:
      "Seeking customer support professionals for Uzbekistani market.",
    location: "Tashkent, Uzbekistan",
    skills: ["Customer Support", "Uzbek Language", "Communication"],
  },
];


const availableSkills = [
  "Content Categorization",
  "Russian Language",
  "Preschool Education",
  "Customer Support",
  "Uzbek Language",
  "Communication",
  "Website Design",
  "Ux design",
  "Frontend Development",
  "Backend Development",

];

function Searchjob ()  {

    const [price, setPrice] = useState([0, 500]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleSkill = (skill) => {
      setSelectedSkills((prevSkills) =>
        prevSkills.includes(skill)
          ? prevSkills.filter((s) => s !== skill)
          : [...prevSkills, skill]
      );
    };

  const filteredJobs = jobs.filter((job) =>
    selectedSkills.length === 0 || job.skills.some((skill) => selectedSkills.includes(skill))
  );
    
    
    return (


<div className="bg-gray-200 mt-[5em]  overflow-hidden w-full ">
<div className='relative overflow-hidden'>
               <div className='bg-[#2942A5] h-[300px] lg:h-[400px]' />
               <img src={BgImg} className='absolute top-0 right-0 w-fit' alt="" />
             </div>

<div className=" flex flex-col  gap-6  px-4 py-8 lg:p-[4vw] -mt-[85%] lg:-mt-[30%] z-10 relative  w-full">
  
  <div className="head   w-full  p-6 rounded-lg text-white ">
  <div className="flex justify-between items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 rounded-lg text-gray-900"
            />
            <button className="absolute flex justify-center items-center gap-2 right-0 top-0 bg-red-500 p-3 rounded-r-lg ">
              <MagnifyingGlassIcon className="w-5 h-5 text-white" />
              Search
            </button>
          </div>
        </div>
        <p className="mt-2 text-sm">Advanced Search</p>
  </div>







  <div className=' mx-auto w-full  flex flex-col px-2 py-4  justify-between gap-6  lg:px-4 lg:py-8  relative  lg:flex-row'>

             <aside className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <hr />
        <label className="block m-2">Fixed Price</label>
        <input
          type="range"
          min={0}
          max={1000}
          value={price[1]}
          onChange={(e) => setPrice([0, parseInt(e.target.value)])}
          className="w-full"
        />
        <p className="text-sm mt-2">${price[0]} - ${price[1]}</p>

        <h3 className="mt-4 text-lg font-semibold">Skills</h3>
        <div className="mt-2 flex flex-col gap-6">
          {availableSkills.map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedSkills.includes(skill)}
                onChange={() => toggleSkill(skill)}
                className="form-checkbox"
              />
              <span>{skill}</span>
            </label>
              ))}
        </div>
      </aside>

             <main className="flex-1">
      
        <div className="grid gap-4">
          {filteredJobs.map((job, index) => (
              <Link to={'/freelancer/proposal/'}>
            <div key={index} className="p-4 bg-white rounded-lg shadow flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">
                  {job.title}
                  </h3>
                <p className="text-sm text-gray-600">{job.type} | Budget: {job.budget}</p>
                <p className="text-sm mt-2">{job.description}</p>
                <p className="text-sm text-gray-500 mt-1">{job.location}</p>
                <p className="text-sm text-gray-700 mt-2">Skills: {job.skills.join(", ")}</p>
              </div>
              <button className="p-2 bg-gray-100 rounded-full">
                <HeartIcon className="w-6 h-6 text-red-500" />
              </button> 
            </div> </Link>
          ))} 
        </div>
      </main>
              
               </div>

</div>

        
             
   
</div>
    )
}

export default Searchjob;