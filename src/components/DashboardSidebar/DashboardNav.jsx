import { Link } from "react-router-dom";
import logo1 from '../../assets/Logo/Logo3.png';

const DashboardNav = () => {
  return (
    <div className="flex justify-between items-center py-3 px-4 bg-red-200 shadow-md fixed w-full z-30">
      <div className="w-1/3">
        <img src={logo1} alt="logo" className="w-14" />
      </div>
      <div className="flex-1">
        <form>
          <div className="flex">
            <div className="relative w-full">
              <input
                type="search"
                className="block p-2.5 w-full text-gray-900 bg-white border-[1px] border-black rounded-full"
                placeholder="Search for city or address"
                required
              />
              <button
                type="submit"
                className="absolute top-0 end-0 h-full p-2.5 font-medium text-white rounded-full"
              >
                <svg
                  className="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>

      </div>
      <div className="w-1/4 flex justify-end font-semibold">
        <Link className="btn" to='/'>Go Home</Link>
      </div>
    </div>
  );
};

export default DashboardNav;
