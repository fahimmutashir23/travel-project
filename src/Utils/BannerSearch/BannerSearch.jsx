import { useState } from "react";
import { FaCar, FaHome, FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

const searchCategory = [
  { icon: <FaHome></FaHome>, name: "Search All", title: 'Where to Go' },
  { icon: <FaHotel></FaHotel>, name: "Search Hotel", title: 'Stay Somewhere great'},
  { icon: <MdFlightTakeoff />, name: "Search Air", title: 'Explore Air Journey' },
  { icon: <FaCar></FaCar>, name: "Search Car", title: 'Explore Car Journey'},
];

const BannerSearch = () => {
  const [placeHolder, setPlaceholder] = useState("Search All");
  const [title, setTitle] = useState('Where to Go');

  const handleClick = (item) => {
    setPlaceholder(item.name);
    setTitle(item.title)
  };
  return (
    <div className="">
      <p className="font-semibold text-white text-xs lg:text-5xl">
        {title}
      </p>
      <div className="py-4 px-16 rounded-xl backdrop-blur-[4px]">
      <div className="flex items-center justify-center gap-6 text-xl mb-4">
        {searchCategory?.map((item, idx) => (
          <div
            key={idx}
            className={`h-8`}
          >
            <h2
              onClick={() => handleClick(item)}
              className={`flex items-center gap-2 hover:border-b-2 cursor-pointer ${title == item.title? 'border-b-2' : ''}`}
            >
              {item.icon} {item.name}
            </h2>
          </div>
        ))}
      </div>
      <form>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-md  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder={`Search ${placeHolder}...`}
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-xl w-1/6 flex justify-center items-center gap-2 h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
            <span className="sr-only">Search</span>
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default BannerSearch;
