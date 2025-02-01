import { useEffect, useRef, useState } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';
import { CgTrash } from 'react-icons/cg';

const ExperienceStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [experiences, setExperiences] = useState(formData.experiences || []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasNoExperience, setHasNoExperience] = useState(formData.hasNoExperience || false);
  const dropdownRef = useRef(null);


  const experienceOptions = [
    'Junior Developer (1-3 years)',
    'Senior Developer (3-5 years)',
    'Lead Developer (5+ years)',
    'UI/UX Designer (2-4 years)',
    'Product Manager (3+ years)',
  ];

  const handleAddExperience = (experience) => {
    const newExperiences = [...experiences, experience];
    setExperiences(newExperiences);
    updateFormData({ 
      experiences: newExperiences, 
      hasNoExperience: false 
    });
    setShowDropdown(false);
    setHasNoExperience(false);
  };

  const handleRemoveExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(newExperiences);
    updateFormData({ experiences: newExperiences });
  };

  const handleNoExperience = (e) => {
    setHasNoExperience(e.target.checked);
    if (e.target.checked) {
      setExperiences([]);
      updateFormData({ experiences: [], hasNoExperience: true });
    }
  };

  const canProceed = experiences.length > 0 || hasNoExperience;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
        <h2 className="text-2xl font-semibold">Add work your experiences.</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.
        </p>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full text-left p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 flex justify-between items-center"
          >
            <span className="text-red-500 m-auto">+ Add Experience</span>
          </button>

          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-custom">
              {experienceOptions.map((exp) => (
                <div
                  key={exp}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddExperience(exp)}
                >
                  {exp}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <div key={index} className="flex justify-between items-center p-3 rounded-lg">
              <span>{exp}</span>
              <button
                onClick={() => handleRemoveExperience(index)}
                className="text-red-500 hover:text-red-600"
              >
                <CgTrash />
              </button>
            </div>
          ))}
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={hasNoExperience}
            onChange={handleNoExperience}
            className="form-checkbox cursor-pointer accent-red-500 text-red-500"
          />
          <span className="text-gray-700">No experience yet</span>
        </label>
      </div>

      <button
        onClick={nextStep}
        disabled={!canProceed}
        className={`w-72 flex justify-center justify-self-center py-3 rounded-full transition-colors ${
          canProceed 
            ? 'bg-red-500 hover:bg-red-600 text-white' 
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default ExperienceStep; 