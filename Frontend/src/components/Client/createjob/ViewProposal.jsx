import { ArrowLeftIcon, StarIcon } from '@heroicons/react/24/outline';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProposalsByJob, acceptProposal } from '../../../services/api';
import { toast } from 'react-hot-toast';

function ViewProposal() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleHire = async (proposalId) => {
    try {
      await acceptProposal(proposalId);
      toast.success('Proposal accepted successfully!');
      navigate('/client/contracts');
    } catch (error) {
      console.error('Error accepting proposal:', error);
      toast.error(error.message || 'Failed to accept proposal');
    }
  };

  useEffect(() => {
    const fetchProposals = async () => {
      try {
        const data = await getProposalsByJob(jobId);
        setProposals(data);
      } catch (error) {
        console.error('Error fetching proposals:', error);
        toast.error(error.message || 'Failed to fetch proposals');
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, [jobId]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (!proposals.length) return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/client/home" className="flex items-center text-gray-600 mb-6">
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Dashboard
      </Link>
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-700">No proposals yet</h2>
        <p className="text-gray-500 mt-2">Check back later for new proposals</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/client/home" className="flex items-center text-gray-600 mb-6">
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Dashboard
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Proposals ({proposals.length})</h1>

          <div className="space-y-6">
            {proposals.map((proposal) => (
              <div key={proposal.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{proposal.freelancer.name}</h3>
                    <p className="text-gray-600">{proposal.freelancer.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">${proposal.bidAmount}</p>
                    <p className="text-gray-500">{proposal.deliveryTime} days delivery</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Cover Letter</h4>
                  <p className="text-gray-700">{proposal.coverLetter}</p>
                </div>

                {proposal.milestones && proposal.milestones.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Milestones</h4>
                    <div className="space-y-2">
                      {proposal.milestones.map((milestone, index) => (
                        <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                          <span className="text-gray-700">{milestone.description}</span>
                          <span className="font-medium">${milestone.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <StarIcon
                          key={index}
                          className={`w-5 h-5 ${index < (proposal.freelancer.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-gray-600">
                        {proposal.freelancer.rating || 0} ({proposal.freelancer.reviews || 0} reviews)
                      </span>
                    </div>
                  </div>
                  <div className="space-x-3">
                    <button
                      className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors"
                      onClick={() => window.location.href = `mailto:${proposal.freelancer.email}`}
                    >
                      Contact
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                      onClick={() => handleHire(proposal.id)}
                    >
                      Hire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );


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