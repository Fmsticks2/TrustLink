import UserImg from '../../../assets/freelanceUserImg.png';
import { useOnboarding  } from '../../../context/OnboardingContext';

const Home = () => {
  const { formData } = useOnboarding();
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <div className="bg-white px-10 py-5 rounded-lg shadow-md relative flex flex-wrap xs:justify-between justify-center gap-5 items-center">
      <div className='relative z-10'> 
        <h1 className="text-md text-gray-600 font-bold">{formattedDate}  {currentDate.getFullYear()}</h1>
        <p className="text-lg mt-2 font-semibold">Welcome back</p>
        <span className="font-bold text-3xl text-[#FF4C4A]">{formData.firstName ? formData.firstName : "Adam"} {formData.lastName ? formData.lastName : "Smith"}</span>
      </div>
      <div className='w-40 z-0'>
        <img src={UserImg} className='w-full h-full object-cover' alt="" />
      </div>
    </div>
  );
};

export default Home;
