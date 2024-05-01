import { Link } from "react-router-dom";
import { FaCar, FaHotel, FaTrain } from "react-icons/fa";
import { MdAttractions, MdFlightTakeoff } from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import useAuth from "../Hooks/useAuth";

const MobileNav = () => {
  const { logOutUser } = useAuth();

  return (
    <div className="rounded-md lg:w-[70px] bg-base-100 z-10 h-[100vh] fixed">
      <div className="lg:flex lg:h-[calc(100vh-100px)] w-full flex-col items-center justify-between border-e">
        <div className="border-t border-gray-100">
          <div className="px-2">
            <ul className="space-y-6 border-t border-gray-100 flex items-center lg:block">
              <li>
                <Link
                  to="/hotel"
                  className="lg:group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 group"
                >
                  <FaHotel className="lg:text-2xl text-blue-500" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-blue-500 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Hotel
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tourPackagesPage"
                  className="lg:group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 group"
                >
                  <TbPackages className="lg:text-2xl text-blue-500" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-24 bg-blue-500 py-1.5 text-xs font-medium group-hover:w-32 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Travel Packages
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/flights"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <MdFlightTakeoff className="lg:text-2xl text-blue-500" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-blue-500 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Flights
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/trains "
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <FaTrain className="lg:text-2xl text-blue-500" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-blue-500 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Trains
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="lg:group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 group"
                >
                  <FaCar className="lg:text-2xl text-blue-500" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-blue-500 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Cars
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/attractions"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <MdAttractions className="lg:text-2xl text-blue-500" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-28 bg-blue-500 py-1.5 text-xs font-medium group-hover:w-36 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Attractions & Tours
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/planner"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <img
                    src="https://i.postimg.cc/RVwPXDxb/traveltourpageimage.webp"
                    alt=""
                    className="w-5 lg:w-8"
                  />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-20 bg-blue-500 py-1.5 text-xs font-medium group-hover:w-28 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Travel Planer
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <li className="hidden lg:flex">
          <button onClick={() => logOutUser()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </li>
      </div>
    </div>
  );
};
export default MobileNav;
