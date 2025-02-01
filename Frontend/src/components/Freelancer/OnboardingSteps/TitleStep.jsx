import { useState, useEffect, useRef } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';
import { CgSelect } from 'react-icons/cg';

const TitleStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [title, setTitle] = useState(formData.title || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  const jobTitles = [
    'Web Developer',
    'Graphic Designer',
    'Content Writer',
    'Digital Marketer',
    'UI/UX Designer',
    'Mobile App Developer',
    'Data Analyst',
  ];

  const handleTitleSelect = (selectedTitle) => {
    setTitle(selectedTitle);
    updateFormData({ title: selectedTitle });
    setShowDropdown(false);
  };

  const handleCustomTitle = (e) => {
    setTitle(e.target.value);
    updateFormData({ title: e.target.value });
    setShowDropdown(false); // Hide dropdown when typing
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">First, add a title to tell the world what you do.</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </p>

        <div className="relative" ref={inputRef}>
          <input
            type="text"
            value={title}
            onChange={handleCustomTitle}
            onFocus={() => setShowDropdown(true)}
            placeholder="Example: Web developer | Web & Mobile"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <CgSelect
            onClick={() => setShowDropdown(!showDropdown)}
            className="absolute right-3 top-3 h-5 w-5 text-gray-500 cursor-pointer"
          />

          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-custom pr-5">
              {jobTitles.map((jobTitle) => (
                <div
                  key={jobTitle}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleTitleSelect(jobTitle)}
                >
                  {jobTitle}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={nextStep}
        disabled={!title.trim()}
        className={`w-72 flex justify-center justify-self-center py-3 rounded-full transition-colors ${
          title.trim() 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default TitleStep;