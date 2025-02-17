const HeroSection = ({ redFlower, heroImg }) => (
  <section className="bg-[#ff4d4af5] text-white py-14 overflow-hidden relative h-[260px]">
    <img src={redFlower} className='absolute top-0 left-0 h-[250px]' alt="" />
    <div className='flex justify-between items-start'>
      <div className='flex flex-col justify-items-start sm:pl-16 xs:pl-12 pl-2 space-y-5'>
        <div className='space-y-5 z-10'>
          <h2 className="lg:text-4xl sm:text-3xl text-2xl font-extrabold">Join world’s best market place</h2>
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
);

export default HeroSection;
