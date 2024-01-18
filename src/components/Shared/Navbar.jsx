
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [isAdmin] = useAdmin();


  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/tourPackagesPage" className="hover:underline">
          Tour Packages
        </NavLink>
      </li>
      <li>
        <NavLink to="/hotel" className="hover:underline">
          Hotel
        </NavLink>
      </li>
      <li>
        <NavLink
        to='/signUp'
          className="hover:underline"
        >
          Sign Up
        </NavLink>
      </li>
      { !user && <li>
        <NavLink
        to='/signIn'
          className="hover:underline"
        >
          Sign In
        </NavLink>
      </li>}
    </>
  );

  
  return (
    <div className="">
      <div className="flex">
        <div className="navbar bg-base-100 fixed z-20 shadow-lg px-4">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn px-1 lg:hidden">
                <TiThMenu></TiThMenu>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content lg:mt-3 z-[100] lg:p-2 shadow rounded-box w-36"
              >
                {navLinks}
              </ul>
            </div>
            <div>
              <p className="text-pink-600 font-bold text-xs md:text-xs lg:text-base">
                Tour & Travel
              </p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex px-1 lg:gap-4 lg:text-md font-semibold">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user? <p>Hi! <span className="text-violet-500">{user.displayName}</span></p> : ''
            }
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src= {user? user.photoURL : "https://i.ibb.co/LpR33BN/male-avatar-profile-picture-vector-10210618.jpg"}
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-40"
              >
                <Link to="/dashboard/profile"><li>
                  <button className="hover:underline">Profile</button>
                </li></Link>

                <li>
                  <Link to="/bookings" className="hover:underline">My Bookings</Link>
                </li>
                {user && isAdmin && <li>
                  <Link to="/dashboard/dashboard" className="hover:underline">Admin</Link>
                </li>}
                <li>
                  <button className="hover:underline">Favorite</button>
                </li>
                <hr />
                {user ? (
                  <li>
                    <button
                      onClick={() => logOutUser()}
                      className="hover:underline"
                    >
                      LogOut
                    </button>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                      className="hover:underline"
                    >
                      SignIn
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
