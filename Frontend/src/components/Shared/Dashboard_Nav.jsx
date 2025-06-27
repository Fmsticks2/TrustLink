import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Transition } from '@headlessui/react';
import { Link } from "react-router-dom";

const Dashboard_Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md pt-8 pb-5 px-6 md:px-12 fixed w-full z-30">
      <div className="w-full mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={`/`} className="text-2xl font-[900] text-red-500">
            TRUST<span className="font-thin">LINK</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">Find Talent</a>
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">Find Work</a>
            <a href="#" className="text-gray-700 hover:text-red-500 transition-colors">Why TrustLink</a>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-full px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-red-400"
              />
              <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Login & Sign Up */}
            <Link to='/login' className="text-gray-700 border px-4 py-2 rounded-full hover:text-red-500 transition-colors">Log in</Link>
            <Link to='/signup' className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">Sign up</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              ) : (
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="xl:hidden absolute top-18 left-0 right-0 z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg shadow-lg mt-4">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">
                Find Talent
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">
                Find Work
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">
                Why Trustlink
              </a>
              
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                  <FiSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
                </div>
              </div>
              
              {/* Mobile Auth Buttons */}
              <div className="px-3 py-2 space-y-2">
                <Link to={`/login`} className="block text-center px-3 py-2 rounded-md border text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50">
                  Log in
                </Link>
                <Link to={`/signup`} className="block text-center px-3 py-2 rounded-md text-base font-medium bg-red-500 text-white hover:bg-red-600">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Dashboard_Nav;
