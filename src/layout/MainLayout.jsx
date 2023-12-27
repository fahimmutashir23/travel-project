import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { FaArrowLeft, FaArrowRight, FaCar, FaHotel, FaPhone, FaTrain } from "react-icons/fa";
import { MdAttractions, MdFlightTakeoff } from "react-icons/md";
import { FcPlanner } from "react-icons/fc";
import destinationIcon from "../assets/icon/destination (1).png"
import { useState } from "react";

const sideBarItem = [
  { path: "/hotel", icon: <FaHotel />, name: "Hotels" },
  { path: "/flight", icon: <MdFlightTakeoff />, name: "Flights" },
  { path: "/abc", icon: <FaTrain />, name: "Trains" },
  { path: "/s", icon: <FaCar />, name: "Cars" },
  { path: "/sf", icon: <MdAttractions />, name: "Attractions & Tours" },
  { path: "/sfd", icon: <FcPlanner />, name: "Travel Planer" },
  { path: "/sdf", icon: <img src={destinationIcon} className="w-5" />, name: "Destination" },
  { path: "/sdf", icon: <FaPhone />, name: "Talk with us" },
];

const MainLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-8xl mx-auto">
      <Navbar />
      <div className="flex gap-2 relative mt-24">
        <div
          className={`rounded-lg relative ${
            open
              ? "w-[50px] bg-[#00AAF8] min-h-screen transition-all duration-1000"
              : "w-60 transition-all duration-1000"
          }`}
        >
          <div className={`fixed ${open? "": 'bg-[#00AAF8] w-60' } min-h-screen px-4 py-2 rounded-md transition-all duration-1000`}>
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
