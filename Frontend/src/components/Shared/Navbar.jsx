import { useState } from 'react';
import {BellIcon, MagnifyingGlassIcon} from '@heroicons/react/20/solid';
import { Menu } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import UserImg from '../../assets/profile.svg';
import { CgLogOut } from 'react-icons/cg';
import { useOnboarding } from '../../context/OnboardingContext';
import toast from 'react-hot-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const navigate = useNavigate();
  const { formData } = useOnboarding();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Clear user data/token
    localStorage.removeItem('token');
    navigate('/login');
  };

  const formType = () => {
    // if (!formData.userType) {
    //   toast.dismiss(); // Dismiss any existing toasts
    //   toast.error('Please login');
    //   return;
    // } else if (formData.userType === 'client') {
    //   navigate('/client/invite');
    // } else if (formData.userType === 'freelancer') {
    //   navigate('/freelancer/profile');
    // }
    navigate('/freelancer/profile');
  };

  return (
    <nav className="fixed top-0 w-full bg-[#1F1F1F] text-white z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center pt-8 pb-5 px-5">

      {/* Left Section */}
        <div className="left flex items-center gap-4">
          {/* Logo */}
      
          <Link to={'/'} className="logo text-2xl font-normal">
            <span className='font-[900]	'>Trust</span>Link
          </Link>

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
              <Link to='/freelancer/review_contract' className="font-semibold hover:text-gray-300 text-md lg:text-md">
                Browse Projects
              </Link>
            </li>
            <li>
               <Link to="/freelancer/home" className="font-semibold hover:text-gray-300 text-md lg:text-md">
                My Jobs
              </Link>
            </li>
            <li>
              <Link to="/freelancer/milestonetracker" className="font-semibold hover:text-gray-300 text-md lg:text-md">
                Messages
              </Link>
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
                  src={UserImg}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                {hasNotifications && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      // to={formType()}
                      to="/freelancer/profile"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-3 text-sm text-gray-700`}
                    >
                      My Profile
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-3 text-sm text-gray-700`}
                    >
                      My Wallet
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#settings"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-3 text-sm text-gray-700`}
                    >
                      Settings
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-3 text-sm text-gray-700`}
                    >
                      Help & Support
                    </Link>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/login"
                      onClick={handleLogout}
                      className={`flex justify-between items-center ${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-3 text-sm text-gray-700`}
                    >
                      <span>Logout</span>
                      <CgLogOut />
                    </Link>
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

export default Navbar;
