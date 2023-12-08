import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="max-w-8xl mx-auto">
      <Navbar />
      <div className="flex gap-2 relative">
        <div className="">
        <Sidebar />
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
