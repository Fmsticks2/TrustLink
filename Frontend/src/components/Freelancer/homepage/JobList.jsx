import { StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const JobList = ({ jobs, toggleFavorite, filterType }) => {
  return (
    <div className="grid grid-cols-1 gap-4 bg-white shadow-md h-fit">
      {jobs.map((job, index) => (
        <Link to='/freelancer/jobposting' key={index} className="p-8 border-b-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold">{job.title}</h3>
            {filterType === 'recent' ? ('') 
            : (<StarIcon
                onClick={() => toggleFavorite(index)}
                className={`h-6 w-6 cursor-pointer ${job.favorite ? 'text-[#FF4C4A]' : 'text-gray-300'}`}
              />)
            }
          </div>
          <div className="text-sm text-gray-500">
            {job.type} - {job.level} - Est. Budget: {job.budget} - Posted {job.posted}
          </div>
          <p className="mt-2">{job.description}</p>
          <div className="flex flex-wrap items-center mt-2">
            <span className="font-semibold">{job.paymentType}</span>
            <div className="flex items-center ml-2">
              <span className='flex'>
                <StarIcon className={`h-3 ${job.rating >= 1 ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                <StarIcon className={`h-3 ${job.rating >= 2 ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                <StarIcon className={`h-3 ${job.rating >= 3 ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                <StarIcon className={`h-3 ${job.rating >= 4 ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                <StarIcon className={`h-3 ${job.rating >= 5 ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
              </span> 
              <span className="ml-1">({job.reviews})</span>
            </div>
            <div className="flex items-center ml-2">
              <span>{job.location}</span>
            </div>
          </div>
          <a href="#" className="text-blue-500">
            {job.moreLink}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default JobList;
