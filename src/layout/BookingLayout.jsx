import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const BookingLayout = () => {
    return (
        <div className="">
            <Navbar />
            <div className="">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default BookingLayout;