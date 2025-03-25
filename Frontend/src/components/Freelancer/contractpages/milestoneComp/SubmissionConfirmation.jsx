
const SubmissionConfirmation = ({ onResubmit }) => {
  const submittedDescription = 'LoremLoremLorem Lorem LoremLoremLorem Lorem';

  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-md">
      <h4 className="text-sm font-semibold text-gray-700">Milestone 01</h4>
      <div className="mt-2 text-green-600 font-semibold">Work submitted</div>
      <p className="text-gray-600 text-xs mt-2">{submittedDescription}</p>
      <button
        onClick={onResubmit}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Resubmit work
      </button>
    </div>
  );
};

export default SubmissionConfirmation;