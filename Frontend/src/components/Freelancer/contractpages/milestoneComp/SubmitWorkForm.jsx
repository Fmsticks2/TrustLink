
const SubmitWorkForm = ({ onCancel, onSubmit }) => {
  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-md">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">Describe about the project</h4>
      <textarea
        className="w-full h-32 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Write here"
      />

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Attachments</h4>
        <div className="border border-dashed border-gray-400 rounded-md p-6 text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4V12a4 4 0 014-4h16m32-4l-3.172 3.172a4 4 0 01-5.656 0L28 28M8 32l-3.172-3.172a4 4 0 01-5.656 0L20 20m32-4l-3.172 3.172a4 4 0 01-5.656 0L28 28M8 32l-3.172-3.172a4 4 0 01-5.656 0L20 20" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="mt-1 text-sm text-gray-600">
            Drag or upload project files
          </p>
          {/* You can add an actual file input here if needed */}
        </div>
      </div>

      <div className="mt-4 flex gap-2 justify-end">
        <button
          onClick={onSubmit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit work
        </button>
        <button
          onClick={onCancel}
          className="bg-white hover:bg-gray-100 border border-gray-300 text-indigo-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Message
        </button>
      </div>
    </div>
  );
};

export default SubmitWorkForm;