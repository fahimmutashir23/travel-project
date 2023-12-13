import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer/Footer";
// import Sidebar from "../components/Sidebar/Sidebar";
import { FaArrowLeft, FaArrowRight, FaHotel } from "react-icons/fa";
import { useState } from "react";

const sideBarItem = [
  { path: "/", icon: <FaHotel></FaHotel>, name: "Hotel" },
  { path: "/hotel", icon: <FaHotel></FaHotel>, name: "Hotel" },
  { path: "/abc", icon: <FaHotel></FaHotel>, name: "Hotel" },
  { path: "/s", icon: <FaHotel></FaHotel>, name: "Hotel" },
  { path: "/sf", icon: <FaHotel></FaHotel>, name: "Hotel" },
  { path: "/sfd", icon: <FaHotel></FaHotel>, name: "Hotel" },
  { path: "/sdf", icon: <FaHotel></FaHotel>, name: "Hotel" },
  { path: "/sdf", icon: <FaHotel></FaHotel>, name: "Hotel" },
];

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <div className="flex gap-2 relative mt-24">
        <div
          className={`rounded-lg relative ${
            open
              ? "w-[50px] overflow-hidden transition-all duration-1000"
              : "block w-60 transition-all duration-1000"
          }`}
        >
          <div className={`fixed bg-[#00AAF8] w-60 min-h-screen px-4 py-2 rounded-md`}>
            <div className="text-black absolute  z-30">
              {open ? (
                <FaArrowRight onClick={() => setOpen(!open)}></FaArrowRight>
              ) : (
                <FaArrowLeft onClick={() => setOpen(!open)}></FaArrowLeft>
              )}
            </div>
            <div className="mt-9">
              <ul className={`${open? 'space-y-[26px]' : 'space-y-4'}`}>
                {sideBarItem?.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.path}
                      className="border-none text-black flex items-center gap-4 text-lg "
                    >
                      <span>{item.icon}</span> {open? "" : item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
