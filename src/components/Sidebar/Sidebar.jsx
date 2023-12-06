import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaHotel } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#00AAF8] px-4 py-2 rounded-md w-60 min-h-full text-black ${
        open
          ? "w-[50px] transition-all duration-1000"
          : "block transition-all duration-1000"
      }`}
    >
      <div>
        <div>
          {open ? (
            <FaArrowRight onClick={() => setOpen(!open)}></FaArrowRight>
          ) : (
            <FaArrowLeft onClick={() => setOpen(!open)}></FaArrowLeft>
          )}
        </div>
        <div className="absolute mt-4">
          <ul className="space-y-3">
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
            <li className="flex items-center gap-4 text-xl"><FaHotel></FaHotel> <span className="font-semibold">Hotel</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
