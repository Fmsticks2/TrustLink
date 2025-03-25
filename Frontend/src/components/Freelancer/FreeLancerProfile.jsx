import UserInfo from './profilePage/UserInfo';
import Verification from './profilePage/Verification';
import Portfolio from './profilePage/Portfolio';
import Reviews from './profilePage/Reviews';
import Skills from './profilePage/Skills';
import Education from './profilePage/Education';
import Experiences from './profilePage/Experiences';
import FreeLancerImgBg from './FreeLancerImgBg';

const FreeLancerProfile = () => {
  return (
    <div className='bg-gray-100 overflow-hidden'>
      <FreeLancerImgBg />
      <div className="max-w-7xl mx-auto -mt-48 xs:px-4 pb-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <UserInfo />
            <Portfolio />
            <Reviews />
            <Experiences />
            <Education />
          </div>
          
          <div className="h-[50rem] grid lg:grid-rows-2 grid-cols-1 lg:col-span-1 col-span-2 items-start justify-between gap-5">
            <Verification />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLancerProfile;
