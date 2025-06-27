const ActiveMilestoneItem = ({ milestone, onShowSubmitForm, onSubmit }) => {
  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-md">
      <h4 className="text-sm font-semibold text-gray-700">{milestone.description}</h4>
      <p className="text-gray-600 text-xs mt-1">Next milestone to be paid : <span className="font-semibold">{milestone.nextPayment}</span></p>
      <p className="text-indigo-600 text-sm mt-2">Submit work for next milestone</p>
      <div className="mt-2 flex gap-2">
        <button
          // onClick={() => onShowSubmitForm(milestone.id)} // Pass milestone ID if needed
          onClick={onSubmit}
          // onClick={() => alert()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        > 
          Submit work
        </button>
        <button className="bg-white hover:bg-gray-100 border border-gray-300 text-indigo-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Message
        </button>
      </div>
    </div>
  );
};

export default ActiveMilestoneItem;