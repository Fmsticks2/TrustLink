import React from 'react';

const SearchJobs = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mt-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Jobs"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
};
export default SearchJobs;
