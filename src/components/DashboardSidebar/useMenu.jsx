import { NavLink } from "react-router-dom";

const useMenu = () => {
  const subMenu = (
<>
         <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/allBookings"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">All Bookings</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/hotel"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Hotel</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
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
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/car"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Car</div>
        </NavLink>
      </li>
    </>
  );

  // Admin Bookings Submenu
  const adminBookingsSubMenu = (
    <>
         <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/allBookings"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">All Bookings</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/hotel"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Hotel</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
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
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/car"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Car</div>
        </NavLink>
      </li>
    </>
  );

  // User Menu
  const userNavMenu = (
    <>
        <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/account"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Account</div>
        </NavLink>
      </li>
      <li>
        <details>
          <summary>Bookings</summary>
          <ul className="w-full">{subMenu}</ul>
        </details>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/profile"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Profile</div>
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
       <div className="hover:translate-x-3 transition-transform duration-300">All Receipt</div>
        </NavLink>
      </li>
    </>
  );

  // Admin Menu
  const adminNavMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-blue-500" : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/dashboard"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Dashboard</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 min-w-full text-white py-3"
              : ""
          }
          to="/revenue"
        >
       <div className="hover:translate-x-3 transition-transform duration-300">Revenue</div>
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
       <div className="hover:translate-x-3 transition-transform duration-300">All User</div>
        </NavLink>
      </li>
      <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white  text-xl">
        <details>
          <summary>Current Bookings</summary>
          <ul className="w-full">{adminBookingsSubMenu}</ul>
        </details>
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
       <div className="hover:translate-x-3 transition-transform duration-300">Add Rooms</div>
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
       <div className="hover:translate-x-3 transition-transform duration-300">All Rooms</div>
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
       <div className="hover:translate-x-3 transition-transform duration-300">All Payments</div>
        </NavLink>
      </li>
    </>
  );

  return { userNavMenu, adminNavMenu };
};

export default useMenu;
