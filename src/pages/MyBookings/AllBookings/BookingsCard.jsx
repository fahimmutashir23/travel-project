import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Utils/Loader/Loader";
import useAuth from "../../../Hooks/useAuth";
import { Button } from "@mui/material";

const BookingsCard = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["allBookings"],
    queryFn: async () => {
      const res = await axiosPublic(`/bookings?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader width={20} center="center"></Loader>;
  }

  return (
    <div>
      data : {bookings.length}
    <div>
        {
            bookings.map(booking => (
                <section key={booking._id} className="flex gap-2 max-w-5xl mx-auto border-2 bg-base-200 px-3 py-5 rounded-md mb-5">
                <div className="w-1/3 text-center">
                  <h1 className="text-2xl font-serif text-green-700">
                    {booking.hotelName}
                  </h1>
                  <h1 className="text-xl font-semibold">{booking.roomName}</h1>
                  <h1 className="text-md font-semibold">{booking.userName}</h1>
                  <h1>{booking.email}</h1>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h1>Pay : <span className="font-bold text-xl">{booking.roomPrice}$</span></h1>
                    <h1>Transaction ID : <span className="font-semibold text-lg">{booking.transactionID}</span></h1>
                  </div>
                  <h1>Payment Date : {booking.date}</h1>
                  <h1>Check In Date : {booking.checkIn}</h1>
                  <div className="flex justify-between">
                  <h1>Check Out Date : {booking.checkOut}</h1>
                  <Button sx={{backgroundColor: 'green'}} variant="contained">Receipt</Button>
                  </div>
                </div>
              </section>
            ))
        }
    </div>
    </div>
  );
};

export default BookingsCard;
