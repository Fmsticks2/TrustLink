import React from 'react';

const ReviewContract = () => {
  // Placeholder data - replace with your actual data
  const jobTitle = 'Need Web developer for figma';
  const jobDescription = `Hi, "This post is to search for Russian Preschool Lesson Planner I am looking for someone who has good experience in formulating lesson plans for formative years (Kindergarten / Preschool). We have a set of 100s of works sheets and study materials for 3-6yrs age group and we need help to look at those worksheets and group them in lessons / categories which the kid's of parents can identify with."`;
  const totalAmount = '$1000';
  const dueDate = '29 march 2022';
  const milestone = {
    description: 'Initails design',
    amount: '$500',
    dueDate: '29 march 2022',
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 mt-32">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-4">
          <button className="text-gray-600 hover:text-gray-800">
            &lt; Back
          </button>
          <h2 className="text-xl font-semibold ml-4">Review contract</h2>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <p className="text-gray-700 mb-2">{jobTitle}</p>
          <p className="text-gray-600 text-sm">{jobDescription}</p>
        </div>

        {/* Contract Details */}
        <div className="flex justify-between mb-4 text-sm">
          <div>
            <p className="text-gray-700">Total amount</p>
            <p className="font-semibold">{totalAmount}</p>
          </div>
          <div>
            <p className="text-gray-700">Due Date</p>
            <p className="font-semibold">{dueDate}</p>
          </div>
        </div>

        {/* Milestone */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Milestone 01</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-700">Description</p>
              <p className="font-semibold">{milestone.description}</p>
            </div>
            <div>
              <p className="text-gray-700">Amount</p>
              <p className="font-semibold">{milestone.amount}</p>
            </div>
            <div>
              <p className="text-gray-700">Due date</p>
              <p className="font-semibold">{milestone.dueDate}</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Accept
          </button>
          <button className="bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Request revision
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewContract;