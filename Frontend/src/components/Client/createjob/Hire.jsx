import React, { useState } from "react";
import { Link } from "react-router-dom";




const Hire = () => {

 const [skills, setSkills] = useState([]);
      const [budgetType, setBudgetType] = useState("fixed");
    
      const handleSkillAdd = (e) => {
        
        if (e.key === "Enter" && e.target.value.trim() ) {
          e.preventDefault();
    
          if (skills.length >= 15) {
            return; 
          }
    
          if (e.target.value.trim() <= 1) {
            e.preventDefault();
          }
    
          setSkills([...skills, e.target.value.trim()]);
          e.target.value = "";
        }
        
      };
    
      const handleSkillRemove = (skill) => {
        setSkills(skills.filter((s) => s !== skill));
      };
   

  
    return (
     <div className="container w-full mx-auto bg-gray-100   flex justify-center items-center">
          <div className="contain flex flex-col justify-between p-4 my-[6em]  relative  w-[90%] bg-white rounded-lg shadow-md lg:my-[10em] lg:items-start lg:flex-row lg:p-8 lg:w-[80%]  ">
          <div className="back  flex justify-center items-center top-[19px] absolute cursor-pointer ">
              <Link to={'/client/invite'}>
               <span className=" text-[1em] p-1 lg:text-[2em]">&#8249;</span>
              <span className="text-lg lg:text-xl">Back</span> </Link>
            </div>
                    <form className="max-w-lg flex flex-col gap-4  mt-[2em] p-4  w-full">
              {/* Job Title */}
              <div className="mb-4">
                <label className="block font-semibold mb-2" htmlFor="jobTitle">
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  placeholder="E.g., Need Web Developer for Figma"
                  className="w-full border p-2 rounded"
                />
              </div>
    
              {/* Description */}
              <div className="mb-4">
                <label className="block font-semibold mb-2" htmlFor="description">
                  Describe about the Project
                </label>
                <textarea
                  id="description"
                  rows="5"
                  placeholder="Write here..."
                  className="w-full border p-2 rounded"
                ></textarea>
              </div>
    
              {/* Skills */}
              {skills.length >= 15 && (
                <div className="text-red-500 mb-2">You can only add up to 15 skills.</div>
              )}
              <div className="mb-4">
                <label className="block font-semibold mb-2">Skills</label>
                
                <input
                  type="text"
                  placeholder="Add a skill and press Enter"
                  onKeyDown={handleSkillAdd}
                  className="w-full border p-2 rounded"
                />
                <div className="flex flex-wrap gap-2 mb-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-black text-opacity-60 px-2 py-1 mt-2 rounded-lg cursor-pointer"
                      onClick={() => handleSkillRemove(skill)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
    
                <div className="max text-end">Add max 15 skills</div>
              </div>
    
              {/* Timeline */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">Estimate your timeline here</label>
                <div className="flex gap-4">
                  <label>
                    <input  className="accent-[#FF4C4A]"  type="radio"   name="timeline" value="small" /> Small
                  </label>
                  <label>
                    <input className="accent-[#FF4C4A]" type="radio" name="timeline" value="medium" /> Medium
                  </label>
                  <label>
                    <input className="accent-[#FF4C4A]"  type="radio" name="timeline" value="large" /> Large
                  </label>
                </div>
              </div>
    
              {/* Work Status */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">How long your work take?</label>
                <select className="w-full border p-2 rounded">
                  <option className="opacity-10" value="">EX: 1-6 mnths</option>
                  <option value="1-3 months">1-3 Months</option>
                  <option value="3-6 months">3-6 Months</option>
                  <option value="6+ months">6+ Months</option>
                </select>
              </div>
    
              {/* Expertise Level */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">Expertise level you want</label>
                <div className="flex gap-4">
                  <label>
                    <input className="accent-[#FF4C4A]" type="radio" name="expertise" value="fresher" /> Fresher
                  </label>
                  <label>
                    <input className="accent-[#FF4C4A]" type="radio" name="expertise" value="medium" /> Medium
                  </label>
                  <label>
                    <input className="accent-[#FF4C4A]" type="radio" name="expertise" value="experienced" /> Experienced
                  </label>
                </div>
              </div>
    
              {/* Budget */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">Tell Us About Your Budget</label>
                <div className="flex gap-4 mb-2 justify-around">
                  <label >
                    <div className={`flex flex-col justify-center items-center w-[120px] h-[70px] lg:w-[190px] lg:h-[94px] border rounded-lg  ${
        budgetType === "fixed" ? "border-[#FF4C4A]" : "border-gray-300"
      }`}>  
                      <input
                      type="radio"
                      name="budgetType"
                      value="fixed"
                      checked={budgetType === "fixed"}
                      onChange={() => setBudgetType("fixed")}
                      className="mb-2 accent-[#FF4C4A]"
                    /> 
                    <div className={`text text-center ${
          budgetType === "fixed" ? "text-[#FF4C4A]" : "text-black"
        }`}>
                    Fixed Price</div>
                    </div>
                  </label>
                  <label>
                    <div  className={`flex flex-col justify-center items-center w-[120px] h-[70px] lg:w-[190px] lg:h-[94px] border rounded-lg ${
        budgetType === "hourly" ? "border-[#FF4C4A]" : "border-gray-300"
      }`} >  <input
                      type="radio"
                      name="budgetType"
                      value="hourly"
                      checked={budgetType === "hourly"}
                      onChange={() => setBudgetType("hourly")}
                      className="mb-2 accent-[#FF4C4A] "
                    /> 
                    <div className={`text text-center ${
          budgetType === "hourly" ? "text-[#FF4C4A]" : "text-black"
        }`}>
                    Hourly</div> </div>
                  </label>
    
                </div>
                <div className="flex gap-2"></div>
                <div className="flex items-center gap-4">
      {/* From Section */}
      <div className="flex flex-col items-center">
        <span className="text-gray-700 font-medium mb-1">From</span>
        <div className="input flex justify-center items-center">
        <div className="flex items-center border rounded-lg px-2 py-1">
          <span className="text-gray-700 font-medium">$</span>
          <input
            type="number"
            className="w-20 text-center outline-none border-none"
            placeholder="50.00"
          />
        </div>
        <span className="text-gray-400 font-medium">/hr</span> </div>
      </div>
    
      {/* To Section */}
      <div className="flex flex-col items-center">
        <span className="text-gray-700 font-medium mb-1">To</span>
        <div className="input flex justify-center items-center">
        <div className="flex items-center border rounded-lg px-2 py-1">
          <span className="text-gray-700 font-medium">$</span>
          <input
            type="number"
            className="w-20 text-center outline-none border-none"
            placeholder="50.00"
          />
        </div>
        <span className="text-gray-400 font-medium">/hr</span> </div>
      </div>
    </div>
    
          </div>
    
          {/* Attachments */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Attachments</label>
              <input
              type="file"
              className="w-full border border-[#FF4C4A] p-2 rounded"
              multiple
            />
          </div>
    
          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="rounded-full bg-[#FF4C4A] w-[190px] h-[39px] text-white font-bold text-base"
            >
              Post job Now
            </button>
            <button
              type="button"
              className=" rounded-full border border-black w-[190px] h-[39px]  font-bold text-base"
            >
              Save as Draft
            </button>
          </div>
        </form> 
        
        <div className="btns mt-[2em] justify-center items-center flex  flex-col gap-4">
        <button
              type="submit"
              className="rounded-full bg-[#FF4C4A] w-[190px] h-[39px] text-white font-bold text-base"
            > <Link to={'/client/worksubmission'}>
              Create contact </Link>
            </button>
            <button
              type="button"
              className=" rounded-full border border-black w-[190px] h-[39px]  font-bold text-base"
            >
              Cancel contact
            </button>
    
        </div>
        </div>
        </div>
    )
}

export default Hire