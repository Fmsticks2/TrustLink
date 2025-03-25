import { useEffect, useRef, useState } from 'react';
import ActiveContractsTab from './milestoneComp/ActiveContractsTab';
import FreeLancerImgBg from '../FreeLancerImgBg';
import SubmitWorkForm from './milestoneComp/SubmitWorkForm';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import SubmissionConfirmation from './milestoneComp/SubmissionConfirmation';

export const AwaitingMilestoneItem = ({ milestone }) => {
  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-md">
      <h4 className="text-sm font-semibold text-gray-700">{milestone.title}</h4>
      <p className="text-gray-600 text-xs mt-1">{milestone.description}</p>
    </div>
  );
};


const MyContractsPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedContract, setSelectedContract] = useState('All');
  const [isSubmittingWork, setIsSubmittingWork] = useState(false);
  const [isWorkSubmitted, setIsWorkSubmitted] = useState(false);
  const contracts = [
    'All', 
    'Russia - Research Support (Targeted Calling)'
  ]; // Example contracts
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);


  // Placeholder data for the active contract
  const activeContractData = {
    title: 'Russia - Research Support (Targeted Calling)',
    clientName: 'Anisur Rahman',
    budget: '$400',
    milestonesCount: 2,
    activeMilestones: [
      {
        id: 1,
        description: 'Milestone 01',
        nextPayment: '$200',
      },
      {
        id: 2,
        description: 'Milestone 02',
        nextPayment: '$200',
      },
    ],
    awaitingMilestones: [
      {
        id: 3,
        title: 'Initials design',
        description: 'LoremLoremLorem LoremLoremLoremLorem Lorem',
      },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const selectedContractData = selectedContract === 'All' ? activeContractData : null;

  // const handleContractChange = (e) => {
  //   setSelectedContract(e.target.value)
  //   setShowDropdown(false)
  // };

  const handleContractSelect = (contract) => {
    setIsSubmittingWork(true);
    setSelectedContract(contract);
    setShowDropdown(false);
  }

  const filteredContracts = contracts.filter(
    (contract) => contract.toLowerCase().includes(selectedContract.toLowerCase())
  )

  // const handleKeyPress = (e) => {
  //   if (e.key === 'Enter' && selectedContract.trim()) {
  //     e.preventDefault();
  //     handleContractChange(selectedContract.trim());
  //   }
  // };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // const handleShowSubmitForm = (milestoneId) => {
  //   setIsSubmittingWork(true);
  //   // You might want to store the current milestone ID if needed
  // };

  const handleCancelSubmit = () => {
    setIsSubmittingWork(false);
  };

  const handleSubmitWork = () => {
    // In a real application, you would handle the submission logic here
    setIsWorkSubmitted(true);
  };

  const handleResubmitWork = () => {
    setIsWorkSubmitted(false);
    setIsSubmittingWork(true);
  };


  return (
    <div className="bg-gray-100 overflow-hidden">
      <FreeLancerImgBg />
      <div className="max-w-6xl mx-auto -mt-64 xs:px-4 pb-32 relative z-10">
        <div className='text-white'>
          <button className="mb-10">
            &lt; Back
          </button>
          {/* Header */}
          <div className="mb-4 flex items-center">
            <h1 className="text-xl font-semibold tracking-wide text-gray-200">My contracts</h1>
            <div className="ml-auto text-gray-200 tracking-wide">
              Total earnings : <span className="font-semibold text-white">$10.00 USD</span>
            </div>              
          </div>

          {/* Contract Tabs */}
          <div className="mb-4 border-b border-gray-500">
            <nav className="-mb-px flex space-x-4 px-10">
              <button
                onClick={() => handleTabChange('active')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'active'
                    ? 'border-red-500 focus:outline-none'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300 focus:outline-none'
                }`}
              >
                Active contracts (02)
              </button>
              <button
                onClick={() => handleTabChange('pending')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-red-500 focus:outline-none'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300 focus:outline-none'
                }`}
              >
                Pending contracts (07)
              </button>
              <button
                onClick={() => handleTabChange('completed')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-red-500 focus:outline-none'
                    : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300 focus:outline-none'
                }`}
              >
                Completed contracts (07)
              </button>
            </nav>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 px-12 mx-auto">
          {/* Active Contracts Content */}
          {activeTab === 'active' && (
            <div>
              {/* Select Contract Dropdown */}
              <div className='relative mb-4 flex items-center' ref={dropdownRef}>
                <span className="mr-2 text-sm text-gray-700">Select contract</span>
                <div className='relative w-64'>
                  <input
                    // onChange={handleContractChange}
                    onFocus={() => setShowDropdown(true)}
                    value={selectedContract}
                    // onKeyPress={handleKeyPress}
                    className="w-full text-left p-3 border border-gray-300focus:outline-none focus:ring-2 focus:ring-red-500 flex justify-between items-center appearance-none bg-white hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ChevronDownIcon 
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="absolute right-3 top-3 h-5 w-5 text-gray-500 cursor-pointer"
                  />

                  {showDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 scrollbar-custom overflow-hidden">
                      {contracts.map((contract) => (
                        <div
                          key={contract}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
                          onClick={() => handleContractSelect(contract)}
                        >
                          {contract}
                        </div>
                      ))}
                    </div>
                  )}                  
                </div>

              </div>

              <div className='border border-gray-200 w-full h-0 my-5' />

              {/* Render Active Contracts Tab Content */}
              {selectedContract == 'All' && selectedContractData && (
                <ActiveContractsTab
                  selectedContract={selectedContract}
                  activeContract={selectedContractData}
                  isSubmittingWork={isSubmittingWork}
                  isWorkSubmitted={isWorkSubmitted}
                  onSubmitWork={handleSubmitWork}
                  onResubmitWork={handleResubmitWork}
                />
              )}

              {selectedContract !== 'All' && !selectedContractData && isSubmittingWork && !isWorkSubmitted && (
                // !isSubmittingWork ? 'false': 'true'
                <SubmitWorkForm onCancel={handleCancelSubmit} onSubmit={handleSubmitWork} />
              )}

              {selectedContract !== 'All' && !selectedContractData && isWorkSubmitted && (
                <SubmissionConfirmation onResubmit={handleResubmitWork} />
              )}
            </div>
          )}

          {/* Pending and Completed Contracts Content (Will be implemented later) */}
          {activeTab === 'pending' && <div>Content for pending contracts</div>}
          {activeTab === 'completed' && <div>Content for completed contracts</div>}
        </div>
      </div>      
    </div>

  );
};

export default MyContractsPage;