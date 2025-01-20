import React from 'react';
import UserInfo from '../components/Freelancer/profilePage/UserInfo';
import Verification from '../components/Freelancer/profilePage/Verification';
import Portfolio from '../components/Freelancer/profilePage/Portfolio';
import Reviews from '../components/Freelancer/profilePage/Reviews';
import Skills from '../components/Freelancer/profilePage/Skills';
import Education from '../components/Freelancer/profilePage/Education';
import Experiences from '../components/Freelancer/profilePage/Experiences';
import BgImg from '../assets/bgImage.png'; // Update this path if needed

const Profile = () => {
  return (
    <>
      <div 
        className="w-full h-48 z-0 top-20"
        style={{
          backgroundImage: `url(${BgImg})`,  // Correct backgroundImage syntax
          backgroundColor: '#2942A5',
          backgroundSize: 'contain',
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className=''>
        <img src={BgImg} className='w-fit absolute top-20 right' alt="" />
      </div>
      <div className="max-w-7xl mx-auto mt-40 px-4 py-8 relative z-10">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <UserInfo />
            <Portfolio />
            <Reviews />
            <Experiences />
            <Education />
          </div>
          
          <div className="space-y-6">
            <Verification />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
