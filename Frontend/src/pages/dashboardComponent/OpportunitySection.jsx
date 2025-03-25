const OpportunitySection = ({ pinkFlowerleft, opportunity, pinkFlowerRight }) => {
  return (
    <section className="bg-[#ffe4e3] relative md:h-96 h-fit max-md:pb-10">
      <img src={pinkFlowerleft} className='absolute top-0 left-0 h-[150px]' alt="" />
      <div className='flex md:flex-row flex-col justify-center gap-10 items-center pt-12 max-md:px-10 max-xs:px-0 z-10'>
        <img src={opportunity} alt="" className='sm:h-72' />
        <div className='flex flex-col max-md:flex-wrap max-md:px-10 md:w-96 space-y-3'>
          <h3 className="md:text-3xl text-2xl  font-extrabold">Find great works in your way</h3>
          <p className="mt-2 font-medium">Find the best Talent and best works based on your skills from around the world.</p>
          <div>
            <button className="mt-4 bg-[#4260DA] text-white px-6 py-2 rounded-full">Find opportunities</button>
          </div>
        </div>
      </div>
      <img src={pinkFlowerRight} className='absolute bottom-0 right-0 h-[150px] ' alt="" />
    </section>
  );
};

export default OpportunitySection;
