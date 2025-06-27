import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchJobs = ({ searchTerm, setSearchTerm, className = "" }) => {
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className={`${className}`}>
      <div className="flex justify-between items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="absolute flex justify-center items-center gap-2 right-0 top-0 bg-red-500 p-3 rounded-r-lg text-white">
            <MagnifyingGlassIcon className="w-5 h-5 text-white" />
            Search
          </button>
        </div>
      </div>
      <p className="mt-2 text-sm sr-only">Advanced Search</p>
    </div>
  );
};

export default SearchJobs;
