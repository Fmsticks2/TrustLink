import { Link } from 'react-router-dom';

const Skills = () => {
  const skills = [
    'User Interface Design',
    'Graphics Design',
    'Logo Design',
    'Animation',
    'Branding',
  ];

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4 p-6 pb-0">
        <h2 className="text-2xl font-semibold">Top Skills</h2>
        <button className="px-8 py-1 text-sm h-fit border border-[#FF4C4A] rounded-full text-[#FF4C4A] font-semibold">
          Edit Skills
        </button>
      </div>
      <div className='w-full bg-gray-300 h-[1px]' />
      <div className="space-y-2 py-4 px-6">
        {skills.map((skill, index) => (
          <div key={index} className="text-gray-700 text-lg py-1">
            {skill}
          </div>
        ))}
      </div>
      <Link>
        <button className="my-4 text-blue-500 w-full text-center text-md">See more</button>
      </Link>
    </div>
  )
}

export default Skills