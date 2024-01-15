import { Delete, VisibilityOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { FaEdit } from "react-icons/fa";

const BookingsTable = ({ bookingsItem }) => {
    const {userName, email, hotelName} = bookingsItem;
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
        <td className="px-6 py-4 text-center">{hotelName && 'Hotel'}</td>
        <td className="px-6 py-4 text-center">
          <IconButton color="primary" aria-label="add to shopping cart">
            <div>
              <VisibilityOutlined />
            </div>
          </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
          <IconButton color="primary" aria-label="add to shopping cart">
            <FaEdit />
          </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
          <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
            <IconButton
            //   onClick={() => handleDelete(_id)}
              color="primary"
              aria-label="add to shopping cart"
            >
              <Delete />
            </IconButton>
          </a>
        </td>
      </tr>
    </>
  );
};

BookingsTable.propTypes = {
  bookingsItem: PropTypes.object,
};

export default BookingsTable;
