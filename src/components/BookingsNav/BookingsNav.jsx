import useMenu from "./useMenu";

const BookingsNav = () => {
  const isAdmin = true
  const {userNavMenu, adminNavMenu} = useMenu()
 
  return (
    <div className="navbar justify-between bg-base-200 px-4 py-5 shadow-sm shadow-blue-900">
      <div className="">
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
            {userNavMenu}
          </ul>
        </div>
        <h1 className="text-2xl font-bold uppercase bg-violet-500 text-white px-4 py-2 rounded-md">
          {isAdmin ? "admin" : "Member"}
        </h1>
      </div>

      <div className="">
        <ul className="menu menu-horizontal px-1 text-xl">{isAdmin ? adminNavMenu: userNavMenu}</ul>
      </div>
    </div>
  );
};

export default BookingsNav;
