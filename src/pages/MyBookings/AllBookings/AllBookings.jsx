import BookingsNav from "../../../components/BookingsNav/BookingsNav";
import BookingsCard from "./BookingsCard";

const AllBookings = () => {
  return (
    <div className="mt-24">
      <BookingsNav />
      <div className="px-4">
        All bookings
        <BookingsCard />
      </div>
    </div>
  );
};

export default AllBookings;
