import logo1 from '../../assets/Logo/Logo3.png';
import { Link, NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import userAvatar from '../../assets/icon/userAvater.png'

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(()=> {
    axiosSecure(`/users?email=${user?.email}`)
    .then(res => {
      setIsAdmin(res.data[0]?.admin)
    })
  }, [axiosSecure, user?.email])

  const {data: users = [], refetch} = useQuery({
    queryKey: [''],
    queryFn: async () => {
      const res = await axiosSecure(`/users?email=${user?.email}`)
      return res.data
    }
  })

  useEffect(() => {
      refetch()
  }, [user, users])

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-green-200 duration-200 text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/tourPackagesPage" className="hover:text-green-200 duration-200 text-xl">
          Tour Packages
        </NavLink>
      </li>
      <li>
        <NavLink to="/hotel" className="hover:text-green-200 duration-200 text-xl">
          Hotel
        </NavLink>
      </li>
      <li>
        <NavLink
        to='/signUp'
          className="hover:text-green-200 duration-200 text-xl"
        >
          Sign Up
        </NavLink>
      </li>
      { !user && <li>
        <NavLink
        to='/signIn'
          className="hover:text-green-200 duration-200 text-xl"
        >
          Sign In
        </NavLink>
      </li>}
    </>
  );

  return (
    <>
      <div className="flex">
        <div className="navbar bg-[#231F20] text-white fixed z-20 shadow-lg px-4">
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
            <Link to='/'>
              <img src={logo1} alt="" className='w-14' />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex px-1 lg:gap-4 lg:text-md font-semibold">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">
            {
              user? <p>Hi! <span className="text-violet-500">{users[0]?.name}</span></p> : ''
            }
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="">
                <div className="">
                  <img
                    src= {user ? users[0]?.profileImage : userAvatar}
                    alt=""
                    className='w-12 rounded-full hover:cursor-pointer hover:bg-white duration-300'
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-0 shadow menu menu-sm dropdown-content bg-[#231F20] rounded-md w-40"
              >
                <Link to="/profile"><li>
                  <button className="rounded-md text-xl font-semibold">Profile</button>
                </li></Link>

                <li>
                  <Link to="/bookings" className="rounded-md text-xl font-semibold">My Bookings</Link>
                </li>
                {user && isAdmin && <li>
                  <Link to="/dashboard/dashboard" className="rounded-md text-xl font-semibold">Admin</Link>
                </li>}
                <li>
                  <button className="rounded-md text-xl font-semibold">Favorite</button>
                </li>
                <hr />
                {user ? (
                  <li>
                    <button
                      onClick={() => logOutUser()}
                      className="rounded-md text-xl font-semibold"
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
                      className="rounded-md text-xl font-semibold"
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
    </>
  );
};

export default Navbar;
