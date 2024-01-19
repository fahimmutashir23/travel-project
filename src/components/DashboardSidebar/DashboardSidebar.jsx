import useMenu from "./useMenu";
import profileIcon from "../../assets/icon/profile.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useUsers from "../../Hooks/useUsers";


const DashboardSidebar = () => {
  const [isAdmin] = useAdmin();
  const { userNavMenu, adminNavMenu } = useMenu();
  const {user, logOutUser} = useAuth();
  const [users] = useUsers(user?.email);
const navigate = useNavigate();
  const handleLogOut = () => {
    logOutUser()
    navigate('/')
  }

  return (
    <div className="bg-base-300 h-full overflow-y-auto">
      <div className="py-4 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <img src={user && users[0]?.profileImage || profileIcon} alt="" className="w-32 h-32 rounded-full" />
          <h2 className="text-center mt-2 font-semibold">{user && users[0]?.name}</h2>
          <div className="text-center">
            {isAdmin ? (
              <div>
                <Link
                  to="/dashboard"
                  className="bg-blue-500 text-white px-3 py-1 rounded-[4px] uppercase text-xs"
                >
                  Admin
                </Link>
                <Link
                  to="/"
                  className="bg-blue-500 text-white px-3 py-1 rounded-[4px] uppercase ml-2 text-xs"
                >
                  User
                </Link>
              </div>
            ) : (
              "User"
            )}
          </div>
        </div>
      </div>
      <div className="">
      <ul className="text-xl font-medium">
          {isAdmin ? adminNavMenu : userNavMenu}
        </ul>
        <div className="bg-black w-full h-[1px] mt-4"></div>
        <div>
          <li className="menu py-0 rounded-none px-0 hover:bg-blue-500 hover:text-white text-xl">
            <button
            onClick={handleLogOut}
              className={({ isActive }) =>
                isActive ? "bg-blue-500 min-w-full text-white py-3" : ""
              }
            >
              <div className="hover:translate-x-3 transition-transform duration-300 text-base font-semibold">
                Log Out
              </div>
            </button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
