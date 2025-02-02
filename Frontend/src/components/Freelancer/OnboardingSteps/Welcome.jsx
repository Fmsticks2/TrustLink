import { useOnboarding } from '../../../context/OnboardingContext';
import WelcomeImg from '../../../assets/WelcomeImg.png'

const Welcome = ({ nextStep }) => {
  const { formData } = useOnboarding();

  return (
    <div className="flex flex-col items-center justify-center space-y-12 overflow-hidden">
      {/* Welcome Image */}
      <div className="w-48 h-fit">
        <img 
          src={WelcomeImg}
          alt="Welcome" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Welcome Text */}
      <div className="text-center space-y-10">
        <h1 className="text-3xl font-semibold">
          Hey {formData.firstName}. Ready for your next big opportunity?
        </h1>
        <div className='space-y-3'>
          <p className="max-w-md mx-auto">Build a profile to show the world what you can do</p>
          <div className='w-full h-[0.5px] bg-gray-300' />
          <p className="max-w-md mx-auto">Apply on jobs posted from clients, around the world</p>
          <div className='w-full h-[0.5px] bg-gray-300' />
          <p className="max-w-md mx-auto">Get paid safely and know we’re here to help</p>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={nextStep}
        className="w-full max-w-md bg-[#FF4C4A] text-white py-3 rounded-full hover:bg-red-600 transition-colors mt-6 tracking-wide"
      >
        Create Your Profile
      </button>
    </div>
  );
};

export default Welcome; 