import { Delete, VisibilityOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import { FaEdit, FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Table = ({hotel}) => {
    const {hotel_name, hotel_country, hotel_room, category} = hotel

    return (
        <tr className="bg-white border-b  dark:border-gray-700 hover:bg-slate-100">
        <th
          scope="row"
          className="px-6 py-4 font-medium whitespace-nowrap text-lg"
        >
          {hotel_name}
        </th>
        <td className="px-6 py-4">{hotel_country}</td>
        <td className="px-6 py-4 text-center">{hotel_room?.length}</td>
        <td className="px-6 py-4 text-center">{category}</td>
        <td className="px-6 py-4 text-center">
            <IconButton color="primary" aria-label="add to shopping cart">
                <Link to={`/hotelDetails/${hotel._id}`}>
                <VisibilityOutlined />
                </Link>
            </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
            <IconButton color="primary" aria-label="add to shopping cart">
                <Link to={`/dashboard/addRooms/${hotel._id}`}>
                   <FaPlusSquare />
                </Link>
            </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
            <IconButton color="primary" aria-label="add to shopping cart">
                <FaEdit />
            </IconButton>
        </td>
        <td className="px-6 py-4 text-center">
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            <IconButton color="primary" aria-label="add to shopping cart">
                <Delete />
            </IconButton>
          </a>
        </td>
      </tr>
    );
};

Table.propTypes = {
    hotel: PropTypes.object
};

export default Table;