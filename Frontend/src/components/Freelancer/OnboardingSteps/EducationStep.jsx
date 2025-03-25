import { useEffect, useRef, useState } from 'react';
import { useOnboarding } from '../../../context/OnboardingContext';
import { CgTrash } from 'react-icons/cg';

const EducationStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [educations, setEducations] = useState(formData.education || []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [hasNoEducation, setHasNoEducation] = useState(formData.hasNoEducation || false);
  const dropdownRef = useRef(null);
  

  const educationLevels = [
    'High School Diploma',
    'Associate Degree',
    "Bachelor's Degree",
    "Master's Degree",
    'Ph.D.',
    'Diploma',
    'Certification',
  ];

  const handleAddEducation = (education) => {
    const newEducations = [...educations, education];
    setEducations(newEducations);
    updateFormData({ education: newEducations, hasNoEducation: false });
    setShowDropdown(false);
    setHasNoEducation(false);
  };

  const handleRemoveEducation = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    setEducations(newEducations);
    updateFormData({ education: newEducations });
  };

  const handleNoEducation = (e) => {
    setHasNoEducation(e.target.checked);
    if (e.target.checked) {
      setEducations([]);
      updateFormData({ education: [], hasNoEducation: true });
    }
  };

  const canProceed = educations.length > 0 || hasNoEducation;

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
        <h2 className="text-2xl font-semibold">Let us know about your education.</h2>
        <p className="text-gray-600">Example: Bachelor's in Computer Science</p>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full text-left p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 flex justify-between items-center"
          >
            <span className="text-red-500 m-auto">+ Add Education</span>
          </button>

          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-custom">
              {educationLevels.map((edu) => (
                <div
                  key={edu}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddEducation(edu)}
                >
                  {edu}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-2">
          {educations.map((edu, index) => (
            <div key={index} className="flex justify-between items-center p-3 rounded-lg">
              <span>{edu}</span>
              <button
                onClick={() => handleRemoveEducation(index)}
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
            checked={hasNoEducation}
            onChange={handleNoEducation}
            className="form-checkbox cursor-pointer text-red-500 accent-red-500"
          />
          <span className="text-gray-700">No education</span>
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

export default EducationStep; 