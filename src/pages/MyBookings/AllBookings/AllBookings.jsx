import DashboardSidebar from "../../../components/DashboardSidebar/DashboardSidebar";
import BookingsCard from "./BookingsCard";

const AllBookings = () => {
  return (
    <div className="mt-24">
      <DashboardSidebar />
      <div className="px-4">
        All bookings
        <BookingsCard />
      </div>
    </div>
  );
};

export default AllBookings;
