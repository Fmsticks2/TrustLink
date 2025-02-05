import redFlower from '../assets/redFlower.png'
import heroImg from '../assets/heroImg.png'
import leftFlower from '../assets/flower_left.png'
import rightFlower from '../assets/flower_right.png'
import heroImg2 from '../assets/hero2Img.png'
import { useState } from 'react'
import Animator from '../assets/Animator.png'
import Graphics from '../assets/Graphics.png'
import Ux_design from '../assets/Ux_design.png'
// import Graphics from '../assets/Graphics.png'


const HomePage = () => {

  const [ tab, setTab ] = useState('design')

  const cardDetails = [
    {
      imgSrc: Ux_design,
      gradientFrom: '#4260da',
      gradientTo: '#253d9c',
      title: 'User Experience Designer',
      bgColor: '#bd0000',
    },
    {
      imgSrc: Graphics,
      gradientFrom: '#1F1F1F',
      gradientTo: '#292929',
      title: 'User Interface Designer',
      bgColor: '#373737',
    },
    {
      imgSrc: Graphics,
      gradientFrom: '#4260da',
      gradientTo: '#253d9c',
      title: 'Graphics Designer',
      bgColor: '#3859BF',
    },
    {
      imgSrc: Animator,
      gradientFrom: '#1F1F1F',
      gradientTo: '#292929',
      title: 'Animator',
      bgColor: '#373737',
    },
  ];

  return (
    <div className="relative top-[90px]">
      {/* Hero Section */}
      <section className="bg-[#ff4d4af5] text-white py-14 overflow-hidden relative h-[260px]">
        <img src={redFlower} className='absolute top-0 left-0 h-[250px]' alt="" />
        <div className='flex justify-between  items-start'>
          <div className='flex flex-col justify-items-start sm:px-28 xs:px-12 px-2 space-y-5'>
            <div className='space-y-5 z-10'>
              <h2 className="lg:text-4xl sm:text-3xl text-xl font-extrabold">Join world’s best market place</h2>
              <p className="mt-2 text-xs sm:text-sm">Find the best Talent and best works based on your skills from around the world.</p>            
            </div>
            <div className="flex gap-5 z-10">
              <button className="bg-black px-6 py-2 rounded-full text-xs sm:text-sm">Find Talent</button>
              <button className="bg-transparent border text-white px-6 py-2 rounded-full text-xs sm:text-sm">Find Work</button>
            </div>          
          </div>
          <div className='flex items-center gap-10 lg:-mt-10 lg:relative absolute top-0 right-0 max-sm:opacity-20'>
            <img src={heroImg} className='opacity-50' alt="" />
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-3'>
                <span>01</span>
                <div className='h-[2px] w-20 bg-gray-200' />
              </div>
              <div className='flex items-center gap-3 opacity-50'>
                <span>02</span>
                <div className='h-[2px] w-20 bg-gray-200' />
              </div>
              <div className='flex items-center gap-3 opacity-40'>
                <span>03</span>
                <div className='h-[2px] w-20 bg-gray-200' />
              </div>
              <div className='flex items-center gap-3 opacity-30'>
                <span>04</span>
                <div className='h-[2px] w-20 bg-gray-200' />
              </div>
            </div>
          </div>           
        </div>


      </section>

      {/* Features Section */}
      <section className="bg-[#DDE1F3] relative h-fit max-sm:pb-10">
       <img src={leftFlower} className='absolute top-0 left-0 h-[250px] opacity-60' alt="" />
       <div className='flex sm:flex-row flex-col justify-center gap-10 mt-1 items-center pt-5 z-10'>
          <img src={heroImg2}  alt="" />
          <div className='flex flex-col max-sm:flex-wrap max-sm:px-10 sm:w-96 space-y-3'> 
            <h3 className="text-2xl font-extrabold">Find best Talents</h3>
            <p className="mt-2 font-medium">Find the best Talent and best works based on your skills from around the world.</p>
            <div>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">Find Talents</button>              
            </div>
          </div>
       </div>
       <img src={rightFlower} className='absolute bottom-0 sm:top-0 right-0 h-[250px] opacity-60' alt="" />
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white overflow-hidden">
        <h1 className="text-5xl font-extrabold text-center">Top skills categories</h1>
        <div className='flex flex-col items-center flex-wrap space-y-7'>
          <div className="mt-6 flex justify-center space-x-6 border-b-2">
            <button className={`transition-all pb-1 ${tab === 'design' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('design')}>Design & Creative</button>
            <button className={`transition-all  pb-1 ${tab === 'development' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('development')}>Development & IT</button>
            <button className={`transition-all  pb-1 ${tab === 'sales' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('sales')}>Sales & Marketing</button>
            <button className={`transition-all  pb-1 ${tab === 'writing' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('writing')}>Writing & Translation</button>
          </div>          
          <p className='w-[500px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>

        <div className="flex space-x-6 p-6 mt-36 justify-center">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className={`w-60 h-44 rounded-xl flex items-center justify-center text-white relative shadow-xl bg-gradient-to-b from-[${card.gradientFrom}] to-[${card.gradientTo}]`}
            >
              <img src={card.imgSrc} className="absolute -top-28 w-48" alt="" />
              <span className={`absolute bottom-16 rounded-md left-5 p-1 bg-[${card.bgColor}] text-[10px] text-gray-400`}>304k designer</span>
              <span className="absolute bottom-5 left-2">{card.title}</span>
            </div>
          ))}
        </div>
      </section>


      {/* Why UpTechhunt */}
      <section className="bg-yellow-50 py-16 text-center">
        <h3 className="text-2xl font-bold">Why UPTechhunt</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6 px-6">
          <div className="p-6 bg-white shadow-md rounded">Quality work</div>
          <div className="p-6 bg-white shadow-md rounded">No cost until you hire</div>
          <div className="p-6 bg-white shadow-md rounded">Safe and secure</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="text-center py-16">
        <h3 className="text-2xl font-bold">People talk about us</h3>
        <div className="mt-6 flex space-x-6 overflow-x-scroll p-6">
          <div className="w-60 bg-white shadow-md p-6 rounded">"The freelance talent we work with is more productive than we ever thought possible."</div>
          <div className="w-60 bg-white shadow-md p-6 rounded">"The freelance talent we work with is more productive than we ever thought possible."</div>
          <div className="w-60 bg-white shadow-md p-6 rounded">"The freelance talent we work with is more productive than we ever thought possible."</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
