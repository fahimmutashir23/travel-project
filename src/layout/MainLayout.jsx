import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { FaCar, FaHotel, FaPhone, FaTrain } from "react-icons/fa";
import { MdAttractions, MdFlightTakeoff } from "react-icons/md";
import { FcPlanner } from "react-icons/fc";
import destinationIcon from "../assets/icon/destination (1).png";
import { useState } from "react";

const sideBarItem = [
  { path: "/hotel", icon: <FaHotel />, name: "Hotels" },
  { path: "/flight", icon: <MdFlightTakeoff />, name: "Flights" },
  { path: "/abc", icon: <FaTrain />, name: "Trains" },
  { path: "/s", icon: <FaCar />, name: "Cars" },
  { path: "/sf", icon: <MdAttractions />, name: "Attractions & Tours" },
  { path: "/sfd", icon: <FcPlanner />, name: "Travel Planer" },
  {
    path: "/sdf",
    icon: <img src={destinationIcon} className="w-5" />,
    name: "Destination",
  },
  { path: "/sdf", icon: <FaPhone />, name: "Talk with us" },
];

const MainLayout = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      <Navbar />
      <div className="flex gap-2 relative mt-24 px-4">
        <div
          className={`rounded-lg w-[50px] bg-base-300 min-h-screen fixed`}
        >
          <div className="">
            <div className="mt-2">
              <ul className={`space-y-7`}>
                {sideBarItem?.map((item, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={item.path}
                      className="border-none text-black flex items-center gap-4 text-lg "
                    >
                      <span className="text-2xl ml-3">{item.icon}</span>{" "}
                      {/* <span className="bg-base-300 z-50">{item.name}</span> */}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-[60px]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
