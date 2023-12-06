import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <div className='overflow-x-hidden' data-aos="zoom-in" >
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        navigation={true}
       
        modules={[Autoplay,Navigation, A11y]}
        className="mySwiper">
        <SwiperSlide>
          <div data-aos="zoom-in-left">
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/misc/boats.jpg "
                alt="img-blur-shadow" className="w-[1600px] h-[730px] hero-overlay opacity-70" />
            </div>
            <div>
            <div className='text-center flex justify-center overflow-x-hidden'>
                <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>
                  <p className='font-bold text-xl lg:text-2xl mb-2 text-orange-600'>Discover the Planet</p>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-5xl'>Create your memories with us.</p>
                </div>

              </div>
              </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://azim.hostlin.com/Travic/assets/images/banner/banner-3.jpg "
                alt="img-blur-shadow" className="w-[1600px] h-[730px] hero-overlay opacity-70" />
            </div>
            <div className='text-center flex justify-center overflow-x-hidden'>
            <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>
                  <p className='font-bold text-xl lg:text-2xl mb-2 text-orange-600'>Discover the Planet</p>
                  <h1 className='font-semibold overflow-x-hidden text-white text-xs lg:text-5xl'>Create your memories with us</h1>
                </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://demo.smartnfc.org/trekeel/assets/images/gallery/destination-img.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[730px] hero-overlay opacity-70" />
            </div>
            <div className='text-center flex justify-center overflow-x-hidden' >
            <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>
                  <h1 className='font-bold lg:text-2xl text-orange-600 mb-2'>Discover the Planet </h1>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>Create your memories with us</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative  mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://azim.hostlin.com/Travic/assets/images/banner/banner-3.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[730px] hero-overlay opacity-70" />
            </div>
            <div className='text-center flex justify-center overflow-x-hidden' >
            <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>
                  <h1 className='font-bold lg:text-2xl mb-2 text-orange-600'>Discover the Planet </h1>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>Create your memories with us</p>
                </div>
           
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in">
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://azim.hostlin.com/Travic/assets/images/banner/banner-3.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[730px] hero-overlay opacity-60" />
            </div>
            <div className='text-center flex justify-center overflow-x-hidden'>
            <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>
                  <p className='font-bold text-xl lg:text-2xl mb-2 text-orange-600'>Discover the Planet</p>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>Create your memories with us</p>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div data-aos="zoom-in">
            <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                src="https://i.postimg.cc/jdPVZmjv/woman-standing-rock-atuh-beach-nusa-penida-island-bali-indonesia.jpg"
                alt="img-blur-shadow" className="w-[1600px] h-[730px] hero-overlay opacity-60" />
            </div>
            <div className='text-center flex justify-center overflow-x-hidden'>
            <div data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine" data-aos-duration="1000" className='absolute top-60 overflow-x-hidden'>
                  <p className='font-bold text-xl lg:text-2xl mb-2 text-orange-600'>Discover the Planet</p>
                  <p className='font-semibold overflow-x-hidden text-white text-xs lg:text-xl'>Create your memories with us</p>
                </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
