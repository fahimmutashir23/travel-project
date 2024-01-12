import { NavLink } from "react-router-dom";

const useMenu = () => {
  const subMenu = (
<>
         <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/allBookings"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">All Bookings</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/hotel"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Hotel</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/flight"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Flight</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/car"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Car</div>
        </NavLink>
      </li>
    </>
  );

  // Admin Bookings Submenu
  const adminBookingsSubMenu = (
    <>
         <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/allBookings"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">All Bookings</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/hotel"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Hotel</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/flight"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Flight</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/car"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Car</div>
        </NavLink>
      </li>
    </>
  );

  // User Menu
  const userNavMenu = (
    <>
        <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-2"
              : ""
          }
          to="/account"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Account</div>
        </NavLink>
      </li>
      <li className="text-base">
        <details>
          <summary>Bookings</summary>
          <ul className="w-full">{subMenu}</ul>
        </details>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-1"
              : ""
          }
          to="/dashboard/profile"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Profile</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/All Receipt"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">All Receipt</div>
        </NavLink>
      </li>
    </>
  );

  // Admin Menu
  const adminNavMenu = (
    <>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-2"
              : ""
          }
          to="/dashboard/dashboard"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Dashboard</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/revenue"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Revenue</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/AllUser"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">All User</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <details>
          <summary>Current Bookings</summary>
          <ul className="w-full">{adminBookingsSubMenu}</ul>
        </details>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/dashboard/addHotels"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">Add Hotels</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/dashboard/allRooms"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">All Hotels</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-base">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/dashboard/allPackages"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">All Packages</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/AllUser"
        >
       <div className="hover:translate-x-3 transition-transform duration-300 text-base">All Payments</div>
        </NavLink>
      </li>
    </>
  );

  return { userNavMenu, adminNavMenu };
};

export default useMenu;
