
import {  FaHotel } from "react-icons/fa";

const Sidebar = () => {

  return (
    <div
      className={`bg-[#00AAF8] fixed min-h-screen px-4 py-2 rounded-md text-black `}
    >
      <div>
        <div className="absolute mt-10">
          <ul className="space-y-3">
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaHotel></FaHotel> <span className="font-semibold">Hotel</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
