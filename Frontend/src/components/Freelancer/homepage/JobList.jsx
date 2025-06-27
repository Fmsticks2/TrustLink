import { StarIcon } from '@heroicons/react/20/solid';
import { FaDollarSign, FaLanguage } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, toggleFavorite = () => {}, filterType, onSkillClick = () => {} }) => {
  return (
    <div className="grid grid-cols-1 gap-4 bg-white shadow-md h-fit">
      {jobs.map((job) => (
        <div key={job.id} className="p-8 border-b-2">
          <div className="flex justify-between items-center">
            <Link to='/freelancer/proposal/' className='cursor-pointer'>
              <h3 className="text-lg font-bold">{job.title}</h3>
            </Link>
            {filterType !== 'search' && (
              <StarIcon
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(job.id);
                }}
                className={`h-6 w-6 cursor-pointer ${job.favorite ? 'text-[#FF4C4A]' : 'text-gray-300'}`}
              />
            )}
          </div>
          <Link to='/freelancer/proposal/' className='cursor-pointer'>
            <div className="text-sm text-gray-500">
              {job.type} - {job.level} - Est. Budget: {job.budget} - Posted {job.posted || 'Recently'}
            </div>
            <p className="mt-2">{job.description}</p>
            <div className="flex flex-wrap items-center mt-2">
              <span className="flex items-center">
                <FaDollarSign className='text-[#FF4C4A]' /> 
                {job.paymentType}
              </span>
              <div className="flex items-center ml-2">
                <span>{job.location}</span>
              </div>
              <div className="flex items-center ml-2">
                <FaLanguage className="text-blue-500 mr-1" />
                <span>{job.languages ? job.languages.join(", ") : "English"}</span>
              </div>
              <p className="text-sm text-gray-700 mt-2 w-full">
                Skills: {Array.isArray(job.skills) ? job.skills.map(skill => (
                  <span
                    key={skill}
                    onClick={() => onSkillClick(skill)}
                    className="text-blue-500 cursor-pointer hover:underline mr-2"
                  >
                    {skill}
                  </span>
                )) : "N/A"}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
