import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = ({ testimonials }) => (
  <div className="w-full flex flex-col items-center py-12 bg-white">
    <h2 className="mb-4 md:text-4xl text-2xl font-extrabold text-center">People talk about us</h2>
    <p className="text-gray-600 text-center max-w-md mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className='overflow-hidden'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2.5} // Adjust for responsiveness
        spaceBetween={200} // Adjust for spacing between slides
        coverflowEffect={{
          rotate: 50, // No rotation
          stretch: 80, // Reduce the extreme spacing
          depth: 90, // means the depth of the 3D effect
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="xl:max-w-7xl lg:max-w-4xl md:max-w-3xl sm:max-w-2xl xs:max-w-lg max-w-64 h-96 mt-20 custom-swiper"
        breakpoints={{ // Responsive breakpoints
          320: {
            slidesPerView: 1,
            spaceBetween: 300,
            coverflowEffect: {
              stretch: 80,
              depth: 90,
              modifier: 1,
            },
          },
          420: {
            slidesPerView: 1.5,
            spaceBetween: 200,
            coverflowEffect: {
              stretch: 80,
              depth: 90,
              modifier: 1,
            },
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 100,
            coverflowEffect: {
              stretch: 80,
              depth: 90,
              modifier: 1.5,
            },
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 350,
            coverflowEffect: {
              stretch: 150,
              depth: 90,
              modifier: 1.5,
            },
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 200,
            coverflowEffect: {
              stretch: 80,
              depth: 90,
              modifier: 1,
            },
          },
          1260: {
            slidesPerView: 2.5,
            spaceBetween: 200,
            coverflowEffect: {
              stretch: 80,
              depth: 90,
              modifier: 1,
              slideShadows: false,
            },
          },
        }}
      >
        <div className='overflow-hidden'>
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="">
              <div className="sm:w-[400px] w-[280px] drop-shadow-2xl bg-white p-6 rounded-2xl text-center">
                <div className="flex justify-center  -mt-12">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-md "
                  />
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  <h3 className="font-semibold mt-3">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}              
        </div>
      </Swiper>          
    </div>
  </div>
);

export default Testimonials;
