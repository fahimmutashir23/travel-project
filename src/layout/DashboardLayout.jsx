import { Outlet } from "react-router-dom";
import BookingsNav from "../components/BookingsNav/BookingsNav";


const DashboardLayout = () => {
    return (
        <div>
            <BookingsNav></BookingsNav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;