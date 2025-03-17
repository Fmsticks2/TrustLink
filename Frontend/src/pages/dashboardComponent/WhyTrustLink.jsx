const WhyTrustLink = ({ character, no_cost, safe }) => (
  <section className="py-16 bg-[#FFFBF3] overflow-hidden flex flex-col items-center">
    <div className='flex flex-col items-center space-y-7 px-10'>   
      <h1 className="md:text-5xl text-3xl font-extrabold text-center">Why TrustLink</h1>
      <p className='w-[500px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div className="max-lg:mt-10 max-lg:border-t-2 flex justify-center overflow-hidden md:px-20 px-1">
      <div className="flex lg:flex-nowrap flex-wrap space-x-6 p-6 max-sm:px-2 md:gap-10 gap-5">
        <div className="flex flex-col  justify-center items-center text-center p-6 rounded space-y-5">
          <img src={character} className='w-20' alt="" />
          <h3 className="text-xl font-extrabold text-black">Quality work</h3>
          <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-6 rounded space-y-5">
          <img src={no_cost} className='w-28' alt="" />
          <h3 className="text-xl font-extrabold text-black">No cost until you hire</h3>
          <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
        </div>
        <div className="flex flex-col justify-center items-center text-center p-6 rounded space-y-5">
          <img src={safe} className='w-28' alt="" />
          <h3 className="text-xl font-extrabold text-black">Safe and secure</h3>
          <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyTrustLink;
