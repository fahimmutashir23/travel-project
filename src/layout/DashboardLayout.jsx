import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar";
import DashboardNav from "../components/DashboardSidebar/DashboardNav";

const DashboardLayout = () => {
  return (
    <div>
        <DashboardNav />
      <div className="flex gap-1">
        <div className="w-3/12 mt-[85px]">
          <DashboardSidebar></DashboardSidebar>
        </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
