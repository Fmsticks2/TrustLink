import React, { useState, useEffect } from "react";
import { useOnboarding } from "../../../context/OnboardingContext";
import { TrashIcon } from "@heroicons/react/20/solid";

const EditSkillsModal = ({ isOpen, onClose }) => {
  const { formData, updateFormData } = useOnboarding();

  const [skills, setSkills] = useState(formData?.skills || []);
  const [newSkill, setNewSkill] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  // Removed the duplicate newSkill state declaration
  // const [newSkill, setNewSkill] = useState(''); // Reintroducing the second newSkill state

  useEffect(() => {
    setSkills(formData?.skills || []);
  }, [formData?.skills]); 

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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

  const filteredSuggestions = skillSuggestions.filter(
    skill => skill.toLowerCase().includes(newSkill.toLowerCase())
  );

  const handleInputChange = (e) => {
    setNewSkill(e.target.value);
    setShowDropdown(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newSkill.trim()) {
      e.preventDefault();
      handleAddSkill(newSkill.trim());
    }
  };

  const handleAddSkill = (skill) => {
    if (skills.length >= 15) return;
    if (!skills.includes(skill)) {
      const newSkills = [...skills, skill];
      setSkills(newSkills);
      updateFormData({ skills: newSkills });
    }
    setNewSkill('');
    setShowDropdown(false);
  };
  
  const handleRemoveSkill = (index) => { 
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    updateFormData({ skills: updatedSkills });
  };

  const handleSaveSkills = () => {
    updateFormData(skills);
    onClose();
  };
 
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 modal-overlay" onClick={handleOutsideClick}>
      <div className="bg-white rounded-lg p-6 max-md:max-w-lg w-[500px] shadow-lg relative" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">Edit Top Skills</h2>

        <div className="mb-4">
          <div className="relative w-full">
            <input
              type="text"
              value={newSkill}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Add new skill"
              className="mt-1 px-4 py-2 block w-full rounded-md border border-[#00000033] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            {showDropdown && newSkill && (
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
        </div>

        <div className="space-y-2 mb-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center justify-between px-4 py-2 rounded-md bg-gray-100">
              <span className="text-gray-700">{skill}</span>
              <button
                onClick={() => handleRemoveSkill(index)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <TrashIcon className='w-5 text-red-500' />
              </button>
            </div>
          ))}
          {skills.length === 0 && <p className="text-gray-500">No skills added yet.</p>}
        </div>

        <div className="flex justify-start gap-4 mt-6">
          <button onClick={handleSaveSkills} className="px-10 py-2 bg-[#FF4C4A] text-white rounded-full shadow-sm hover:bg-[#FF4C4A] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Save</button>
          <button onClick={onClose} className="px-10 py-2 border border-[#00000033] bg-white rounded-full text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditSkillsModal;