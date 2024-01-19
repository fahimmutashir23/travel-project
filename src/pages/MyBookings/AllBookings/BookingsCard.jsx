import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Loader from "../../../Utils/Loader/Loader";
import useAuth from "../../../Hooks/useAuth";
import { Button, Divider, IconButton, InputBase, Paper } from "@mui/material";
import { MenuOutlined, Search } from "@mui/icons-material";
import PageTitle from "../../../components/Shared/PageTitle/PageTitle";

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
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-semibold bg-blue-400 max-w-fit px-5 py-2 rounded-md text-white">
            Total Bookings : <span>{bookings.length}</span>
          </h1>
        </div>
        <PageTitle title="All Booking" />
        <div className="flex-1 flex justify-end">
          <Paper
            component="form"
            // onSubmit={handleSearch}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              maxWidth: 400,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuOutlined />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Packages"
              name="search"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              type="submit"
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <Search />
            </IconButton>
          </Paper>
        </div>
      </div>
      <div>
        {bookings.map((booking) => (
          <section
            key={booking._id}
            className="flex gap-2 max-w-5xl mx-auto border-2 bg-base-200 px-3 py-5 rounded-md mb-5"
          >
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
                <h1>
                  Pay :{" "}
                  <span className="font-bold text-xl">
                    {booking.roomPrice}$
                  </span>
                </h1>
                <div className="text-right">
                  <h1>
                    Transaction ID :{" "}
                    <span className="font-semibold text-lg">
                      {booking.transactionID}
                    </span>
                  </h1>
                  <h1>
                    Booking ID :{" "}
                    <span className="font-semibold text-lg">
                      our_travel{booking._id.slice(-6)}
                    </span>
                  </h1>
                </div>
              </div>
              <h1>Payment Date : {booking.date}</h1>
              <h1>Check In Date : {booking.checkIn}</h1>
              <div className="flex justify-between">
                <h1>Check Out Date : {booking.checkOut}</h1>
                <Button sx={{ backgroundColor: "green" }} variant="contained">
                  Receipt
                </Button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BookingsCard;
