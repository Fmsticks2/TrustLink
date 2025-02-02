import UserImg from '../../../assets/user.png';
import { ClockIcon, CurrencyDollarIcon, StarIcon } from '@heroicons/react/20/solid';

const UserInfo = ({className}) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md ${className}`}>
      <div className="flex lg:flex-nowrap flex-wrap  items-start gap-6 max-lg:justify-center">
        <div>
          <div className='w-[220px] h-[220px] overflow-hidden rounded-lg'>
            <img 
              src={UserImg} 
              alt="Profile" 
              className="rounded-lg object-cover"
            />
          </div>   
          <div className="flex max-lg:flex-row max-xs:flex-col flex-col justify-items-center lg:items-start items-center max-lg:gap-5 max-xs:gap-0 mt-4 space-y-2 text-sm text-gray-600">
            <span>🌍 Melbourne, USA</span>
            <span className='flex gap-1'> <ClockIcon className='h-5' /> It's currently 4:45 PM HERE</span>
            <span>📅 Joined September 1, 2021</span>
          </div>       
        </div>

        <div className="w-fit">
          <div className="space-x-2 space-y-4">
            <div className='flex xs:flex-nowrap flex-wrap justify-between items-center'>
              <div>
                <h1 className="text-3xl font-bold">Adam Smith</h1>
                <p className="text-gray-400">User Experience Designer, Graphic Designer</p>                
              </div>
              <button className="px-10 py-3 max-xs:mt-5 text-sm h-fit border border-[#FF4C4A] rounded-full text-[#FF4C4A] font-bold">
              Edit Profile
            </button>
            </div>
          
            <div className="flex xs:flex-nowrap flex-wrap items-center max-xs:px-2 gap-4 mt-2 text-xs text-gray-600">
              <span className='text-gray-400'>
                <span className='flex'>
                  <StarIcon className={`h-3 ${true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${!true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  <StarIcon className={`h-3 ${!true ? 'text-[#FF4C4A]' : 'text-gray-300'}`} />
                  </span> 
                4.6 (25 Reviews)
              </span>
              <span className='h-5 w-[1px] bg-gray-300' />
              <span className='flex items-center gap-1'>
                <CurrencyDollarIcon className='h-5' /> 
                <span className='flex flex-col'>
                  <span className='font-semibold'>50USD/ Hr</span>
                  <span>Total earnings- 10k USD</span>
                </span>
              </span>
              <span className='h-5 w-[1px] bg-gray-300' />
              <span className='font-semibold'>🎯 25 projects completed</span>
            </div>
            
          </div>
          <div className="mt-4 text-gray-700 px-4 h-52 overflow-y-scroll scrollbar-custom">
            I am a talented and experienced Graphic Design Designer looking to be hired. In my work experience I have versatility as a Website Design Developer working on many different projects. I strive to put in my maximum effort and complete all my work with excellence. For any targeted task, I will involve myself sincerely in your team and can handle as an experienced person too. You can trust on me for any of your work. I am always ready to learn new things in prompt manner. I am looking forward to be outsourced by you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;