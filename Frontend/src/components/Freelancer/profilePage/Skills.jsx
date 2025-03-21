import { useState } from 'react';
import { Link } from 'react-router-dom';
import EditSkillsModal from '../modals/EditSkillsModal';
import { useOnboarding } from "../../../context/OnboardingContext";

const Skills = () => {
  const skills = [
    'User Interface Design',
    'Graphics Design',
    'Logo Design',
    'Animation',
    'Branding',
  ];

  const { formData } = useOnboarding();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 p-6 pb-0">
        <h2 className="text-2xl font-semibold">Top Skills</h2>
        <button
          onClick={() => setIsEditModalOpen(true)}  
          className="px-8 py-1 text-sm h-fit border border-[#FF4C4A] rounded-full text-[#FF4C4A] font-semibold"
        >
          Edit Skills
        </button>
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className="space-y-2 py-4 px-6">
        {formData?.skills?.map((skill, index) => (
          <div key={index} className="text-gray-700 text-lg py-1">
            {skill}
          </div>
        )) || (
          <div className="text-gray-500 text-md py-1">No skills added yet.</div>
        )}
      </div>
      <Link>
        <button className="my-4 text-blue-500 w-full text-center text-md">See more</button>
      </Link>

      <EditSkillsModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      /> 
    </div>
  )
}

export default Skills