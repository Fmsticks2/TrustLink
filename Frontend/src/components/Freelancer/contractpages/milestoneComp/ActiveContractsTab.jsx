import React, { useState } from 'react';
import { AwaitingMilestoneItem } from '../MilestoneTracker';
import SubmissionConfirmation from './SubmissionConfirmation';
import SubmitWorkForm from './SubmitWorkForm';
import ActiveMilestoneItem from './ActiveMilestoneItem';



const ActiveContractsTab = ({ selectedContract, activeContract, isSubmittingWork, isWorkSubmitted, onSubmitWork, onResubmitWork }) => {
  const [milestoneTab, setMilestoneTab] = useState('active');

  const handleMilestoneTabChange = (tab) => {
    setMilestoneTab(tab);
  };

  if (!activeContract) {
    return <p className="text-gray-600 text-sm">No contract selected.</p>;
  }

  return (
    <div>
      {/* Contract Details */}
      <div className="mb-6 p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{activeContract.title} <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-500 border border-red-500">Fixed rate</span></h3>
        <p className="text-gray-600 text-sm mb-1"><b>Client name : </b>{activeContract.clientName}</p>
        <p className="text-gray-600 text-sm">Budget : <span className="font-semibold text-black">{activeContract.budget}</span> | {activeContract.milestonesCount} milestones</p>

        <div className='border border-gray-200 w-full h-0 my-5' />

        {/* Active and Awaiting Milestones Tabs */}
        <div className="mt-4 border-b border-gray-200">
          <nav className="-mb-px flex space-x-4">
            <button
              onClick={() => handleMilestoneTabChange('active')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                milestoneTab === 'active'
                  ? 'border-red-500 focus:outline-none'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-red-300 focus:outline-none'
              }`}
            >
              Active milestones ({activeContract.activeMilestones.length})
            </button>
            <button
              onClick={() => handleMilestoneTabChange('awaiting')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                milestoneTab === 'awaiting'
                  ? 'border-red-500 focus:outline-none'
                  : 'border-transparent text-gray-400 hover:text-black hover:border-red-300 focus:outline-none'
              }`}
            >
              Awaiting milestones ({activeContract.awaitingMilestones.length})
            </button>
          </nav>
        </div>

        {/* Active Milestones Content */}
        {milestoneTab === 'active' && !isSubmittingWork && !isWorkSubmitted && activeContract.activeMilestones.length > 0 && (
          <div className="mt-4">
            {activeContract.activeMilestones.map((milestone) => (
              <ActiveMilestoneItem
                key={milestone.id}
                milestone={milestone}
                onShowSubmitForm={onSubmitWork}
              />
            ))}
          </div>
        )}

        {/* Show Submit Work Form */}
        {milestoneTab === 'active' && isSubmittingWork && !isWorkSubmitted && (
          <SubmitWorkForm onCancel={onCancelSubmit} onSubmit={onSubmitWork} />
        )}

        {/* Show Submission Confirmation */}
        {milestoneTab === 'active' &&  isSubmittingWork && !isWorkSubmitted && (
          <SubmissionConfirmation onResubmit={onResubmitWork} />
        )}

        {/* Awaiting Milestones Content */}
        {milestoneTab === 'awaiting' && activeContract.awaitingMilestones.length > 0 && (
          <div className="mt-4">
            {activeContract.awaitingMilestones.map((milestone) => (
              <AwaitingMilestoneItem key={milestone.id} milestone={milestone} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveContractsTab;