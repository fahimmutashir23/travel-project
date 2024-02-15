import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import MobileNav from "./MobileNav";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:flex gap-2 relative mt-20 lg:mt-24 px-4">
        <MobileNav />
        <div className="lg:ml-[80px] lg:flex-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
