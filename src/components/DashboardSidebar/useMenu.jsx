import { NavLink } from "react-router-dom";
import Lottie from 'lottie-react';
import dashboardIcon from "../../assets/lottie/dashboardLottie.json"

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
          to="/account"
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
          to="/profile"
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
          to="/All Receipt"
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
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-2" : ""
          }
          to="/dashboard/dashboard"
        >
          <div className="flex items-center gap-3 hover:translate-x-3 transition-transform duration-300">
          <div>
          <Lottie
           animationData={dashboardIcon}
           style={{ width: '32px', height: '32px'}}
           loop={true}
           autoPlay={true}
           /> 
          </div> Dashboard
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allUsers"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            All User
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <details>
          <summary>Current Bookings</summary>
          <ul className="w-full">{adminBookingsSubMenu}</ul>
        </details>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/addHotels"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Add Hotels
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allRooms"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            All Hotels
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/addTourPackages"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Add Tour Packages
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allPackages"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            All Packages
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/allPayments"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            All Payments
          </div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-gray-600 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-gray-600 rounded-none min-w-full text-white py-3" : ""
          }
          to="/dashboard/webControl"
        >
          <div className="hover:translate-x-3 transition-transform duration-300 text-base">
            Web Control
          </div>
        </NavLink>
      </li>
    </>
  );

  return { userNavMenu, adminNavMenu };
};

export default useMenu;
