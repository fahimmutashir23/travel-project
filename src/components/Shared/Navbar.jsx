import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import SignUpModal from "../../Utils/SignUpModal.jsx/SignUpModal";
import SignInModal from "../../Utils/SignInModal.jsx/SignInModal";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage?.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const { user, logOutUser } = useAuth();


  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const navLinks = (
    <>
      <SignUpModal id="my_modal_3"></SignUpModal>
      <SignInModal id="my_modal_2"></SignInModal>
      <li>
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/flight" className="hover:underline">
          Flight
        </NavLink>
      </li>
      <li>
        <NavLink to="/hotel" className="hover:underline">
          Hotel
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="hover:underline"
        >
          SignUp
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="flex">
        <div className="navbar bg-base-100 fixed z-20">
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
              <Link className="bg-transparent">
                <img
                  src={user? user.photoURL : "https://i.ibb.co/LpR33BN/male-avatar-profile-picture-vector-10210618.jpg"}
                  alt=""
                  className=" w-8 lg:w-10 md:w-10 rounded-xl ml-7 mt-3"
                />
              </Link>
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
                <li>
                  <button className="hover:underline">Profile</button>
                </li>
                <li>
                  <button className="hover:underline">My Bookings</button>
                </li>
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

            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />

              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
