import { NavLink } from "react-router-dom";
import Lottie from 'lottie-react';
import dashboardIcon from "../../assets/lottie/dashboardLottie.json"
import { FaUserAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { BsBuildingFillAdd } from "react-icons/bs";
import { MdViewList } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { GoPackageDependencies } from "react-icons/go";
import { MdPayments } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

const useMenu = () => {

  const subMenu = (
    <>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : "hover:translate-x-2 transition-all duration-300"
          }
          to="/allBookings"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            All Bookings
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/hotel"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Hotel
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/flight"
        >
          <div className="hover:translate-x-3 transition-transform duration-300">
            Flight
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/car"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Car
          </div>
        </NavLink>
      </li>
    </>
  );

  // Admin Bookings Submenu --------------------------------------------------------------------------------------
  const adminBookingsSubMenu = (
    <>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/dashboard/allBookings"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            All Bookings
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/dashboard/packagesBookings"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Packages
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/dashboard/hotelBookings"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Hotel
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/dashboard/flightBookings"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Flight
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/dashboard/carBookings"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Car
          </div>
        </NavLink>
      </li>
    </>
  );

  // User Menu --------------------------------------------------------------------------------------
  const userNavMenu = (
    <>
       <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-gray-600 min-w-full text-white py-2"
              : ""
          }
          to="/bookings/reviews"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Review Form</div>
        </NavLink>
      </li>
      <li className="text-base">
        <details>
          <summary>Bookings</summary>
          <ul className="w-full">{subMenu}</ul>
        </details>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-1" : ""
          }
          to="/bookings/profile"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Profile
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 min-w-full text-white py-3" : ""
          }
          to="/bookings/allReceipt"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            All Receipt
          </div>
        </NavLink>
      </li>
    </>
  );

  // Admin Menu --------------------------------------------------------------------------------------
  const adminNavMenu = (
    <>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-xl group">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-2" : ""
          }
          to="/dashboard/dashboard"
        >
          <div className="flex items-center gap-3 ">
          <div>
          <Lottie
           animationData={dashboardIcon}
           style={{ width: '32px', height: '32px'}}
           loop={true}
           autoPlay={true}
           /> 
          </div>
          <span className="group-hover:translate-x-3 transition-transform duration-300">Dashboard</span>
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-xl group">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allUsers"
        >
          <div className="flex items-center gap-3 ">
          <FaUserAlt className="text-2xl text-blue-500" />
          <span className="group-hover:translate-x-3 transition-transform duration-300">All Users</span>
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 text-xl">
        <details>
          <summary className="hover:bg-gray-600 hover:text-white rounded-none cursor-pointer flex items-center">
          <FaRegCalendarCheck className="text-2xl text-blue-500" />
          <span className="">Bookings</span>
          </summary>
          <ul className="w-full">{adminBookingsSubMenu}</ul>
        </details>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/addHotels"
        >
          <div className="flex items-center gap-3 ">
          <BsBuildingFillAdd className="text-2xl text-blue-500" />
          <span className="group-hover:translate-x-3 transition-transform duration-300">Add Hotels</span>
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-xl group">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allRooms"
        >
          <div className="flex items-center gap-3 ">
          <MdViewList className="text-2xl text-blue-500" />
          <span className="group-hover:translate-x-3 transition-transform duration-300">All Hotels</span>
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-xl group">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/addTourPackages"
        >
          <div className="flex items-center gap-3 ">
          <GoPackage className="text-2xl text-blue-500" />
          <span className="group-hover:translate-x-3 transition-transform duration-300">Add Packages</span>
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-xl group">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allPackages"
        >
          <div className="flex items-center gap-3 ">
          <GoPackageDependencies className="text-2xl text-blue-500" />
          <span className="group-hover:translate-x-3 transition-transform duration-300">All packages</span>
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl group">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allPayments"
        >
          <div className="flex items-center gap-3 ">
          <MdPayments className="text-2xl text-blue-500" />
          <span className="group-hover:translate-x-3 transition-transform duration-300">All Payments</span>
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl group">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/webControl"
        >
          <div className="flex items-center gap-3 ">
          <IoSettingsSharp className="text-2xl text-blue-500" />
          <span className="group-hover:translate-x-3 transition-transform duration-300">Settings</span>
          </div>
        </NavLink>
      </li>
    </>
  );

  return { userNavMenu, adminNavMenu };
};

export default useMenu;
