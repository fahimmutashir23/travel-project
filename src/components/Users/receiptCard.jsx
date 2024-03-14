/* eslint-disable react/prop-types */
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
      </>
    );
  };

export default ReceiptCard