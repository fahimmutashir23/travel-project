import { Link } from "react-router-dom";
import { FaCar, FaHotel, FaTrain } from "react-icons/fa";
import { MdAttractions, MdFlightTakeoff, MdOutlineLogout } from "react-icons/md";
import { TbPackages } from "react-icons/tb";
import useAuth from "../Hooks/useAuth";

const MobileNav = () => {
  const { logOutUser } = useAuth();

  return (
    <div className=" lg:w-[70px] bg-[#231F20] z-10 h-[100vh] fixed -mt-1">
      <div className="lg:flex lg:h-[calc(100vh-100px)] w-full flex-col items-center justify-between">
        <div className="border-t">
          <div className="px-2">
            <ul className="space-y-6 border-t flex items-center lg:block">
              <li>
                <Link
                  to="/hotel"
                  className="lg:group relative flex justify-center rounded px-2 py-1 text-gray-500 group"
                >
                  <FaHotel className="lg:text-2xl text-blue-500 group-hover:text-white duration-150" />

                  <span className="absolute top-1/2 left-14 -translate-y-1/2 rounded-r-md w-0 bg-[#231F20] py-2 text-sm font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Hotel
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tourPackagesPage"
                  className="lg:group relative flex justify-center rounded px-2 py-1 text-gray-500 group"
                >
                  <TbPackages className="lg:text-2xl text-blue-500 group-hover:text-white duration-150" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-[#231F20] py-2 text-sm font-medium group-hover:w-36 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Travel Packages
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/flights"
                  className="group relative flex justify-center rounded px-2 py-1 group"
                >
                  <MdFlightTakeoff className="lg:text-2xl text-blue-500 group-hover:text-white duration-150" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-[#231F20] py-2 text-sm font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Flights
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/trains "
                  className="group relative flex justify-center rounded px-2 py-1.5 group"
                >
                  <FaTrain className="lg:text-2xl text-blue-500 group-hover:text-white duration-150" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-[#231F20] py-2 text-sm font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Trains
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="lg:group relative flex justify-center rounded px-2 py-1.5 group"
                >
                  <FaCar className="lg:text-2xl text-blue-500 group-hover:text-white duration-150" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-[#231F20] py-2 text-sm font-medium group-hover:w-16 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Cars
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/attractions"
                  className="group relative flex justify-center rounded px-2 py-1.5 group"
                >
                  <MdAttractions className="lg:text-2xl text-blue-500 group-hover:text-white duration-150" />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-28 bg-[#231F20] py-2 text-sm font-medium group-hover:w-36 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Attractions & Tours
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/planner"
                  className="group relative flex justify-center rounded px-2 py-1.5 group"
                >
                  <img
                    src="https://i.postimg.cc/RVwPXDxb/traveltourpageimage.webp"
                    alt=""
                    className="w-5 lg:w-8"
                  />

                  <span className="absolute top-1/2 left-10 -translate-y-1/2 rounded-r-md w-0 bg-[#231F20] py-2 text-sm font-medium group-hover:w-32 transition-all duration-300 group-hover:px-4 group-hover:text-white group-hover:text-opacity-100 group-hover:opacity-100 opacity-0">
                    Travel Planer
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <li className="hidden lg:flex">
          <button onClick={() => logOutUser()}>
          <MdOutlineLogout className="text-2xl text-blue-500"/>
          </button>
        </li>
      </div>
    </div>
  );
};
export default MobileNav;
