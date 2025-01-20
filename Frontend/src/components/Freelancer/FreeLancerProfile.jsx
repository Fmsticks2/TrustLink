import React from 'react';
import UserInfo from '../../components/profilePage/UserInfo';
import Verification from '../../components/profilePage/Verification';
import Portfolio from '../../components/profilePage/Portfolio';
import Reviews from '../../components/profilePage/Reviews';
import Skills from '../../components/profilePage/Skills';
import Education from '../../components/profilePage/Education';
import Experiences from '../../components/profilePage/Experiences';
import BgImg from '../../../public/bgImage.png';

const FreeLancerProfile = () => {
  return (
    <div className='bg-gray-100 overflow-hidden'>
      <div className='relative overflow-hidden'>
        <div className='bg-[#2942A5] h-[400px]' />
        <img src={BgImg} className='absolute -top-12 right-0 w-fit' alt="" />
      </div>
      <div className="max-w-7xl mx-auto -mt-72 xs:px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <UserInfo />
            <Portfolio />
            <Reviews />
            <Experiences />
            <Education />
          </div>
          
          <div className="h-[50rem] grid lg:grid-rows-2 grid-cols-1 lg:col-span-1 col-span-2 items-start justify-between gap-5">
            <Verification className={'rows-start-1'} />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeLancerProfile;
