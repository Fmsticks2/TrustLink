import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SearchJobs from './homepage/SearchJobs';
import JobList from './homepage/JobList';
import ProfileSummary from './homepage/ProfileSummary';
import MembershipCard from './homepage/MembershipCard';
import ContractsOverview from './homepage/ContractsOverview';
import BidsOverview from './homepage/BidsOverview';
import Home from './homepage/Home';
import BgImg from '../../assets/bgImage.png';


const FreeLancerHome = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('bestMatch');
  const [jobs, setJobs] = useState([
    {
      title: "Content Writer - Tech & Marketing",
      type: "Project-based",
      level: "Junior/Mid",
      budget: "$1,500",
      posted: "2 days ago",
      description: "We are seeking a creative content writer to produce high-quality blog posts, articles, and social media content for our tech company.",
      paymentType: "Fixed Rate",
      rating: "4.6",
      reviews: "32 Reviews",
      location: "Remote",
      favorite: false,
    },
    {
      title: "UI/UX Design for E-commerce App",
      type: "Fixed-price",
      level: "Intermediate",
      budget: "$3,000",
      posted: "6 hours ago",
      description: "We are looking for a talented UI/UX designer to create a modern and user-friendly interface for our e-commerce platform. Experience with Figma and user research is a plus.",
      paymentType: "Fixed Rate",
      rating: "4.8",
      reviews: "25 Reviews",
      location: "Remote",
      favorite: false,
    },
    {
      title: "React Frontend Development",
      type: "Hourly",
      level: "Senior",
      budget: "$50/hr",
      posted: "1 day ago",
      description: "We need a skilled React developer to join our team and work on a challenging project. Experience with Redux, GraphQL, and testing frameworks is a must.",
      paymentType: "Hourly Rate",
      rating: "4.2",
      reviews: "18 Reviews",
      location: "New York, USA",
      favorite: false,
    },
    {
      title: "Digital Marketing Specialist",
      type: "Project-based",
      level: "Intermediate",
      budget: "$2,500",
      posted: "1 week ago",
      description: "We need a skilled digital marketer to manage our social media campaigns, SEO, and paid advertising efforts.",
      paymentType: "Fixed Rate",
      rating: "4.7",
      reviews: "28 Reviews",
      location: "Remote",
      favorite: false,
    },
    {
      title: "Mobile App Developer (iOS & Android)",
      type: "Hourly",
      level: "Senior",
      budget: "$60/hr",
      posted: "3 days ago",
      description: "Join our team to develop and maintain high-performance mobile applications for both iOS and Android platforms using native languages.",
      paymentType: "Hourly Rate",
      rating: "4.9",
      reviews: "45 Reviews",
      location: "London, UK",
      favorite: false,
    },
    {
      title: "Data Analyst - Business Intelligence",
      type: "Hourly",
      level: "Senior",
      budget: "$70/hr",
      posted: "1 week ago",
      description: "We are looking for a data analyst with strong analytical and problem-solving skills to analyze large datasets and provide actionable insights.",
      paymentType: "Hourly Rate",
      rating: "4.4",
      reviews: "21 Reviews",
      location: "San Francisco, USA",
      favorite: false,
    }  
  ]);
  const MAX_TOASTS = 1;
  const [activeToasts, setActiveToasts] = useState(0)

  useEffect(() => {
    if (location.state?.successMessage) {
      if (activeToasts < MAX_TOASTS) {
        setActiveToasts(prev => prev + 1)
        toast.success(location.state.successMessage);
      }
    }
  }, [location.state, activeToasts]);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.level.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.budget.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.posted.toLowerCase().includes(searchTerm.toLowerCase()) ||    
    job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.paymentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.rating.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.reviews.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const parsePostedDate = (posted) => {
    const timeMap = {
      'hour': 1,
      'day': 24,
      'week': 24 * 7,
      'month': 24 * 30,
      'year': 24 * 365
    };

    const [amount, unit] = posted.split(' ');
    const hours = parseInt(amount) * timeMap[unit.replace(/s$/, '')];
    return new Date(Date.now() - hours * 60 * 60 * 1000);
  };

  const toggleFavorite = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].favorite = !updatedJobs[index].favorite;
    setJobs(updatedJobs);
  };

  const sortedJobs = () => {
    switch (filterType) {
      case 'recent':
        return filteredJobs.sort((a, b) => parsePostedDate(b.posted) - parsePostedDate(a.posted));
      case 'saved':
        return filteredJobs.filter(job => job.favorite);
      default:
        return filteredJobs;
    }
  };

  return (
    <div className='bg-gray-100 overflow-hidden'>
      <div className='relative overflow-hidden'>
        <div className='bg-[#2942A5] h-[400px]' />
        <img src={BgImg} className='absolute -top-12 right-0 w-fit' alt="" />
      </div>
      <div className="max-w-7xl mx-auto -mt-72 xs:px-4 py-8 relative z-10">
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

              <JobList jobs={sortedJobs()} toggleFavorite={toggleFavorite} filterType={filterType} />
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
