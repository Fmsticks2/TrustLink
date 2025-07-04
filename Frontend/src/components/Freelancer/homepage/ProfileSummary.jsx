import UserImg from '../../../assets/user.png';
import { Link } from 'react-router-dom';
import { useOnboarding } from '../../../context/OnboardingContext';

const ProfileSummary = () => {
  const { formData } = useOnboarding();

  const calculateProfileProgress = () => {
    let completedSections = 0;
    let totalSections = 7; // UserInfo, Skills, Education, Experiences, Portfolio, Verification, Reviews

    // Check onboarding data
    if (formData.firstName && formData.lastName) completedSections++;
    if (formData.title) completedSections++;
    if (formData.profileImage) completedSections++;
    if (formData.skills && formData.skills.length > 0) completedSections++;
    if (formData.education && formData.education.length > 0) completedSections++;
    if (formData.experience && formData.experience.length > 0) completedSections++;
    if (formData.portfolio && formData.portfolio.length > 0) completedSections++;

    return Math.round((completedSections / totalSections) * 100);
  };

  const setupProgress = calculateProfileProgress();

  return (
    <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center">
      <div className='w-[220px] h-[220px] overflow-hidden rounded-lg'>
        <img 
          src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : UserImg}
          alt="Profile" 
          className="rounded-lg object-cover w-full h-full"
        />
      </div>  
      <h3 className="text-2xl font-bold mt-2">{formData.firstName ? formData.firstName : "Adam"} {formData.lastName ? formData.lastName : "Smith"}</h3>
      <p className="text-gray-600">{formData.title ? formData.title : "User Experience Designer"}</p>
      <div className="mt-4 w-full flex flex-col">
        <p className="text-gray-700 font-bold flex justify-between">
          Set up your account: <span>{setupProgress}%</span>
        </p>
        <input 
          type="range" 
          value={setupProgress} 
          max="100" 
          readOnly 
          className="w-full mt-2"
          style={{ accentColor: '#4064f4' }} 
        />
        <Link to={'/freelancer/profile'} className='self-center'>
          <button className="mt-4 px-10 py-2 rounded-full border border-[#FF4C4A] text-[#FF4C4A]">
            {setupProgress === 100 ? 'View Profile' : 'Complete your profile'}
          </button>
        </Link>
      </div>
      <i className='text-gray-400 text-center text-sm mt-2'>100% completion of your profile will help you get more reach</i>
    </div>
  );
};

export default ProfileSummary;
