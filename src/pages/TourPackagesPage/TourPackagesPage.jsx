import { useState } from "react";
import useTourPackages from "../../Hooks/useTourPackages";
import Loader from "../../Utils/Loader/Loader";
import TourPackagesCard from "../../components/TourPackages/TourPackagesCard";
import Title from "../../Utils/Title/Title";
import { Discover } from "../../components/TourPackages/Discover";

const TourPackagesPage = () => {
  const [tourPackages, isLoading] = useTourPackages("", {});
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://www.cssigniter.com/demos/milos/wp-content/uploads/sites/17/2021/04/Fotolia_52127130_Subscription_Monthly_XXL.jpg",
      title: "THE WORLD IS YOURS",
      des: "EXPLORE OUR ECO AND ADVENTURE TRAVEL ITINERARIES",
    },
    {
      img: "https://travelicious.bold-themes.com/main-demo/wp-content/uploads/sites/2/2018/09/destination-berlin-07.jpg",
      title: "THE WORLD IS YOURS",
      des: "EXPLORE OUR ECO AND ADVENTURE TRAVEL ITINERARIES.",
    },
    {
      img: "https://i.postimg.cc/LsLTn5BX/sultanahmet-mosque-blue-mosque-istanbul-by-day-159938-3260.webp",
      title: "THE WORLD IS YOURS",
      des: "EXPLORE OUR ECO AND ADVENTURE TRAVEL ITINERARIES.",
    },
    {
      img: "https://themes-themegoods.b-cdn.net/grandtour/demo2/wp-content/uploads/2016/12/Parks-Mountains-Pagodas-Sakura-Volcano-Branches-Aizuwakamatsu-Castle-Tsuruga-Castle-Fukushima-Mount-Fuji-Cities-Japan-Wallpaper-Widescreen-HD-1680x1050-700x466.jpg",
      title: "THE WORLD IS YOURS",
      des: "EXPLORE OUR ECO AND ADVENTURE TRAVEL ITINERARIES.",
    },
    {
      img: "https://themetechmount.com/wordpress/a3trip/demo4/wp-content/uploads/sites/11/2023/12/d3-min.jpg",
      title: "THE WORLD IS YOURS",
      des: "EXPLORE OUR ECO AND ADVENTURE TRAVEL ITINERARIES.",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;
  if (isLoading) {
    return <Loader width="20" center="center" />;
  }

  return (
    <div>
      <Title title="Tour Packages" />
      <div
        className="w-full h-72 sm:h-96 md:h-[540px] lg:h-[500px] xl:h-[780px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
        style={{
          backgroundImage: `url(${
            currentSlider === 0
              ? sliders[sliders.length - 1].img
              : sliders[currentSlider - 1].img
          })`,
        }}
      >
        {/* arrow */}
        <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* text container here */}
        <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
          <h1 className="lg:text-3xl mb-3">{sliders[currentSlider].title}</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
        {/* slider container */}
        <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
          <div
            className="ease-linear duration-300 flex gap-4 items-center"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 98 : 200)
              }px)`,
            }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <img
                key={inx}
                src={slide.img}
                className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                  currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                alt={slide.title}
              />
            ))}
          </div>
          
        </div>
       
      </div>
      <div className="absolute w-1/2 -mt-7 z-10 ml-56">
                    <input
                      type="search"
                      name="search"
                      id="search-dropdown"
                      className="block p-5 w-full z-70 text-sm text-gray-900 bg-gray-500 rounded-md  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 p-2.5 text-xl w-1/6 flex justify-center items-center gap-2 h-full text-white bg-pink-700 rounded-e-lg border border-white hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                      <span className="sr-only">Search</span>
                    </button>
            </div>
              
              
      <div className="flex px-5 gap-44">
      <div className="mt-32">
        {tourPackages.map((tourPackage) => (
          <TourPackagesCard key={tourPackage._id} tourPackage={tourPackage} />
        ))}
      </div>
     <Discover/>
      </div>
     
    </div>
  );
};

export default TourPackagesPage;