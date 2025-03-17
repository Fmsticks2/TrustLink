import { useOnboarding } from '../../../context/OnboardingContext';
import { useState } from 'react';

const SkillsStep = ({ nextStep }) => {
  const { formData, updateFormData } = useOnboarding();
  const [skills, setSkills] = useState(formData.skills || []);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const skillSuggestions = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Django',
    'Java',
    'C#',
    'C++',
    'UI Design',
    'UX Design',
    'Graphic Design',
    'Content Writing',
    'Digital Marketing',
    'Blockchain',
    'Solidity',
    'Vue',
    'Angular'
  ];

  const handleAddSkill = (skill) => {
    if (skills.length >= 15) return;
    if (!skills.includes(skill)) {
      const newSkills = [...skills, skill];
      setSkills(newSkills);
      updateFormData({ skills: newSkills });
    }
    setInputValue('');
    setShowDropdown(false);
  };

  const handleRemoveSkill = (skillToRemove) => {
    const newSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(newSkills);
    updateFormData({ skills: newSkills });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      handleAddSkill(inputValue.trim());
    }
  };

  const filteredSuggestions = skillSuggestions.filter(
    skill => skill.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Add your skills.</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod.
        </p>

        <div className="relative">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type or select skills"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {showDropdown && inputValue && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
              {filteredSuggestions.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddSkill(skill)}
                >
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center bg-gray-100 rounded-full px-3 py-1"
            >
              <span>{skill}</span>
              <button
                onClick={() => handleRemoveSkill(skill)}
                className="ml-2 text-red-500 hover:text-red-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          Max {15 - skills.length} skills remaining
        </p>
      </div>

      <button
        onClick={nextStep}
        disabled={skills.length === 0}
        className={`w-full py-3 rounded-full transition-colors ${
          skills.length > 0
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default SkillsStep; 