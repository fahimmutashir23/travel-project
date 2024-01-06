import { Link } from "react-router-dom";

const BookingsNav = () => {
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
  return (
    <div className="navbar bg-base-200 px-4 shadow-sm shadow-blue-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <h1 className="text-2xl font-bold uppercase bg-violet-500 text-white px-4 py-2 rounded-md">
          Member
        </h1>
      </div>
      <div className="navbar-center"></div>

      <div className="navbar-end  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
        </ul>
      </div>
    </div>
  );
};

export default BookingsNav;
