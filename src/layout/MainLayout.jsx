import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import MobileNav from "./MobileNav";

const MainLayout = () => {

  return (
    <div className="">
      <Navbar />
      <div className="flex gap-2 relative mt-24 px-4">
           <MobileNav/>
        <div className="ml-[60px] flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
