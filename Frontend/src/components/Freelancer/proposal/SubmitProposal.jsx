import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-hot-toast";
import { useState, useEffect } from 'react';
import { submitProposal, getJobById } from '../../../services/api';

function SubmitProposal() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [loading, setLoading] = useState(false);
  const [job, setJob] = useState(null);
  const [proposalData, setProposalData] = useState({
    coverLetter: '',
    bidAmount: '',
    deliveryTime: '',
    milestones: []
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobData = await getJobById(jobId);
        setJob(jobData);
      } catch (error) {
        console.error('Error fetching job:', error);
        toast.error('Failed to load job details');
        navigate('/freelancer/searchjob');
      }
    };
    fetchJob();
  }, [jobId, navigate]);

  const validateProposal = () => {
    if (!proposalData.coverLetter.trim()) {
      toast.error('Please write a cover letter');
      return false;
    }
    if (!proposalData.bidAmount || proposalData.bidAmount <= 0) {
      toast.error('Please enter a valid bid amount');
      return false;
    }
    if (!proposalData.deliveryTime || proposalData.deliveryTime <= 0) {
      toast.error('Please enter a valid delivery time');
      return false;
    }
    if (proposalData.milestones.length > 0) {
      const totalMilestoneAmount = proposalData.milestones.reduce(
        (sum, milestone) => sum + Number(milestone.amount), 0
      );
      if (totalMilestoneAmount !== Number(proposalData.bidAmount)) {
        toast.error('Total milestone amounts must equal the bid amount');
        return false;
      }
      const invalidMilestone = proposalData.milestones.find(
        milestone => !milestone.description.trim() || !milestone.amount || milestone.amount <= 0
      );
      if (invalidMilestone) {
        toast.error('Please fill in all milestone details correctly');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateProposal()) return;

    setLoading(true);
    try {
      await submitProposal({
        jobId,
        ...proposalData
      });
      toast.success('Proposal submitted successfully!');
      navigate('/freelancer/searchjob');
    } catch (error) {
      console.error('Proposal submission error:', error);
      toast.error(error.message || 'Failed to submit proposal');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProposalData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMilestoneAdd = () => {
    if (proposalData.milestones.length >= 5) {
      toast.error('Maximum 5 milestones allowed');
      return;
    }
    setProposalData(prev => ({
      ...prev,
      milestones: [...prev.milestones, { description: '', amount: '' }]
    }));
  };

  const handleMilestoneChange = (index, field, value) => {
    setProposalData(prev => ({
      ...prev,
      milestones: prev.milestones.map((milestone, i) => 
        i === index ? { ...milestone, [field]: value } : milestone
      )
    }));
  };

  const handleMilestoneRemove = (index) => {
    setProposalData(prev => ({
      ...prev,
      milestones: prev.milestones.filter((_, i) => i !== index)
    }));
  };

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading job details...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <Link to="/freelancer/searchjob" className="flex items-center text-gray-600 mb-6">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Jobs
          </Link>

          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
            <p className="text-gray-600">{job.description}</p>
            <div className="mt-2">
              <span className="font-semibold">Budget:</span> ${job.budget}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                value={proposalData.coverLetter}
                onChange={handleChange}
                rows="6"
                className="w-full border rounded-lg p-3"
                placeholder="Introduce yourself and explain why you're the best fit for this job..."
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bid Amount (USD)
                </label>
                <input
                  type="number"
                  name="bidAmount"
                  value={proposalData.bidAmount}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                  placeholder="Enter your bid amount"
                  required
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Delivery Time (Days)
                </label>
                <input
                  type="number"
                  name="deliveryTime"
                  value={proposalData.deliveryTime}
                  onChange={handleChange}
                  className="w-full border rounded-lg p-3"
                  placeholder="Enter delivery time in days"
                  required
                  min="1"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Milestones (Optional)
                </label>
                <button
                  type="button"
                  onClick={handleMilestoneAdd}
                  className="text-blue-600 hover:text-blue-800"
                >
                  + Add Milestone
                </button>
              </div>

              {proposalData.milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4 mb-4">
                  <input
                    type="text"
                    value={milestone.description}
                    onChange={(e) => handleMilestoneChange(index, 'description', e.target.value)}
                    className="flex-grow border rounded-lg p-3"
                    placeholder="Milestone description"
                    required
                  />
                  <input
                    type="number"
                    value={milestone.amount}
                    onChange={(e) => handleMilestoneChange(index, 'amount', e.target.value)}
                    className="w-32 border rounded-lg p-3"
                    placeholder="Amount"
                    required
                    min="1"
                  />
                  <button
                    type="button"
                    onClick={() => handleMilestoneRemove(index)}
                    className="text-red-600 hover:text-red-800 px-2"
                  >
                    ×
                  </button>
                </div>
              ))}

              {proposalData.milestones.length > 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  Total milestone amount: ${proposalData.milestones.reduce((sum, m) => sum + Number(m.amount || 0), 0)}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg transition-colors ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {loading ? 'Submitting...' : 'Submit Proposal'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitProposal;