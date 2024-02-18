/* eslint-disable react/prop-types */
import { VisibilityOutlined } from '@mui/icons-material';
import { Button, Divider, IconButton, InputBase, Paper } from '@mui/material';
import { FaEdit, FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ReceiptCard = ({booking}) => {
   
  console.log(booking)
    return (
      <>
      <tr className="bg-white border-b  dark:border-gray-700 hover:bg-slate-100">
        <td
          scope="row"
          className="px-6 py-4 font-medium whitespace-nowrap text-lg"
        >
          {booking.userName}
        </td>
        <td className="px-6 py-4">{booking.transactionID}</td>
        <td className="px-6 py-4 text-center">
        our_travel{booking._id.slice(-6)}
        </td>
        
        <td className="px-6 py-4 text-center">{booking.checkIn}</td>
        <td className="px-6 py-4 text-center">{booking.checkOut}</td>
        <td className="px-6 py-4 text-center">
        {booking.date}
        </td>
        <td className="px-6 py-4 text-center">
        {booking.totalPay}
        </td>
       
      </tr>
        {/* <div>
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
        </div> */}
      </>
    );
  };

export default ReceiptCard