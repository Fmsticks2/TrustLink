const FeaturesSection = ({ leftFlower, rightFlower, heroImg2 }) => (
  <section className="bg-[#DDE1F3] relative h-fit max-sm:pb-10">
    <img src={leftFlower} className='absolute top-0 left-0 h-[250px] lg:opacity-60 opacity-20 max-sm:opacity-10' alt="" />
    <div className='flex sm:flex-row flex-col justify-center gap-10 mt-1 items-center pt-5 z-10'>
      <img src={heroImg2} alt="" />
      <div className='flex flex-col max-sm:flex-wrap max-sm:px-10 sm:w-96 space-y-3'> 
        <h3 className="md:text-3xl text-2xl font-extrabold">Find best Talents</h3>
        <p className="mt-2 font-medium">Find the best Talent and best works based on your skills from around the world.</p>
        <div>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">Find Talents</button>              
        </div>
      </div>
    </div>
    <img src={rightFlower} className='absolute bottom-0 sm:top-0 right-0 h-[250px] lg:opacity-60 opacity-20 max-sm:opacity-20' alt="" />
  </section>
);

export default FeaturesSection;
