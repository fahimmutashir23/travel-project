import bgVdo from "../../assets/backgroundImage/videobg2.mp4";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Hotels from "../../components/Hotels/Hotels";
import News from "../../components/News/News";
import PopularDestination from "../../components/PopularDestination/PopularDestination";
import Weekly from "../../components/Weekly/Weekly";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import About from "../About/About";
import Loader from "../../Utils/Loader/Loader";
import { useEffect, useState } from "react";
import { FaCar, FaHome, FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import TourPackages from "../../components/TourPackages/TourPackages";
import Title from "../../Utils/Title/Title";
import { Deals } from "../../components/Shared/Deals";
import useWebControllers from "../../Hooks/useWebControllers";
import { Blog } from "../../components/Blog/Blog";
import AdvertisementModal from "../../Utils/AdvertisementModal/AdvertisementModal";
import UpBtn from "../../Utils/upBtn/upBtn";


const searchCategory = [
  { icon: <FaHome></FaHome>, name: "Search All", title: "Where to Go" },
  {
    icon: <FaHotel></FaHotel>,
    name: "Search Hotel",
    title: "Stay Somewhere great",
  },
  {
    icon: <MdFlightTakeoff />,
    name: "Search Air",
    title: "Explore Air Journey",
  },
  { icon: <FaCar></FaCar>, name: "Search Car", title: "Explore Car Journey" },
];

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [placeHolder, setPlaceholder] = useState("Search All");
  const [title, setTitle] = useState("Where to Go");
  const [search, setSearch] = useState("");
  const [webControllersAPI] = useWebControllers(2);
  const [open, setOpen] = useState(false);
  const [advertisement, setAdvertisement] = useState(null);

  useEffect(() => {
    axiosPublic("/advertisements").then((res) => {
      const advertisementData = res.data.find((item) => item.isActive === true);
      setAdvertisement(advertisementData);
    });
    setOpen(true);
  }, []);

  const handleClick = (item) => {
    setPlaceholder(item.name);
    setTitle(item.title);
  };

  const {
    data: hotels = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["hotelsHome"],
    queryFn: async () => {
      const res = await axiosPublic(
        `/hotels?search=${search}&limit=${webControllersAPI?.numOfShowInHome}`
      );
      return res.data;
    },
  });
  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    setSearch(searchValue);
  };

  useEffect(() => {
    refetch();
  }, [webControllersAPI, search]);

  if (isLoading) {
    return <Loader width="20" center="center"></Loader>;
  }
  return (
    <div className="relative">
      <Title title="Home" />
      <div id="upper" className="overflow-hidden relative" data-aos="zoom-in">
        <div className="rounded-xl hero overflow-hidden h-[600px] w-full text-white">
          <video
            src={bgVdo}
            autoPlay
            loop
            muted
            className="h-full w-full object-cover"
          />
          <div className="hero-overlay bg-black bg-opacity-30"></div>
          <div className="absolute">
            <div className="text-center z-10">
              <p className="font-medium text-xl lg:text-2xl text-white">
                Discover the Planet
              </p>
              <div className="">
                <p className="font-semibold text-white text-xs lg:text-5xl">
                  {title}
                </p>
                <div className="flex items-center justify-center gap-6 text-xl my-4">
                  {searchCategory?.map((item, idx) => (
                    <div key={idx} className={`h-8`}>
                      <h2
                        onClick={() => handleClick(item)}
                        className={`flex items-center gap-2 hover:border-b-2 cursor-pointer ${
                          title == item.title ? "border-b-2" : ""
                        }`}
                      >
                        {item.icon} {item.name}
                      </h2>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSearch}>
                  <div className="relative w-full">
                    <input
                      type="search"
                      name="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-black bg-opacity-30 rounded-md  border-blue-300 border"
                      placeholder={`Search ${placeHolder}...`}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 p-2.5 bg-blue-500 text-xl w-1/6 flex justify-center items-center gap-2 h-full text-white rounded-r-md border border-none hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
                    >
                      Search
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </form>
              </div>
              <AdvertisementModal
                open={open}
                setOpen={setOpen}
                advertisement={advertisement}
              />
            </div>
          </div>
        </div>
      </div>
      <Hotels hotels={hotels} />
      <WhyChoose />
      <TourPackages />
      <About />
      <Weekly />
      <PopularDestination />
      <Blog />
      <Deals />
      <News />
      <UpBtn />
    </div>
  );
};

export default Home;
