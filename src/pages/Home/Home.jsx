import bgVdo from "../../assets/backgroundImage/seeVdo2.mp4"
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
      const res = await axiosPublic(`/hotels?search=${search}`);
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
  }, [search, refetch]);

  if (isLoading) {
    return <Loader width="20" center="center"></Loader>;
  }
  return (
    <div>
      <Title title="Home" />
      <div className="overflow-hidden relative" data-aos="zoom-in">
        <div className="rounded-xl hero overflow-hidden h-[500px] text-white">
          <video src={bgVdo} autoPlay loop muted className="h-full w-full object-cover" />
          <div className="hero-overlay bg-black bg-opacity-20"></div>
          <div
            className="absolute"
          >
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
                      className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      placeholder={`Search ${placeHolder}...`}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 end-0 p-2.5 bg-blue-600 text-xl w-1/6 flex justify-center items-center gap-2 h-full text-white rounded-r-md border border-none hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
                    >
                      Search
                      <span className="sr-only">Search</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hotels hotels={hotels} />
      <TourPackages />
      <About />
      <PopularDestination />
      <WhyChoose />
      <Weekly />
      <News />
    </div>
  );
};

export default Home;
