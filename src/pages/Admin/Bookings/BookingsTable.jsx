import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { GiConfirmed } from "react-icons/gi";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";

const BookingsTable = ({ bookingsItem, refetch, statFetch }) => {
    const {userName, email, category, status, _id, packageName, hotelName} = bookingsItem;
    const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)

    const handleConfirm = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "Confirm Booking to click confirm",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Confirm"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/bookings/${id}`)
          .then(res => {
            if(res.data.modifiedCount > 0){
              refetch()
            }
          })
        }
      })
    }

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete"
      }).then((result) => {
        if (result.isConfirmed) {
          setLoading(true)
          axiosSecure.delete(`/bookings/${id}`)
          .then(res => {
            if(res.data.deletedCount > 0){
              toast('Successfully Delete');
              refetch()
              statFetch()
              setLoading(false)
            }
          })
        }
      })
    }
  return (
    <>
      <tr className="bg-white border-b  dark:border-gray-700 hover:bg-slate-100">
        <th
          scope="row"
          className="px-6 py-4 font-medium whitespace-nowrap text-lg"
        >
          {userName}
        </th>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{packageName || hotelName}</td>
        <td className="px-6 py-4 text-center">{status}</td>
        <td className="px-6 py-4 text-center">{category}</td>
        <td className="px-6 py-4 text-center">
          <IconButton onClick={()=> handleConfirm(_id)} color="info" aria-label="add to shopping cart">
            {loading? 
            <CirclesWithBar
            height="20"
            width="20"
            color="#4fa94d"
            outerCircleColor="#4fa94d"
            innerCircleColor="#4fa94d"
            barColor="#4fa94d"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            /> :
            <GiConfirmed className="text-green-600"/>}
          </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
            <IconButton
              onClick={() => handleDelete(_id)}
              color="error"
              aria-label="add to shopping cart"
            >
              <Delete />
            </IconButton>
        </td>
      </tr>
    </>
  );
};

BookingsTable.propTypes = {
  bookingsItem: PropTypes.object,
  refetch: PropTypes.func,
  statFetch: PropTypes.func,
};

export default BookingsTable;
