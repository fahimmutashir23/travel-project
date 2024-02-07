import { Link } from "react-router-dom";
import { FaCar, FaHotel, FaTrain } from "react-icons/fa";
import { MdAttractions, MdFlightTakeoff } from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import { FcPlanner } from "react-icons/fc";

const MobileNav = () => {
  return (
    <div className={`rounded-lg w-[50px] bg-base-100 min-h-screen fixed z-10 `}>
      <div className="flex h-screen w-full flex-col justify-between border-e">
        <div>
          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="mb-4 mt-2">
                <Link
                  to="/hotel"
                  className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                >
                  <FaHotel />
                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Hotels
                  </span>
                </Link>
              </div>

              <ul className="space-y-6 border-t border-gray-100">
                <li>
                  <Link
                    to="/tourPackagesPage"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <TbPackages />

                    <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-32 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                      Travel Packages
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/flight"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <MdFlightTakeoff />

                    <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                      Flights
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/signIn "
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FaTrain />

                    <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                      Trains
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FaCar className="text-red-700" />

                    <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                      Cars
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <MdAttractions />

                    <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-36 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                      Attractions & Tours
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <img
                      src="https://i.postimg.cc/RVwPXDxb/traveltourpageimage.webp"
                      alt=""
                      className="w-8"
                    />

                    <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-28 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                      Travel Planer
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <FcPlanner />

                    <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded w-0 bg-gray-900 py-1.5 text-xs font-medium group-hover:w-28 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                      Travel Planer
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="/logout">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
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

              <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Logout
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;

// https://i.postimg.cc/RVwPXDxb/traveltourpageimage.webp
