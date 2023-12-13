// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import BannerSearch from "../../Utils/BannerSearch/BannerSearch";

const Banner = () => {
  // const bannerImg = [
  //   "https://jufailitech.com/envatoitems/travilo/html/assets/images/resources/misc/boats.jpg",
  //   "https://azim.hostlin.com/Travic/assets/images/banner/banner-3.jpg",
  //   "https://demo.smartnfc.org/trekeel/assets/images/gallery/destination-img.jpg",
  //   "https://azim.hostlin.com/Travic/assets/images/banner/banner-3.jpg",
  //   "https://azim.hostlin.com/Travic/assets/images/banner/banner-3.jpg",
  //   "https://i.postimg.cc/jdPVZmjv/woman-standing-rock-atuh-beach-nusa-penida-island-bali-indonesia.jpg",
  // ];
  return (
    <div className="overflow-hidden" data-aos="zoom-in">
      <div
                className="rounded-xl hero overflow-hidden h-[500px] text-white"
                style={{
                  backgroundImage: "url(https://azim.hostlin.com/Travic/assets/images/banner/banner-3.jpg)",
                  backgroundSize: "cover",
                }}
              >
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                  className="flex justify-center items-center h-[500px] hero-content"
                >
                  <div className="text-center z-10">
                    <p className="font-bold text-xl lg:text-2xl mb-2 text-orange-600">
                      Discover the Planet
                    </p>
                    <BannerSearch></BannerSearch>
                  </div>
                </div>
              </div>
      {/* <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, A11y]}
        className="mySwiper"
      >
        {bannerImg.map((image,idx) => (
          <SwiperSlide key={idx}>
            <div data-aos="zoom-in">
              <div
                className="rounded-xl hero overflow-hidden h-[500px] text-white"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="hero-overlay bg-black bg-opacity-40"></div>
                <div
                  data-aos="zoom-in"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="1000"
                  className="flex justify-center items-center h-[500px] hero-content"
                >
                  <div className="text-center z-10">
                    <p className="font-bold text-xl lg:text-2xl mb-2 text-orange-600">
                      Discover the Planet
                    </p>
                    <p className="font-semibold text-white text-xs lg:text-5xl">
                      Create your memories with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Banner;
