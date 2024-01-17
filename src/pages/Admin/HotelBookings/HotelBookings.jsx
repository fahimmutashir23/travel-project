import { MenuOutlined, Search } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import PageTitle from "../../../components/Shared/PageTitle/PageTitle";
import useBooking from "../../../Hooks/useBooking";
import { useEffect, useState } from "react";
import Loader from "../../../Utils/Loader/Loader";
import BookingsTable from "../Bookings/BookingsTable";

const HotelBookings = () => {
    const category = "Hotels"
    const [searchValue, setSearchValue] = useState({});
    const [booking, isLoading, refetch] = useBooking({}, searchValue, category);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        setSearchValue(searchValue)
        e.target.reset()
    };
    
    useEffect(() => {
        refetch()
    }, [searchValue])
    
      if (isLoading) {
        return <Loader width="20" center="center" />;
      }
     
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex-1"></div>
        <PageTitle title="Hotels Booking" />
        <div className="flex-1 flex justify-end">
          <Paper
            component="form"
            onSubmit={handleSearch}
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
      <div className="relative overflow-x-auto shadow-md rounded-md">
        <table className="w-full text-left rtl:text-right ">
          <thead className="text-lg uppercase bg-blue-400 text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                User Email
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Confirm
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Cancel
              </th>
            </tr>
          </thead>
            
          <tbody>
            {booking.map((bookingsItem) => (
              <BookingsTable
                key={bookingsItem._id}
                bookingsItem={bookingsItem}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelBookings;
