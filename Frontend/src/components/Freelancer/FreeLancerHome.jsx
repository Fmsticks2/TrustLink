import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SearchJobs from './homepage/SearchJobs';
import JobList from './homepage/JobList';
import ProfileSummary from './homepage/ProfileSummary';
import MembershipCard from './homepage/MembershipCard';
import ContractsOverview from './homepage/ContractsOverview';
import BidsOverview from './homepage/BidsOverview';
import { getJobs } from '../../services/api';

const FreeLancerHome = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('bestMatch');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await getJobs();
        setJobs(jobsData);
        if (location.state?.successMessage) {
          toast.success(location.state.successMessage);
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch jobs');
        toast.error(err.message || 'Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [location.state]);

  const filteredJobs = jobs.filter(job => {
    if (!searchTerm) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      job.title.toLowerCase().includes(searchLower) ||
      job.description.toLowerCase().includes(searchLower) ||
      (job.category && job.category.toLowerCase().includes(searchLower)) ||
      (Array.isArray(job.requiredSkills) && job.requiredSkills.some(skill => 
        skill.toLowerCase().includes(searchLower)
      ))
    );
  });

  const parsePostedDate = (dateString) => {
    return new Date(dateString);
  };

  const toggleFavorite = (jobId) => {
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === jobId ? { ...job, favorite: !job.favorite } : job
      )
    );
  };

  const onSkillClick = (skill) => {
    setSearchTerm(skill);
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">Error: {error}</div>;

  const sortedJobs = () => {
    let result = [...filteredJobs];
    switch (filterType) {
      case 'recent':
        return result.sort((a, b) => {
          const dateA = parsePostedDate(a.posted);
          const dateB = parsePostedDate(b.posted);
          return dateB - dateA;
        });
      case 'saved':
        return result.filter(job => job.favorite);
      default:
        return result;
    }
  };

  return (
    <div className='bg-gray-100 overflow-hidden'>
      <FreeLancerImgBg />
      <div className="max-w-7xl mx-auto -mt-64 xs:px-4 pb-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <Home />
            <div className='overflow-hidden'>
              <SearchJobs searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <div className='mt-5'>
                <h2 className="text-xl font-semibold mb-4 max-xs:ml-2">Jobs you might like</h2>
                <div className="mt-4 flex space-x-4 border-b mb-5">
                  <div 
                    onClick={() => setFilterType('bestMatch')}
                    className={`px-4 py-2 shadow-sm cursor-pointer ${filterType === 'bestMatch' ? 'border-b-2 border-[#FF4C4A]' : 'border-none'}`}
                  >
                    Best Match
                  </div>
                  <div
                    onClick={() => setFilterType('recent')}
                    className={`px-4 py-2 shadow-sm cursor-pointer ${filterType === 'recent' ? 'border-b-2 border-[#FF4C4A]' : 'border-none'}`}
                  >
                    Recent
                  </div>
                  <div
                    onClick={() => setFilterType('saved')}
                    className={`px-4 py-2 shadow-sm cursor-pointer ${filterType === 'saved' ? 'border-b-2 border-[#FF4C4A]' : 'border-none'}`}
                  >
                    Saved
                  </div>
                </div>
              </div>

              <JobList 
                jobs={sortedJobs()} 
                toggleFavorite={toggleFavorite} 
                filterType={filterType} 
                onSkillClick={onSkillClick} 
              />
            </div>
          </div>
          <div className="h-fit grid grid-cols-1 lg:col-span-1 col-span-2 items-start justify-between gap-5">
            <ProfileSummary />
            <MembershipCard />
            <ContractsOverview />
            <BidsOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLancerHome;
