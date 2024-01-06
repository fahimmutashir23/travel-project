import { Link } from "react-router-dom";

const useMenu = () => {
  const subMenu = (
    <>
      <li>
        <Link>All Bookings</Link>
      </li>
      <li>
        <Link>Hotels</Link>
      </li>
      <li>
        <Link>Flight</Link>
      </li>
      <li>
        <Link>Cars</Link>
      </li>
    </>
  );

  // Admin Bookings Submenu
  const adminBookingsSubMenu = (
    <>
      <li>
        <Link>All Bookings</Link>
      </li>
      <li>
        <Link>Hotels</Link>
      </li>
      <li>
        <Link>Flight</Link>
      </li>
      <li>
        <Link>Cars</Link>
      </li>
    </>
  );

  // User Menu
  const userNavMenu = (
    <>
      <li>
        <Link>Account</Link>
      </li>
      <li>
        <details>
          <summary>Bookings</summary>
          <ul className="w-44">{subMenu}</ul>
        </details>
      </li>
      <li>
        <Link>My Cart</Link>
      </li>
      <li>
        <Link>All Receipt</Link>
      </li>
    </>
  );

  // Admin Menu
  const adminNavMenu = (
    <>
      <li>
        <Link>Revenue</Link>
      </li>
      <li>
        <Link>All User</Link>
      </li>
      <li>
        <details>
          <summary>Current Bookings</summary>
          <ul className="w-44">{adminBookingsSubMenu}</ul>
        </details>
      </li>
      <li>
        <Link>Add Rooms</Link>
      </li>
      <li>
        <Link>All Rooms</Link>
      </li>
      <li>
        <Link>All Payments</Link>
      </li>
    </>
  );

  return {userNavMenu, adminNavMenu};
};

export default useMenu;
