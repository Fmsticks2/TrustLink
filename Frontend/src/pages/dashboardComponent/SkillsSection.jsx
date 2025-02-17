import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";

const SkillsSection = ({ tab, setTab, cardDetails }) => (
  <section className="py-16 bg-white overflow-hidden space-y-5">
    <h1 className="md:text-5xl text-3xl font-extrabold text-center">Top skills categories</h1>
    <div className='flex flex-col sm:items-center items-start space-y-7 overflow-x-scroll scrollbar-custom' style={{width: '100%'}}>
      <div className="mt-6 flex justify-center space-x-6 border-b-2">
        <button className={`transition-all pb-1 ${tab === 'design' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('design')}>Design & Creative</button>
        <button className={`transition-all  pb-1 ${tab === 'development' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('development')}>Development & IT</button>
        <button className={`transition-all  pb-1 ${tab === 'sales' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('sales')}>Sales & Marketing</button>
        <button className={`transition-all  pb-1 ${tab === 'writing' ? 'border-b-2 border-[#FF4C4A] text-[#FF4C4A]' : 'border-none'}`} onClick={() => setTab('writing')}>Writing & Translation</button>
      </div>          
      <p className='w-[500px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="flex justify-center mt-12 p-6 overflow-hidden border-b-2">
      <Carousel className="xl:max-w-[1200px] lg:max-w-4xl md:max-w-2xl sm:max-w-[520px] max-w-60">
        <CarouselContent className='flex space-x-6'>
          {cardDetails.map((card, index) => (
            <CarouselItem key={index} className="flex-none w-64 overflow-hidden h-80">
              <div
                className="w-60 h-[430px] rounded-xl flex items-center justify-center bg-transparent relative"
              >
                <img src={card.imgSrc} className="absolute top-0 w-52 z-10" alt="" />
                <div
                  className="w-60 h-52 rounded-xl flex flex-wrap items-center justify-start text-white shadow-lg relative overflow-hidden"
                  style={{ background: `linear-gradient(to bottom, ${card.gradientFrom}, ${card.gradientTo})` }}
                >
                  <span 
                    className="absolute top-32 rounded-md left-5 p-1 text-[10px] text-gray-400"
                    style={{ backgroundColor: card.bgColor }}
                  >
                    304k designer
                  </span>
                  <span className="absolute top-[150px] rounded-md left-2 p-1 text-gray-100 font-bold">{card.title}</span>                      
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='bg-[#4260DA] text-white' />
        <CarouselNext className='bg-[#4260DA] text-white' />
      </Carousel>
    </div>
  </section>
);

export default SkillsSection;
