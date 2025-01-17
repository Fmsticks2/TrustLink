import React, { useState } from 'react';
import {BellIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import { Menu } from '@headlessui/react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1F1F1F] text-white z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center  px-6 py-4 lg:py-3">

      {/* Left Section */}
        <div className="left flex items-center gap-4">
              {/* Logo */}
      
        <a href="#" className="logo text-[20px] font-normal">
        <span className='font-extrabold	'>Trust</span>Link</a>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-[#494A4D] rounded-full px-4 py-2 w-64">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow bg-transparent text-white placeholder-white outline-none"
            />
            <MagnifyingGlassIcon className="w-6 h-6 text-white" />
          </div>
        </div>
    
  
    

  

   


        {/* Navigation Links */}
        <div
          className={`transition-transform transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed top-0 right-0 h-screen w-[60%] bg-[rgb(20,20,20)] backdrop-blur-md flex flex-col items-start gap-8 p-6 lg:p-0 lg:bg-transparent  lg:static lg:flex-row lg:translate-x-0  lg:h-full lg:items-center lg:justify-between `}
        >
          <ul className="flex flex-col gap-6 mt-[2em] lg:flex-row lg:gap-8 lg:mt-0">
            <li>
              <a href="#" className="font-semibold  text-[16px] hover:text-gray-300 text-xl lg:text-2xl">
                Browse Projects
              </a>
            </li>
            <li>
               <a href="#" className="font-semibold  text-[16px] hover:text-gray-300 text-xl lg:text-2xl">
                My Jobs
              </a>
            </li>
            <li>
              <a href="#" className="font-semibold  text-[16px] hover:text-gray-300 text-xl lg:text-2xl">
                Messages
              </a>
            </li>
          </ul>


{/* Notifcation Icon */}
          <ul className='flex flex-row gap-6 items-center justify-between'>
           
        <div className="relative">
  
      <BellIcon className="h-8 w-8 text-black stroke-white " />

      {/* Red Dot for Notifications */}
      {hasNotifications && (
        <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"></span>
      )}
    </div>
    
       {/* Profile Dropdown */}
       <Menu as="div" className="relative">
          <Menu.Button className="flex items-center space-x-2">
            <img
              src="profile.svg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
             {hasNotifications && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
      )}
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#profile"
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } block px-4 py-2 text-sm text-gray-700`}
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#settings"
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } block px-4 py-2 text-sm text-gray-700`}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#logout"
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } block px-4 py-2 text-sm text-gray-700`}
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>

          </ul>

       




        </div>

        {/* Hamburger Button */}
        <button
          className="lg:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;
