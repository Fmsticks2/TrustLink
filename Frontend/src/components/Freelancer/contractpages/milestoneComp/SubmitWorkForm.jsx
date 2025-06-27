
// const SubmitWorkForm = ({ onCancel, onSubmit }) => {
//   return (
//     <div className="mb-4 p-4 border border-gray-200 rounded-md">
//       <h4 className="text-sm font-semibold text-gray-700 mb-2">Describe about the project</h4>
//       <textarea
//         className="w-full h-32 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//         placeholder="Write here"
//       />

//       <div className="mt-4">
//         <h4 className="text-sm font-semibold text-gray-700 mb-2">Attachments</h4>
//         <div className="border border-dashed border-gray-400 rounded-md p-6 text-center">
//           <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
//             <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4V12a4 4 0 014-4h16m32-4l-3.172 3.172a4 4 0 01-5.656 0L28 28M8 32l-3.172-3.172a4 4 0 01-5.656 0L20 20m32-4l-3.172 3.172a4 4 0 01-5.656 0L28 28M8 32l-3.172-3.172a4 4 0 01-5.656 0L20 20" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//           <p className="mt-1 text-sm text-gray-600">
//             Drag or upload project files
//           </p>
//           {/* You can add an actual file input here if needed */}
//         </div>
//       </div>

//       <div className="mt-4 flex gap-2 justify-end">
//         <button
//           onClick={onSubmit}
//           className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Submit work
//         </button>
//         <button
//           onClick={onCancel}
//           className="bg-white hover:bg-gray-100 border border-gray-300 text-indigo-600 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Message
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubmitWorkForm;

import React, { useState } from 'react';

const SubmitWorkForm = ({ onCancel, onSubmit }) => {
  const [description, setDescription] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle the submission logic here
    onSubmit();
  };

  const handleAttachmentChange = (event) => {
    // Handle file uploads
  };

  return (
    <div className="mt-6 p-6 bg-white border border-gray-200 rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Submit Work</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Describe about the project
          </label>
          <textarea
            id="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="attachments" className="block text-gray-700 text-sm font-bold mb-2">
            Attachments
          </label>
          <div className='shadow appearance-none border border-dashed focus:border-[#FF4C4A] cursor-pointer rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
            <input
              type="file"
              id="attachments"
              className="opacity-90 "
              onChange={handleAttachmentChange}
              multiple
            />            
          </div>

          <p className="text-gray-600 text-xs italic">Drag or upload project files</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit work
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitWorkForm;