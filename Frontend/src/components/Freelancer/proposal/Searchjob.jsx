import BgImg from '../../../assets/bgImage.png';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobsData from '../../../data/JobData';
import JobList from '../homepage/JobList';
import SearchJobs from '../homepage/SearchJobs';
import { FaSearch } from 'react-icons/fa';

const skillCategories = {
  "Content": ["Content Writing", "Content Marketing", "Content Strategy", "Content Categorization"],
  "Education": ["Teaching", "Curriculum Development", "Educational Research", "Training"],
  "Data": ["Data Analysis", "Data Science", "Data Visualization", "Statistics"],
  "Communication": ["Customer Service", "Technical Writing", "Translation", "Communication"],
  "Research": ["Market Research", "Academic Research", "User Research", "Research"],
  "Development": ["Mobile App Development", "Frontend Development", "Backend Development", "Full Stack Development"],
  "Design": ["UI/UX Design", "Graphic Design", "Web Design", "Product Design"],
  "Marketing": ["Digital Marketing", "Social Media Marketing", "SEO", "Content Marketing"]
};

function Searchjob() {

  const [fixedPrice, setFixedPrice] = useState([0, 10000]); // Changed from 500 to 10000
  const [hourlyRate, setHourlyRate] = useState([0, 200]); // Changed from 100 to 200
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isFixedPrice, setIsFixedPrice] = useState(false);
  const [isHourlyRate, setIsHourlyRate] = useState(false);
  const [skillSearch, setSkillSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [languageSearch, setLanguageSearch] = useState("");

  useEffect(() => {
    setJobs(JobsData());
  }, []);

  const isAnyFilterActive = () => {
    return isFixedPrice || 
           isHourlyRate || 
           selectedSkills.length > 0 || 
           skillSearch || 
           locationSearch || 
           languageSearch || 
           fixedPrice[1] !== 10000 || 
           hourlyRate[1] !== 200;
  };

  const getSkillsByCategory = (category) => {
    return skillCategories[category] || [];
  };

  const toggleSkill = (category) => {
    const categorySkills = skillCategories[category];
    const isAnySkillSelected = categorySkills.some(skill =>
      selectedSkills.includes(skill)
    );

    if (isAnySkillSelected) {
      // Remove all skills from this category
      setSelectedSkills(prevSkills =>
        prevSkills.filter(skill => !categorySkills.includes(skill))
      );
    } else {
      // Add all skills from this category
      setSelectedSkills(prevSkills => [...prevSkills, ...categorySkills]);
    }
  };

  const onSkillClick = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleAllClick = () => {
    setIsFixedPrice(false);
    setIsHourlyRate(false);
    setFixedPrice([0, 10000]);
    setHourlyRate([0, 200]);
    setSelectedSkills([]);
    setSkillSearch("");
    setLocationSearch("");
    setLanguageSearch("");
  };

  const extractPrice = (budget) => {
    const matches = budget.match(/\d+/g);
    if (!matches) return 0;
    return Math.max(...matches.map(Number));
  };

  const filteredJobs = jobs.filter(job => {
    // If no filters are active, show all jobs
    if (!isAnyFilterActive()) return true;

    // Payment type filter
    const matchesPaymentType =
      (!isFixedPrice && !isHourlyRate) ||
      (isFixedPrice && job.paymentType === "Fixed Rate") ||
      (isHourlyRate && job.paymentType === "Hourly Rate");

    // Price range filter
    const jobPrice = extractPrice(job.budget);
    const matchesPriceRange =
      (job.paymentType === "Fixed Rate" && jobPrice >= fixedPrice[0] && jobPrice <= fixedPrice[1]) ||
      (job.paymentType === "Hourly Rate" && jobPrice >= hourlyRate[0] && jobPrice <= hourlyRate[1]);

    // Other filters
    const matchesSkillSearch = !skillSearch ||
      (Array.isArray(job.skills) && job.skills.some(skill =>
        skill.toLowerCase().includes(skillSearch.toLowerCase())
      ));

    const matchesLocationSearch = !locationSearch ||
      (job.location && job.location.toLowerCase().includes(locationSearch.toLowerCase()));

    const matchesLanguageSearch = !languageSearch ||
      (Array.isArray(job.languages) && job.languages.some(lang =>
        lang.toLowerCase().includes(languageSearch.toLowerCase())
      ));

    const matchesSelectedSkills =
      selectedSkills.length === 0 ||
      (Array.isArray(job.skills) && job.skills.some(skill =>
        selectedSkills.some(selectedSkill =>
          skill.toLowerCase().includes(selectedSkill.toLowerCase())
        )
      ));

    return matchesPaymentType &&
           matchesPriceRange &&
           matchesSkillSearch &&
           matchesLocationSearch &&
           matchesLanguageSearch &&
           matchesSelectedSkills;
  });

  return (
    <div className="bg-gray-200 mt-[5em]  overflow-hidden w-full ">
      <div className='relative overflow-hidden'>
        <div className='bg-[#2942A5] h-[300px] lg:h-[400px]' />
        <img src={BgImg} className='absolute top-0 right-0 w-fit' alt="" />
      </div>

      <div className=" flex flex-col  gap-6  px-4 py-8 lg:p-[4vw] -mt-[85%] lg:-mt-[30%] z-10 relative  w-full">

        <div className="head   w-full  p-6 rounded-lg text-white ">
          <SearchJobs
            searchTerm={searchQuery}
            setSearchTerm={setSearchQuery}
          />
        </div>

        <div className=' mx-auto w-full  flex flex-col px-2 py-4  justify-between gap-6  lg:px-4 lg:py-8  relative  lg:flex-row'>

          <aside className="h-fit w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
            <div className='flex justify-between items-center mb-4'>
              <h2 className="text-xl font-semibold">Filters</h2>
              <button 
                onClick={handleAllClick}
                className={`px-4 py-2 rounded-lg ${
                  !isAnyFilterActive() 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                All
              </button>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="fixedPrice"
                  checked={isFixedPrice}
                  onChange={(e) => setIsFixedPrice(e.target.checked)}
                  className="form-checkbox"
                />
                <label htmlFor="fixedPrice" className="ml-2">Fixed Price</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="hourlyRate"
                  checked={isHourlyRate}
                  onChange={(e) => setIsHourlyRate(e.target.checked)}
                  className="form-checkbox"
                />
                <label htmlFor="hourlyRate" className="ml-2">Hourly Rate</label>
              </div>
            </div>

            <hr />
            <div>
              <div>
                <label className="block m-2">Fixed Price</label>
                <input
                  type="range"
                  min={0}
                  max={10000} // Changed from 1000 to 10000
                  value={fixedPrice[1]}
                  onChange={(e) => setFixedPrice([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <p className="text-sm mt-2">${fixedPrice[0]} - ${fixedPrice[1]}</p>

              </div>

              <div>
                <label className="block m-2">Hourly Rate</label>
                <input
                  type="range"
                  min={0}
                  max={200} // Changed from 1000 to 200
                  value={hourlyRate[1]}
                  onChange={(e) => setHourlyRate([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <p className="text-sm mt-2">${hourlyRate[0]} - ${hourlyRate[1]}</p>
              </div>
            </div>

            <div>
              <h3 className="mt-4 text-lg font-semibold">Skills</h3>
              <div className="relative mt-2 mb-4 flex items-center border gap-2 border-gray-300 rounded-lg p-2">
                <FaSearch className="text-gray-400" />
                <input
                  type="search"
                  className="w-full"
                  placeholder="Search skills..."
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                />
              </div>

              <div className="mt-2 flex flex-col gap-6">
                {Object.keys(skillCategories).map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedSkills.some(skill =>
                        skillCategories[category].includes(skill)
                      )}
                      onChange={() => toggleSkill(category)}
                      className="form-checkbox"
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mt-4 text-lg font-semibold">Project Location</h3>
              <div className="relative mt-2 mb-4 flex items-center border gap-2 border-gray-300 rounded-lg p-2">
                <FaSearch className="text-gray-400" />
                <input
                  type="search"
                  className="w-full"
                  placeholder="Search locations..."
                  value={locationSearch}
                  onChange={(e) => setLocationSearch(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="mt-4 text-lg font-semibold">Languages</h3>
              <div className="relative mt-2 mb-4 flex items-center border gap-2 border-gray-300 rounded-lg p-2">
                <FaSearch className="text-gray-400" />
                <input
                  type="search"
                  className="w-full"
                  placeholder="Search languages..."
                  value={languageSearch}
                  onChange={(e) => setLanguageSearch(e.target.value)}
                />
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <JobList
              jobs={filteredJobs}
              toggleFavorite={() => { }} // No favorite toggle functionality here
              filterType="search"
              onSkillClick={onSkillClick} // Handle skill click
            />
          </main>

        </div>

      </div>

    </div>
  )
}

export default Searchjob;