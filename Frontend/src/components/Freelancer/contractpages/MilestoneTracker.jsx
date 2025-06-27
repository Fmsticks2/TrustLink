import React, { useEffect, useRef, useState } from 'react';
import ActiveContractsTab from './milestoneComp/ActiveContractsTab';
import FreeLancerImgBg from '../FreeLancerImgBg';
import SubmitWorkForm from './milestoneComp/SubmitWorkForm';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import SubmissionConfirmation from './milestoneComp/SubmissionConfirmation';
import { Link } from 'react-router-dom';


export const AwaitingMilestoneItem = ({ milestone, onAccept }) => {
  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-md">
      <h4 className="text-sm font-semibold text-gray-700">{milestone.title}</h4>
      <p className="text-gray-600 text-xs mt-1">{milestone.description}</p>
    </div>
  );
};

const PendingContractsList = ({ awaitingMilestones, onAccept }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4">Pending contracts (07)</h2>
    {awaitingMilestones.map((milestone) => (
      <div key={milestone.id} className="mb-4 p-4 border border-gray-200 rounded-md flex items-center justify-between gap-44">
        <div className='h-full'>
          <h4 className="text-sm font-bold">{milestone.title}</h4>
          <span className='text-xs text-gray-500'>{milestone.subtitle}</span>
          <p className="text-xs mt-1 max-h-20 overflow-scroll scrollbar-custom">{milestone.description}</p>
        </div>
        <div className='flex flex-col items-center gap-3'>
          <button
            onClick={() => onAccept(milestone.id)}
            className="bg-[#FF4C4A] hover:bg-red-500 text-white font-bold py-2 px-10 rounded-full text-xs"
          >
            Accept
          </button>
          <Link to='/freelancer/review_contract'>          
            <button
            onClick={() => onAccept(milestone.id)}
            className="bg-[#FF4C4A] hover:bg-red-500 text-white font-bold py-2 px-10 rounded-full text-xs"
          >
            Review
          </button>  
          </Link>
        
        </div>

      </div>
    ))}
  </div>
);

const WalletPendingScreen = ({ onWithdrawClick, pendingAmount, onBack }) => (
  <div className="mt-6">
    <div className="flex justify-between items-center mb-4">
      <button onClick={onBack} className="text-blue-500">&lt; Back</button>
      <h2 className="text-lg font-semibold">Freelancer wallet</h2>
      <div className="text-sm">Total balance : $ 10.00 USD</div>
    </div>
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex border-b border-gray-200">
        <button className="py-2 px-4 text-red-500 border-b-2 border-red-500 font-semibold">Pending</button>
        <button className="py-2 px-4 text-gray-500">Completed</button>
      </div>
      <div className="p-4">
        <div className="bg-gray-50 rounded-md p-4">
          <p className="text-sm">Amount : $ {pendingAmount}</p>
          <p className="text-sm text-gray-500">Date : 21-03-2022</p>
        </div>
        <button onClick={onWithdrawClick} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
          Withdraw amount
        </button>
      </div>
    </div>
  </div>
);

const EnterWithdrawalAmountScreen = ({ onCancel, onSubmit, onBack }) => {
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const handleWithdrawSubmit = () => {
    onSubmit(withdrawAmount);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="text-blue-500">&lt; Back</button>
        <h2 className="text-lg font-semibold">Freelancer wallet</h2>
        <div className="text-sm">Total balance : $ 10.00 USD</div>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex border-b border-gray-200">
          <button className="py-2 px-4 text-red-500 border-b-2 border-red-500 font-semibold">Pending</button>
          <button className="py-2 px-4 text-gray-500">Completed</button>
        </div>
        <div className="p-4">
          <label htmlFor="withdrawAmount" className="block text-gray-700 text-sm font-bold mb-2">
            Enter amount
          </label>
          <input
            type="number"
            id="withdrawAmount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="example: 100"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <div className="flex justify-end mt-4">
            <button onClick={onCancel} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded border mr-2">
              Cancel
            </button>
            <button onClick={handleWithdrawSubmit} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MilestoneTracker = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedContract, setSelectedContract] = useState('All');
  const [isSubmittingWork, setIsSubmittingWork] = useState(false);
  const [isWorkSubmitted, setIsWorkSubmitted] = useState(false);
  const contracts = [
    'All',
    'Russia - Research Support (Targeted Calling)'
  ];
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [currentPendingView, setCurrentPendingView] = useState('contractsList'); // 'contractsList', 'walletPending', 'enterWithdrawal'
  const [withdrawnAmount, setWithdrawnAmount] = useState(0);
  const [pendingWithdrawalAmount] = useState(400);
  const [completedWithdrawals, setCompletedWithdrawals] = useState([]);

  // Placeholder data for when "All" is selected
  const allContractsData = {
    title: 'All Active Contracts',
    clientName: 'Various Clients',
    budget: '$XXX',
    milestonesCount: 5,
    activeMilestones: [
      { id: 101, description: 'Milestone A1', nextPayment: '$50' },
      { id: 102, description: 'Milestone A2', nextPayment: '$75' },
    ],
    awaitingMilestones: [
      { 
        id: 103, 
        title: "Russian Preschool Content - Categorisation", 
        subtitle: "Fixed-price - Intermediate - Est. Budget: $2,000 - Posted 8 hours ago",
        description: "Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with.Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with.Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with.Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with." 
      },
      { 
        id: 104, 
        title: "HRussian Preschool Content - Categorisation",
        subtitle: "Fixed-price - Intermediate - Est. Budget: $2,000 - Posted 8 hours ago",
        description: "Hi, *This post is to search for Russian Preschool Lesson Planner* I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten/Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons/ categories which the kid's of parents can identify with. " },
    ],
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPendingView('contractsList'); // Reset pending view on tab change
  };

  const handleContractChange = (contract) => {
    setSelectedContract(contract);
    setIsSubmittingWork(true);
    setIsWorkSubmitted(false);
    setShowDropdown(false);
    setCurrentPendingView('contractsList'); // Reset pending view on contract change
  };

  const handleAcceptMilestone = (milestoneId) => {
    // Logic to handle accepting the milestone
    console.log(`Milestone ${milestoneId} accepted.`);
    setCurrentPendingView('walletPending');
  };

  const handleWithdrawAmountClick = () => {
    setCurrentPendingView('enterWithdrawal');
  };

  const handleWithdrawSubmit = (amount) => {
    const withdrawalAmount = parseFloat(amount);
    setWithdrawnAmount(withdrawalAmount);
    setCompletedWithdrawals([...completedWithdrawals, { amount: withdrawalAmount }]); // Add to the list
    setCurrentPendingView('contractsList');
    setActiveTab('completed');
    // In a real application, handle actual withdrawal logic
  };
  const handleWithdrawCancel = () => {
    setCurrentPendingView('walletPending');
  };

  const handleGoBackToPendingList = () => {
    setCurrentPendingView('contractsList');
  };

  const handleCancelSubmit = () => {
    setIsSubmittingWork(false);
  };

  const handleSubmitWork = () => {
    setIsWorkSubmitted(true);
    setIsSubmittingWork(false);
  };

  const handleResubmitWork = () => {
    setIsWorkSubmitted(false);
    setIsSubmittingWork(true);
  };

  const [activeContractData, setActiveContractData] = useState(allContractsData);

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

  return (
    <div className="bg-gray-100 overflow-hidden">
      <FreeLancerImgBg />
      <div className="max-w-6xl mx-auto -mt-64 xs:px-4 pb-32 relative z-10">
        <div className='text-white'>
          <Link to={"/freelancer/jobposting"}>
            <button className="mb-10">
              &lt; Back
            </button>          
          </Link>

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
                    onFocus={() => setShowDropdown(true)}
                    value={selectedContract}
                    readOnly
                    className="w-full text-left p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 flex justify-between items-center appearance-none bg-white hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:shadow-outline"
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
                          onClick={() => handleContractChange(contract)}
                        >
                          {contract}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className='border border-gray-200 w-full h-0 my-5' />

              {/* Render Content Based on Selection */}
              {selectedContract === 'All' && activeContractData && (
                <ActiveContractsTab
                  activeContract={activeContractData}
                  // onShowSubmitForm={handleShowSubmitForm}
                  onSubmit={handleSubmitWork}
                />
              )}

              {selectedContract !== 'All' && activeContractData && isSubmittingWork && !isWorkSubmitted && (
                <SubmitWorkForm onCancel={handleCancelSubmit} onSubmit={handleSubmitWork} />
              )}

              {selectedContract !== 'All' && isWorkSubmitted && (
                <SubmissionConfirmation onResubmit={handleResubmitWork} />
              )}
            </div>
          )}

          {/* Pending Contracts Content */}
          {activeTab === 'pending' && (
            <div>
              {currentPendingView === 'contractsList' && (
                <PendingContractsList
                  awaitingMilestones={activeContractData.awaitingMilestones}
                  onAccept={handleAcceptMilestone}
                />
              )}
              {currentPendingView === 'walletPending' && (
                <WalletPendingScreen
                  onWithdrawClick={handleWithdrawAmountClick}
                  pendingAmount={pendingWithdrawalAmount}
                  onBack={handleGoBackToPendingList}
                />
              )}
              {currentPendingView === 'enterWithdrawal' && (
                <EnterWithdrawalAmountScreen
                  onCancel={handleWithdrawCancel}
                  onSubmit={handleWithdrawSubmit}
                  onBack={handleGoBackToPendingList}
                />
              )}
            </div>
          )}

          {/* Completed Contracts Content */}
          {activeTab === 'completed' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Completed contracts (07)</h2>
              {completedWithdrawals.length > 0 ? (
                <ul>
                  {completedWithdrawals.map((withdrawal, index) => (
                    <li key={index} className="mb-2 p-4 border border-gray-200 rounded-md">
                      Withdrawal of ${withdrawal.amount} completed.
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No completed withdrawals yet.</p>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default MilestoneTracker;

// import { useEffect, useRef, useState } from 'react';
// import ActiveContractsTab from './milestoneComp/ActiveContractsTab';
// import FreeLancerImgBg from '../FreeLancerImgBg';
// import SubmitWorkForm from './milestoneComp/SubmitWorkForm';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import SubmissionConfirmation from './milestoneComp/SubmissionConfirmation';

// export const AwaitingMilestoneItem = ({ milestone }) => {
//   return (
//     <div className="mb-4 p-4 border border-gray-200 rounded-md">
//       <h4 className="text-sm font-semibold text-gray-700">{milestone.title}</h4>
//       <p className="text-gray-600 text-xs mt-1">{milestone.description}</p>
//     </div>
//   );
// };


// const MilestoneTracker = () => {
//   const [activeTab, setActiveTab] = useState('active');
//   const [selectedContract, setSelectedContract] = useState('All');
//   const [isSubmittingWork, setIsSubmittingWork] = useState(false);
//   const [isWorkSubmitted, setIsWorkSubmitted] = useState(false);
//   const contracts = [
//     'All', 
//     'Russia - Research Support (Targeted Calling)'
//   ]; // Example contracts
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);


//   // Placeholder data for the active contract
//   const activeContractData = {
//     title: 'Russia - Research Support (Targeted Calling)',
//     clientName: 'Anisur Rahman',
//     budget: '$400',
//     milestonesCount: 2,
//     activeMilestones: [
//       {
//         id: 1,
//         description: 'Milestone 01',
//         nextPayment: '$200',
//       },
//       {
//         id: 2,
//         description: 'Milestone 02',
//         nextPayment: '$200',
//       },
//     ],
//     awaitingMilestones: [
//       {
//         id: 3,
//         title: 'Initials design',
//         description: 'LoremLoremLorem LoremLoremLoremLorem Lorem',
//       },
//     ],
//   };

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const selectedContractData = selectedContract === 'All' ? activeContractData : null;

//   // const handleContractChange = (e) => {
//   //   setSelectedContract(e.target.value)
//   //   setShowDropdown(false)
//   // };

//   const handleContractSelect = (contract) => {
//     setIsSubmittingWork(true);
//     setSelectedContract(contract);
//     setShowDropdown(false);
//   }

//   const filteredContracts = contracts.filter(
//     (contract) => contract.toLowerCase().includes(selectedContract.toLowerCase())
//   )

//   // const handleKeyPress = (e) => {
//   //   if (e.key === 'Enter' && selectedContract.trim()) {
//   //     e.preventDefault();
//   //     handleContractChange(selectedContract.trim());
//   //   }
//   // };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // const handleShowSubmitForm = (milestoneId) => {
//   //   setIsSubmittingWork(true);
//   //   // You might want to store the current milestone ID if needed
//   // };

//   const handleCancelSubmit = () => {
//     setIsSubmittingWork(false);
//   };

//   const handleSubmitWork = () => {
//     // In a real application, you would handle the submission logic here
//     setIsWorkSubmitted(true);
//   };

//   const handleResubmitWork = () => {
//     setIsWorkSubmitted(false);
//     setIsSubmittingWork(true);
//   };


//   return (
//     <div className="bg-gray-100 overflow-hidden">
//       <FreeLancerImgBg />
//       <div className="max-w-6xl mx-auto -mt-64 xs:px-4 pb-32 relative z-10">
//         <div className='text-white'>
//           <button className="mb-10">
//             &lt; Back
//           </button>
//           {/* Header */}
//           <div className="mb-4 flex items-center">
//             <h1 className="text-xl font-semibold tracking-wide text-gray-200">My contracts</h1>
//             <div className="ml-auto text-gray-200 tracking-wide">
//               Total earnings : <span className="font-semibold text-white">$10.00 USD</span>
//             </div>              
//           </div>

//           {/* Contract Tabs */}
//           <div className="mb-4 border-b border-gray-500">
//             <nav className="-mb-px flex space-x-4 px-10">
//               <button
//                 onClick={() => handleTabChange('active')}
//                 className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === 'active'
//                     ? 'border-red-500 focus:outline-none'
//                     : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300 focus:outline-none'
//                 }`}
//               >
//                 Active contracts (02)
//               </button>
//               <button
//                 onClick={() => handleTabChange('pending')}
//                 className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === 'pending'
//                     ? 'border-red-500 focus:outline-none'
//                     : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300 focus:outline-none'
//                 }`}
//               >
//                 Pending contracts (07)
//               </button>
//               <button
//                 onClick={() => handleTabChange('completed')}
//                 className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
//                   activeTab === 'completed'
//                     ? 'border-red-500 focus:outline-none'
//                     : 'border-transparent text-gray-400 hover:text-white hover:border-gray-300 focus:outline-none'
//                 }`}
//               >
//                 Completed contracts (07)
//               </button>
//             </nav>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-md p-6 px-12 mx-auto">
//           {/* Active Contracts Content */}
//           {activeTab === 'active' && (
//             <div>
//               {/* Select Contract Dropdown */}
//               <div className='relative mb-4 flex items-center' ref={dropdownRef}>
//                 <span className="mr-2 text-sm text-gray-700">Select contract</span>
//                 <div className='relative w-64'>
//                   <input
//                     // onChange={handleContractChange}
//                     onFocus={() => setShowDropdown(true)}
//                     value={selectedContract}
//                     // onKeyPress={handleKeyPress}
//                     className="w-full text-left p-3 border border-gray-300focus:outline-none focus:ring-2 focus:ring-red-500 flex justify-between items-center appearance-none bg-white hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
//                   />
//                   <ChevronDownIcon 
//                     onClick={() => setShowDropdown(!showDropdown)}
//                     className="absolute right-3 top-3 h-5 w-5 text-gray-500 cursor-pointer"
//                   />

//                   {showDropdown && (
//                     <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 scrollbar-custom overflow-hidden">
//                       {contracts.map((contract) => (
//                         <div
//                           key={contract}
//                           className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
//                           onClick={() => handleContractSelect(contract)}
//                         >
//                           {contract}
//                         </div>
//                       ))}
//                     </div>
//                   )}                  
//                 </div>

//               </div>

//               <div className='border border-gray-200 w-full h-0 my-5' />

//               {/* Render Active Contracts Tab Content */}
//               {selectedContract == 'All' && selectedContractData && (
//                 <ActiveContractsTab
//                   selectedContract={selectedContract}
//                   activeContract={selectedContractData}
//                   isSubmittingWork={isSubmittingWork}
//                   isWorkSubmitted={isWorkSubmitted}
//                   onSubmitWork={handleSubmitWork}
//                   onResubmitWork={handleResubmitWork}
//                 />
//               )}

//               {selectedContract !== 'All' && !selectedContractData && isSubmittingWork && !isWorkSubmitted && (
//                 // !isSubmittingWork ? 'false': 'true'
//                 <SubmitWorkForm onCancel={handleCancelSubmit} onSubmit={handleSubmitWork} />
//               )}

//               {selectedContract !== 'All' && !selectedContractData && isWorkSubmitted && (
//                 <SubmissionConfirmation onResubmit={handleResubmitWork} />
//               )}
//             </div>
//           )}

//           {/* Pending and Completed Contracts Content (Will be implemented later) */}
//           {activeTab === 'pending' && <div>Content for pending contracts</div>}
//           {activeTab === 'completed' && <div>Content for completed contracts</div>}
//         </div>
//       </div>      
//     </div>

//   );
// };

// export default MilestoneTracker;